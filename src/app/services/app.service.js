(function() {
  'use strict';

  angular
    .module('taskIonic')
    .service('AppService', AppService);

  /** @ngInject */
  function AppService($log, $rootScope, $location, localStorageService, utils) {
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

      $rootScope.isFull = !!(search.version || $search.version);
      $log.debug('is full screen: ', $rootScope.isFull);

  		// mock
  		// zjtoken = 'AA6C935B-519C-423D-A4CF-5E6E248D036B-15240-000006C5D1E6EBC6`7APVlAiIhUc8Vh02Wa0V5slLKb60If/N`52';
  		// storeId = 58;

      // zjtoken = '353405065702585`TtV8Jd4FbB6eEY6B/ZlkewS8g/AYBu52`1238';
      // storeId = 1222;

  		if(!zjtoken || !storeId) {
  			utils.alert({
  				content: '请重新登录'
  			});
  		} else {
  			var headers = {
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
