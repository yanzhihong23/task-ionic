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
        controller: 'ListController',
      })
      .state('detail', {
        url: '/',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
      })
      .state('review', {
        url: '/',
        templateUrl: 'app/review/review.html',
        controller: 'ReviewController',
      })
      .state('publish', {
        url: '/',
        templateUrl: 'app/publish/publish.html',
        controller: 'PublishController',
      })
      .state('help', {
        url: '/',
        templateUrl: 'app/help/help.html',
        controller: 'HelpController',
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
