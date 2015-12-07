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
        url: '/detail/:id',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      })
      .state('qr', {
        url: '/qr/:id',
        templateUrl: 'app/qr/qr.html',
        controller: 'QrController',
        controllerAs: 'qr'
      })
      .state('review', {
        url: '/review/:id',
        templateUrl: 'app/review/review.html',
        controller: 'ReviewController',
        controllerAs: 'review'
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
        controllerAs: 'help'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
