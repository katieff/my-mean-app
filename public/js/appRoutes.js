/**
 * Created by ferstlk on 11.10.2015.
 */

angular.module('myMeanRoutes', []).config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/nerds', {
                templateUrl: 'views/nerd.html',
                controller: 'NerdController'
            });
        $locationProvider.html5Mode(true);
    }
]);