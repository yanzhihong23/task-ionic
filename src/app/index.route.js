(function() {
  'use strict';

  angular
    .module('taskIonic')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
      })
      .state('list', {
        url: '/',
        templateUrl: 'app/list/list.html',
        controller: 'MainController',
      })
      .state('detail', {
        url: '/',
        templateUrl: 'app/detail/detail.html',
        controller: 'MainController',
      })
      .state('review', {
        url: '/',
        templateUrl: 'app/review/review.html',
        controller: 'MainController',
      })
      .state('publish', {
        url: '/',
        templateUrl: 'app/publish/publish.html',
        controller: 'MainController',
      })
      .state('help', {
        url: '/',
        templateUrl: 'app/help/help.html',
        controller: 'MainController',
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
