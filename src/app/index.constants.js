/* global moment:false */
(function() {
  'use strict';

  angular
    .module('taskIonic')
    .constant('moment', moment)
    .constant('$ionicLoadingConfig', {
	    template: '<ion-spinner icon="bubbles" class="spinner-assertive"></ion-spinner>'
	  });

})();
