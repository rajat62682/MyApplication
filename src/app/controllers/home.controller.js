
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
 
     $scope.column='name';
     $scope.reverse=false;

     this.sortColumn =function(col)
     {
       $scope.column=col;
       if($scope.reverse)
       $scope.reverse=false;
       else
       $scope.reverse=true;

     }
     this.sortClass=function(col)
     {
        if($scope.column==col)
        {
          if($scope.reverse)
          {
            return 'arrow-down';
          }
          else
          return 'arrow-up';

        }
        else
        return ' ';


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
