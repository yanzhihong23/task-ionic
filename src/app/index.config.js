(function() {
  'use strict';

  angular
    .module('taskIonic')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push(function($rootScope) {
      return {
        request: function(config) {
          return config;
        },
        response: function(response) {
          $rootScope.$broadcast('loading:hide')
          return response;
        }
      }
    });

    localStorageServiceProvider.setPrefix('task');
  }

})();
