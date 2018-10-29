
(function() {
    'use strict';
  
    angular
      .module('myApplication')
      .controller('HomeController', HomeController);
  
    /** @ngInject */
    function HomeController($scope,$http) {
      var _this = this;
      $scope.myData=[];
      $http.get('json/home.json').success(function(data){
         $scope.myData=data;
        });

    }

  })();
  