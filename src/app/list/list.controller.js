(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($state, $log, ApiService) {
    var vm = this;

    vm.onTabSelect = onTabSelect;
    vm.showDetail = showDetail;

    function onTabSelect(type) {
      ApiService.getTaskList({type: type}).success(function(data) {
        if(+data.flag === 1) {
          vm.tasks = data.data.list.map(function(obj) {
            var bgClass, desc;
            switch(obj.status) {
              case '0':
                bgClass = 'assertive-bg';
                desc = '正在等待外包商前来接受任务';
                break;
              case '1':
                bgClass = 'positive-bg';
                desc = '正在进行推广'
                break;
              case '2':
                bgClass = 'energized-bg';
                desc = '已确认完成任务.<span class="balanced">进行评价</span>'
                break;
              case '4':
                bgClass = 'balanced-bg';
                desc = '已确认完成任务'
            }

            return {
              id: obj.taskId,
              title: obj.taskTitle,
              type: obj.taskType,
              status: obj.status,
              bgClass: bgClass,
              desc: desc,
              date: moment(obj.updatedDate).format('YYYY.MM.DD')
            };
          });
        }
      });
    }

    function showDetail(id) {
      $state.go('detail', {id: id});
    }

  }
})();
