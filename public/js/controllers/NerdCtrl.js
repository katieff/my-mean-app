/**
 * Created by ferstlk on 11.10.2015.
 */

angular.module('NerdCtrl', []).controller('NerdController',
    function($scope, Nerd) {

        $scope.tagline = 'Nothing beats a pocket protector!';
        Nerd.get().then(function(res) {
            $scope.nerds = res.data;
        });

});