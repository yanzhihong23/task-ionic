(function() {
  'use strict';

  angular
    .module('taskIonic')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push(function($rootScope, $log) {
      return {
        request: function(config) {
          $rootScope.$broadcast('loading:show');
          
          return config;
        },
        response: function(response) {
          $rootScope.$broadcast('loading:hide');

          if(response.data && +response.data.flag === -1) {
          	// zjtoken and storeId not match
          	$log.error('store info error');
          	$rootScope.$broadcast('storeInfoError');
          }

          return response;
        }
      }
    });

    localStorageServiceProvider.setPrefix('task');
  }

})();
