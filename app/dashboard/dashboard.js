'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
  }])

  .controller('DashboardCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
    //watch, disgest, apply
    $scope.data = { time: new Date() };
    $scope.updateTime = function () {
      $scope.data.time = new Date();
    }
    console.log(document.querySelector('div'))
    document.querySelector('button')
      .addEventListener('click', function () {
        console.log("update time clicked");
        $scope.data.time = new Date();
      }, false);
    // accordion
    $scope.oneAtATime = true;
    var $ctrl = this;
    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function () {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };


    // modal
    $scope.modalOpen = () => {

      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'dashboard/test-modalContent.html',
        controllerAs: '$ctrl',
        controller: 'TestModalCtrl',
        appendTo: undefined,
        windowTemplateUrl: 'lib/angular-ui-bootstrap/template/modal/window.html'
      });
    }


  }]);

angular
  .module('myApp.dashboard')
  .controller('TestModalCtrl', function ($uibModalInstance) {
    var $ctrl = this;
    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });