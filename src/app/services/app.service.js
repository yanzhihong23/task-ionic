(function() {
  'use strict';

  angular
    .module('taskIonic')
    .service('AppService', AppService);

  /** @ngInject */
  function AppService($location, localStorageService, utils) {
  	this.setHeaders = function(headers) {
  		localStorageService.add('headers', headers);
  	};

  	this.getHeaders = function() {
  		return localStorageService.get('headers');
  	};

  	this.initHeaders = function() {
  		// var headers = this.getHeaders();
  		// if(headers) return;

  		var search = utils.getLocationSearch(),
          $search = $location.search(),
					zjtoken = search.zjtoken || $search.zjtoken,
      		storeId = search.store_id || $search.store_id;

  		if(!zjtoken || !storeId) {
  			utils.alert({
  				content: '请重新登录'
  			});
  		} else {
  			headers = {
  				'Content-Type': 'application/x-www-form-urlencoded',
  				'Cache-Control': 'max-age=60',
  				'zjtoken': zjtoken,
  				'storeid': storeId,
  				'userType': 2
  			};

  			this.setHeaders(headers);
  		}
  	};
  }
})();
