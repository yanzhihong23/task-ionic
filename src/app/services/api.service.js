(function() {
  'use strict';

  angular
    .module('taskIonic')
    .service('ApiService', ApiService);

  /** @ngInject */
  function ApiService($http, $log, APISERVER, AppService) {
  	var headers = AppService.getHeaders();

  	this.getSwitchInfo = function() {
  		return $http({
  			method: 'POST',
  			url: APISERVER + '/getSwitchInfo',
  			headers: headers
  		});
  	};

  	this.getStoreInfo = function() {
  		return $http({
  			method: 'POST',
  			url: APISERVER + '/getStoreInfo',
  			headers: headers
  		});
  	};

    this.getTaskList = function(obj) {
    	return $http({
    		method: 'POST',
    		url: APISERVER + '/queryTaskListForOwner',
    		headers: headers,
    		data: utils.param({
    			queryType: obj.type || 1, // 1: in progress, 2: complete
					start: obj.start || 0
    		})
    	});
    };

    this.getTaskDetail = function(obj) {
    	return $http({
    		method: 'POST',
    		url: APISERVER + '/getTaskDetail',
    		headers: headers,
    		data: utils.param({
    			taskId: obj.taskId
    		})
    	});
    };

    this.reviewTask = function(obj) {
    	return $http({
    		method: 'POST',
    		url: APISERVER + '/reviewTask',
    		headers: headers,
    		data: utils.param({
    			taskId: obj.taskId,
    			attitudeScore: obj.attitude,
    			satisfactionScore: obj.satisfaction,
    			methodScore: obj.method,
    			content: obj.comment
    		})
    	});
    };

    this.publishTask = function(obj) {
    	return $http({
    		method: 'POST',
    		url: APISERVER + '/publishTask',
    		headers: headers,
    		data: utils.param({
    			taskTitle: obj.taskTitle,
					taskContent: obj.taskContent,
					taskType: obj.taskType
    		})
    	});
    };

    $log.debug('ApiService end');
    
  }
})();
