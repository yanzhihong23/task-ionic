(function() {
  'use strict';

  angular
    .module('taskIonic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
