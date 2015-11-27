/* global moment:false */
(function() {
  'use strict';

  angular
    .module('taskIonic')
    .constant('moment', moment)
    // .constant('HOST', 'http://b2b.zaijiadd.com')
    .constant('HOST', 'http://192.168.16.158:8080')
    .factory('APISERVER', function($location, HOST) {
    	var host = /nonobank.com/.test($location.host()) ? $location.protocol() + '://' + $location.host() + ($location.port() ? ':' + $location.port() : '') : HOST;

    	return host + '/zjdd-api';
    })
    .constant('$ionicLoadingConfig', {
	    template: '<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
	  });

})();
