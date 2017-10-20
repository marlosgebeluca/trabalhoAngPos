(function() {
  'use strict';

  angular
    .module('explorer')
    .controller('GitHubController', GitHubController);

  /** @ngInject */
  function GitHubController(GithubUserRepository, GithubUserSearch, $localStorage, $scope, $state, $log, $timeout, $interval, toastr, Github, GithubUser, $http, leafletData) {
    var vm = this;

    $scope.pesquisar = function(){
      let url;
      let query;
      let pesquisarUsuario = false;
      $scope.exibirUsu = false;
      $scope.exbirRepo = false;
      $scope.exbirRepousu = false;
      $scope.itens = [];
      
      if($scope.tipoPesquisa === 'Usuário'){
        if($scope.usuario !== '' && $scope.usuario !== undefined){
          GithubUserSearch.get({
            q: $scope.usuario
          }, function(data) {
            console.log(data);
            $scope.itens = data.items;
            $scope.exibirUsu = true;
            $scope.exbirRepo = false;
            $scope.exbirRepousu = false;
          });
        }else{
          toastr.error('Informe o campo para busca', 'Erro');
        }
      }else if($scope.tipoPesquisa === 'Repositório'){
        if($scope.repositorio !== '' && $scope.repositorio !== undefined){
          Github.get({
            q: $scope.repositorio
          }, function(data) {
            console.log(data);
            $scope.itens = data.items;
            $scope.exbirRepo = true;
            $scope.exibirUsu = false;
            $scope.exbirRepousu = false;
          });
        }else{
          toastr.error('Informe o campo para busca', 'Erro');
        }
      }else if($scope.tipoPesquisa === 'Repositório do usuário'){
        if(($scope.usuario !== '' && $scope.usuario !== undefined) && ($scope.repositorio !== '' && $scope.repositorio !== undefined)){
          GithubUserRepository.get({
            username: $scope.usuario,
            repo: $scope.repositorio
          }, function(data) {
            console.log(data);
            $scope.itens = data;
            $scope.exbirRepousu = true;
            $scope.exibirUsu = false;
            $scope.exbirRepo = false;
          });
        
        }else if(($scope.usuario !== '' && $scope.usuario !== undefined) && ($scope.repositorio === '' || $scope.repositorio === undefined)){
          GithubUser.query({
            username: $scope.usuario
          }, function(data) {
            console.log(data);
            $scope.itens = data;
            $scope.exbirRepousu = true;
            $scope.exibirUsu = false;
            $scope.exbirRepo = false;
          });
        }else{
          toastr.error('Informe os campos para buscar', 'Erro');
        }
      }else{
        toastr.error('Selecione um tipo de pesquisa', 'Erro');
      }
    };

    // toastr.success('Hello world!', 'Toastr fun!');
    // toastr.info('We are open today from 10 to 22', 'Information');
  }
})();
