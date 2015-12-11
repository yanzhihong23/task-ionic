(function() {
  'use strict';

  angular
    .module('taskIonic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $ionicLoading, $ionicHistory, $location, utils, AppService) {
    $rootScope.$on('loading:show', function() {
      $ionicLoading.show();
    });

  	$rootScope.$on('loading:hide', function() {
  	  $ionicLoading.hide();
  	});

  	// init headers
  	AppService.initHeaders();

    $rootScope.$ionicGoBack = function() {
      if($location.path() === '/list') {
        $log.debug('back to app');

        if(zjddapp) {
          zjddapp.popWebViewController(); // back to app
        }
      } else {
        $ionicHistory.goBack();
      }
      
    };

    $log.debug('runBlock end');
  }

})();
