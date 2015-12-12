(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('QrController', QrController);

  /** @ngInject */
  function QrController($state, $stateParams, $log, ApiService, utils) {
    var vm = this, id = $stateParams.id;

    ApiService.getQRCodeParams({taskId: id}).success(function(data) {
      if(+data.flag === 1) {
        var qr = data.data;
        // qr.taskId = id;

        vm.code = utils.param(qr);
        $log.debug(vm.code);
      }
    });
  }
})();
