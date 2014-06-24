'use strict'

(function() {
  /**
  * app Module
  *
  * Description
  */
  var app = angular.module('directivesOne', [
    'ngResource',
    'ngRoute',
    'testControllers',
    'testServices'
    ])

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

angular.bootstrap(document.body, ['directivesOne']);