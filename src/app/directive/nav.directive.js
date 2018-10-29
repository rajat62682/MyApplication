(function() {
    'use strict';
  
    angular
      .module('myApplication')
      .directive('myDir', function($location){
         return {
           scope: {name:'@'},
          templateUrl:'app/directive/navbar.html',
          link:function(scope)
          {
              scope.logout=function()
              {
                 // alert("Worked");
               localStorage.removeItem('valid');
               $location.path("/");

              }
              scope.showAnother=function ()
              {
                  $location.path('/another');
              }
              scope.home=function()
              {
                $location.path('/home');
              }
          } 
        }
      });
  
    /** @ngInject */
       
    
        


  })();
  