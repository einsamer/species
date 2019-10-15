'use strict';

angular.module('myApp.animalList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animals', {
    templateUrl: 'animal-list/animal-list.html',
    controller: 'AnimalListCtrl'
  });
}])

.controller('AnimalListCtrl', ['$http', '$scope', '$location', function($http, $scope, $location) {
  $scope.aFilter = "";
  $http
    .get('http://localhost:1203/animals')
    .then(res => {
      $scope.animalList = res.data;
    });
  
  $scope.goToNew = () => {
    $location.path('/animals/new');
  }
}]);