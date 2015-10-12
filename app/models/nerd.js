/**
 * Created by ferstlk on 11.10.2015.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd',
    {
        name: {type: String, default: ''}
    });