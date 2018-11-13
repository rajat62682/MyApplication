(function () {
  'use strict';

  angular
    .module('myApplication')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      }).when('/home', {

        resolve: {
          "check": function ($location) {
            if (!localStorage.getItem('valid')) {
              $location.path('/');
            }
          }
        },

        templateUrl: 'app/views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'

      }).when('/another', {

        resolve: {
          "check": function ($location) {
            if (!localStorage.getItem('valid')) {
              $location.path('/');
            }
          }
        },

        templateUrl: 'app/views/chart.html',
        controller: 'ChartDemoController',
        controllerAs: 'chart'

      });
  }

})();
