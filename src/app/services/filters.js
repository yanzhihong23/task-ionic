(function() {
  'use strict';

  angular
    .module('taskIonic')
    .filter('status', status);

  /** @ngInject */
  function status() {
    var map = {
      '0': '发布中',
      '1': '进行中',
      '2': '待评价',
      '4': '已完成',
    }

    return function(id) {
      return map[id] || id;
    };
    
  }
})();
