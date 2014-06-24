(function() {
  var app = angular.module('testServices', []);

  app.service('testService', [function () {
    this.users = [
      {name: 'brian', about: 'coolio'},
      {name: 'bob', about: 'coolio2'},
      {name: 'bobbiton', about: 'coolio3'},
      {name: 'borne', about: 'coolio4'}
    ];
  }])
})();