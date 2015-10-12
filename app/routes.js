/**
 * Created by ferstlk on 11.10.2015.
 */

var Nerd = require('./models/nerd');
var express     = require('express');

module.exports = function(app) {

    var router = express.Router();

    // server routes ===============================================
    router.get('/status', function(req, res) {
        res.json({message: 'Server up and running...'});
    });

    router.use(function(req, res, next) {
        // do logging
        console.log(req.method + ' ' + req.url + ' with body:' + JSON.stringify(req.body));
        next(); // make sure we go to the next routes and don't stop here
    });

    // nerds routes
    router.route('/nerds')
        .get(function(req, res) {
            Nerd.find(function(err, nerds) {
                if(err) {
                    res.send(err);
                }
                res.json(nerds);
            });
        })
        .post(function(req, res) {
            var nerd = new Nerd();
            nerd.name = req.body.name;
            nerd.save(function(err) {
                if(err)
                    res.send(err);

                res.json({message: 'Nerd created'});
            });
        });

    router.route('/nerds/:nerd_id')
        .get(function(req, res) {
            Nerd.findById(req.params.nerd_id, function(err, nerd) {
                if(err) {
                    res.send(err);
                }
                res.json(nerd);
            });
        })
        .put(function(req, res) {
            Nerd.findById(req.params.nerd_id, function(err, nerd) {
                if(err) {
                    res.send(err);
                }
                nerd.name = req.body.name;
                nerd.save(function(err) {
                    if(err) {
                        res.send(err);
                    }
                    res.json({message: 'Nerd updated.'});
                });
            });
        })
        .delete(function(req, res) {
            Nerd.remove({
                _id: req.params.nerd_id
            }, function(err) {
                if(err) {
                    res.send(err);
                }
                res.json({message: 'Successfully deleted'});
            });
        });

    app.use('/api', router);

    // front end routes ===========================================
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};