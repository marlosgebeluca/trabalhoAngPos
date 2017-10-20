(function() {
  'use strict';

  angular
    .module('explorer')
    .directive('relacao', relacao);

  /** @ngInject */
  function relacao() {
    var directive = {
      restrict: 'EA',
      templateUrl : 'app/components/directives/relacao.html',
      scope: {
          creationDate: '='
      },
      controller: RelacaoController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
    /** @ngInject */
    function RelacaoController(moment) {
      var vm = this;

    }
  }

})();
