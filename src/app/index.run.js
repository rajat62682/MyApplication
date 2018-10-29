(function() {
  'use strict';

  angular
    .module('myApplication')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
