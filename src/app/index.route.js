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
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
      })
      .state('review', {
        url: '/review',
        templateUrl: 'app/review/review.html',
        controller: 'ReviewController',
      })
      .state('publish', {
        url: '/publish',
        templateUrl: 'app/publish/publish.html',
        controller: 'PublishController',
        controllerAs: 'publish'
      })
      .state('help', {
        url: '/help',
        templateUrl: 'app/help/help.html',
        controller: 'HelpController',
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
