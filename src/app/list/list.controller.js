(function() {
  'use strict';

  angular
    .module('taskIonic')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, $log, ApiService) {
    var vm = this;

    vm.onTabSelect = onTabSelect;

    onTabSelect(0);

    function onTabSelect(type) {
      ApiService.getTaskList({type: type}).success(function(data) {
        if(+data.flag === 1) {
          vm.tasks = data.data.list.map(function(obj) {
            return {
              title: obj.taskTitle,
              date: moment(obj.updatedDate).format('YYYY.MM.DD')
            }
          })
        }
      })
    };
  }
})();
