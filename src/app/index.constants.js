/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('myApplication')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
