
(function () {
  'use strict';

  angular
    .module('myApplication')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $http) {
    var _this = this;
    $scope.myData = [];
    $scope.newData = [];
    $http.get('json/home.json').success(function (data) {
      $scope.myData = data;
      $scope.newData = angular.copy(data);
    });

    this.search = function () {
      $scope.newData = angular.copy($scope.myData.filter(checkValue));

    }
    function checkValue(item) {

      if (item.name.toLowerCase().includes($scope.myInput.toLowerCase())) {
        return true;
      } else if (item.email.toLowerCase().includes($scope.myInput.toLowerCase())) {
        return true;
      }
      else if (item.phone.toLowerCase().includes($scope.myInput.toLowerCase())) {
        return true;
      }

      return false;

    }
  }

})();
