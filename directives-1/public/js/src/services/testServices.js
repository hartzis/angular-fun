(function() {
  var app = angular.module('testServices', []);

  app.service('testService', [function () {
    this.users = ['brian', 'bob', 'bobbiton', 'borne'];
  }])
})();