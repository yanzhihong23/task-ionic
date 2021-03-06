/* global moment:false */
(function() {
  'use strict';

  angular
    .module('taskIonic')
    .constant('moment', moment)
    // .constant('HOST', 'http://b2b.zaijiadd.com')
    .constant('HOST', 'http://192.168.16.75:8080')
    .factory('APISERVER', function($location, HOST) {
    	var host = /zaijiadd.com/.test($location.host()) ? $location.protocol() + '://' + $location.host() + ($location.port() ? ':' + $location.port() : '') : HOST;

        // return host + '/zjdd-api';
    	return host + '/zaijiadd-app';
    })
    .constant('$ionicLoadingConfig', {
	    template: '<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
	  });

})();
