/**
 * Created by ferstlk on 11.10.2015.
 */

angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/nerds');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        },

        //call to UPDATE a ners
        update: function(id, nerdData) {
            return $http.put('/api/nerds/' + id, nerdData);
        },

        getNerd: function(id) {
            return $http.get('/api/nerds/' + id);
        }
    }

}]);