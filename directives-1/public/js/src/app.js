'use strict';

(function() {

  var app = angular.module('directivesOne', [
    'ngResource',
    'ngRoute',
    'testControllers',
    'testServices',
    'userDirectives'
    ]);

  app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/test',
          controller: 'testCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  }]);

})();

