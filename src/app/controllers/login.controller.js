
(function() {
    'use strict';
  
    angular
      .module('myApplication')
      .controller('LoginController', LoginController);
  
    /** @ngInject */
    function LoginController($scope,$location) {
      var _this = this;
      var user="rajat";
      var  pwd="test";
       var nav=document.getElementById("#navBar");

      $scope.errorMsg="";

      _this.login=function()
      {
          //alert($scope.login.userName);
         if($scope.login.userName==user && $scope.login.pwd==pwd )
         {
         //nav.setAttribute("display","block");
          localStorage.setItem("valid",true);

         $location.path('/home') 

                     
         }
         else {
             
          $scope.errorMsg="Enter Valid UserName and Password!!!";

         }


      }
    }
  })();
  