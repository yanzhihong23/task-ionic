(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ApiService, $state, localStorageService) {
    var helpShowed = localStorageService.get('help');

    ApiService.getSwitchInfo().success(function(data) {
    	if(+data.flag === 1) {
        if(helpShowed) {
          $state.go('list');
        } else {
          localStorageService.set('help', true);
          $state.go('help');
        }
    	} else {

      }
    });
  }
})();
