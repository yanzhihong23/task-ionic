(function() {
  'use strict';

  angular
    .module('taskIonic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $ionicLoading) {
  	$rootScope.$on('loading:hide', function() {
  	  $ionicLoading.hide();
  	});

    $log.debug('runBlock end');
  }

})();
