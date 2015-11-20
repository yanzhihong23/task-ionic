(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ApiService, $state, $ionicLoading) {
    $ionicLoading.show();
    ApiService.getSwitchInfo().success(function(data) {
    	if(+data.flag === 1) {
    		$state.go('list');
    	}
    })
  }
})();
