(function() {
  'use strict';

  angular
    .module('taskIonic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $ionicLoading, utils, AppService) {
  	$rootScope.$on('loading:hide', function() {
  	  $ionicLoading.hide();
  	});

  	// init headers
  	AppService.initHeaders();

    $log.debug('runBlock end');
  }

})();
