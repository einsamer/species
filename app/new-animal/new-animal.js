'use strict';

angular.module('myApp.newAnimal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animals/new', {
    templateUrl: 'new-animal/new-animal.html',
    controller: 'NewAnimalCtrl'
  });
}])

.controller('NewAnimalCtrl', ['$http', '$scope', '$location', function($http, $scope, $location) {
  $scope.formData = {};
  $scope.submitForm = () => {
    $http
      .post('http://localhost:1203/add-animal', $scope.formData)
      .then(res => {
        $location.path('/animals');
      })
  }
}]);