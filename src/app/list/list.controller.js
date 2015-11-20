(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, $log, ApiService) {
    $scope.onTabSelect = function(type) {
      $log.debug(type);
      switch(type) {
        case 0: // all
          break;
        case 1: // published
          break;
        case 2: // accepted
          break;
        case 3: // completed
          break;
        case 4: // reviewed
          break;
      }
    };
  }
})();
