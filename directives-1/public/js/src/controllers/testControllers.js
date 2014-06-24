(function() {
  var app = angular.module('testControllers', []);

  app.controller('testCtrl', ['$scope', 'testService', 
    function ($scope, testService) {
      $scope.users = testService.users;
  }])
})();