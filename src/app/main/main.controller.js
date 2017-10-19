(function() {
  'use strict';

  angular
    .module('explorer')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(GithubUserRepository, GithubUserSearch, $localStorage, $scope, $state, $log, $timeout, $interval, toastr, Github, GithubUser, $http, leafletData) {
    var vm = this;

    $scope.pesquisar = function(){
      let url;
      let query;
      let pesquisar = false;
      $scope.exibir = false;
      $scope.itens = [];
      
      if($scope.tipoPesquisa == 'Usuário'){
        if($scope.usuario !== '' && $scope.usuario !== undefined){
          query = $scope.usuario;
          url = 'https://api.github.com/search/users?q='+query;
          
          pesquisar = true;
        }else{
          toastr.error('Informe algo para buscar', 'Erro');
        }
      }else if($scope.tipoPesquisa == 'Repositório'){
        
      }else{
        toastr.error('Selecione um tipo de pesquisa', 'Erro');
      }

      if(pesquisar){
        $http.get(url).success(function (data) {
          console.log(data.items);
          toastr.success('Registros encontrados '+data.items.length, 'Sucesso!');
          
          $scope.itens = data.items;
          $scope.exibir = true;
        });
      }
    };

    // toastr.success('Hello world!', 'Toastr fun!');
    // toastr.info('We are open today from 10 to 22', 'Information');

  }
})();
