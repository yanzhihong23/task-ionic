(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($state, $stateParams, $log, ApiService, localStorageService, utils) {
    var vm = this, id = $stateParams.id;

    vm.review = review;
    vm.cancel = cancel;
    vm.qr = qr;

    getTaskDetail();

    function getTaskDetail() {
      ApiService.getTaskDetail({taskId: id}).success(function(data) {
        if(+data.flag === 1) {
          vm.info = data.data;

          vm.info.publishDate = moment(vm.info.publishDate).format('YYYY.MM.DD');
          vm.info.currentDate = moment().format('YYYY.MM.DD HH:mm:ss');

          if(vm.info.acceptedDate) {
            vm.info.acceptedDate = moment(vm.info.acceptedDate).format('YYYY.MM.DD HH:mm:ss');
          }

          if(vm.info.finishDate) {
            vm.info.finishDate = moment(vm.info.finishDate).format('YYYY.MM.DD HH:mm:ss');
          }

          if(vm.info.reviewDate) {
            vm.info.reviewDate = moment(vm.info.reviewDate).format('YYYY.MM.DD HH:mm:ss');
          }

          if(vm.info.status === 0) {
            vm.info.cancelEnabled = true;
          } else {
            vm.info.reviewText = '最终评价';
            if(vm.info.acceptorType === 3) { // MP
              if(vm.info.status !== 3) {
                vm.info.reviewText = '每日评价';
                if(vm.info.status > 3) {
                  vm.info.reviewDisabled = true;
                }
              }
            } else if(vm.info.status !== 3) {
              vm.info.reviewDisabled = true;
            }
          }
        }
      });
    }

    function review() {
      localStorageService.set('info', vm.info);
      
      $state.go('review', {id: id});
    }

    function qr() {
      $state.go('qr', {id: id});
    }

    function cancel() {
      utils.confirm({
        content: '请确认是否取消当前任务',
        cancelText: '否',
        okText: '是',
        onOk: doCancel
      });
    }

    function doCancel() {
      ApiService.cancelTask({taskId: $stateParams.id}).success(function(data) {
        if(+data.flag === 1) {
          utils.alert({
            content: '任务取消成功',
            callback: function() {
              utils.goBack();
            }
          })
        } else {
          utils.alert({
            content: data.msg
          });
        }
      });
    }
  }
})();
