(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('ReviewController', ReviewController);

  /** @ngInject */
  function ReviewController(localStorageService, $stateParams, ApiService, utils) {
    var vm = this;

    vm.submit = submit;

    vm.info = localStorageService.get('info');

    function submit() {
      ApiService.reviewTask({
        taskId: $stateParams.id,
        attitude: vm.attitude,
        satisfaction: vm.satisfaction,
        method: vm.method,
        comment: vm.comment
      }).success(function(data) {
        if(+data.flag === 1) {
          utils.alert({
            title: '评价成功',
            content: '感谢您对本次推广服务的评价，此评价将记录到外包商的年度考评审核中。',
            callback: function() {
              utils.goBack();
            }
          });
        } else {
          utils.alert({
            title: '评价失败',
            content: data.msg
          });
        }
      });
    }
    
  }
})();
