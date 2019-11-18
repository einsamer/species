'use strict';

function TableListCtrl($scope) {
  $scope.gridOIC = {
    data: MOCK_OIC,
  }
}

TableListCtrl.$inject = ['$scope']

angular.module('myApp.table-list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table-list', {
    templateUrl: 'table-list/table-list.html',
    controller: 'TableListCtrl'
  });
}])

.controller('TableListCtrl', TableListCtrl);