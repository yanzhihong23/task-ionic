(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($stateParams, $log, ApiService) {
    var vm = this;
    $log.debug($stateParams.id);

    // vm.getTaskDetail = getTaskDetail;

    getTaskDetail();

    function getTaskDetail() {
      ApiService.getTaskDetail({taskId: $stateParams.id}).success(function(data) {
        if(+data.flag === 1) {
          vm.info = data.data;

          vm.info.publishDate = moment(vm.info.publishDate).format('YYYY.MM.DD');

          if(vm.info.acceptedDate) {
            vm.info.acceptedDate = moment(vm.info.acceptedDate).format('YYYY.MM.DD HH:mm:ss');
          }

          if(vm.info.finishDate) {
            vm.info.finishDate = moment(vm.info.finishDate).format('YYYY.MM.DD HH:mm:ss');
          }

          if(vm.info.reviewDate) {
            vm.info.reviewDate = moment(vm.info.reviewDate).format('YYYY.MM.DD HH:mm:ss');
          }
        }
      })
    }
   }
})();
