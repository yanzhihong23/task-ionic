(function() {
  'use strict';

  angular
    .module('taskIonic')
    .directive('back', back);

  /** @ngInject */
  function back($ionicHistory, $log) {
    var directive = {
      restrict: 'E',
      template: '<img src="assets/images/back-btn@2x.png" width="38" class="back-btn">',
      link: function(scope, element, attr) {
        element.bind('click', function() {
          $log.debug($ionicHistory.backView());
          $ionicHistory.goBack();
        });
      }
    };

    return directive;
  }

})();