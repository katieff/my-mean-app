/**
 * Created by ferstlk on 11.10.2015.
 */

angular.module('NerdCtrl', []).controller('NerdController',
    function($scope, Nerd, $timeout) {

        $scope.newNerd = "";

        $scope.tagline = 'Nothing beats a pocket protector!';
        Nerd.get().then(function(res) {
            $scope.nerds = res.data;
        });

        $scope.deleteNerd = function(nerd) {
            Nerd.delete(nerd._id).then(function() {
                Nerd.get().then(function(res) {
                    $scope.nerds = res.data;
                    $scope.message = "Successfully deleted nerd!";
                    $timeout(function() {
                        $scope.message = "";
                    }, 1200);
                });
            }, function(err) {
                $scope.errMessage="An Error occured...";
                $timeout(function() {
                    $scope.errMessage = "";
                }, 1200);
            });
        };

        $scope.addNerd = function(name) {
            if(name) {
                Nerd.create({"name":name}).then(function() {
                    // alert("Nerd created");
                    Nerd.get().then(function(res) {
                        $scope.nerds = res.data;
                    });
                    $scope.newNerd = "";
                    $scope.message = "Successfully added nerd!";
                    $timeout(function() {
                        $scope.message = "";
                    }, 1200)
                }, function(err) {
                    $scope.errMessage="An Error occured...";
                    $timeout(function() {
                        $scope.errMessage = "";
                    }, 1200);
                });
            }
        };

});