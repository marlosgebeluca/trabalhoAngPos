(function() {
  'use strict';

  angular
    .module('explorer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('github', {
        url: '/github',
        templateUrl: 'app/github/github.html',
        controller: 'GitHubController',
        controllerAs: 'vm'
      })
      .state('githubDetais', {
        url: '/githubDetais',
        templateUrl: 'app/github/githubDetais.html',
        controller: 'GitHubController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
