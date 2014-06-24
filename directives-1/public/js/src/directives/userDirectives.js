(function() {
  var app = angular.module('userDirectives', []);

  app.directive('userPanel', [function() {
    var userPanel = {
      restrict: 'E',
      replace: true,
      scope: {
        userInfo: '=userInfo'
      },
      templateUrl: 'templates/userPanel.html'
    };

    return userPanel;
  }])
})();