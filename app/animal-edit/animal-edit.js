'use strict';

angular.module('myApp.editAnimal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animals/:id/edit', {
    templateUrl: 'animal-edit/animal-edit.html',
    controller: 'EditAnimalCtrl'
  });
}])

.controller('EditAnimalCtrl', ['$http', '$scope', '$location', '$routeParams', function($http, $scope, $location, $routeParams) {
  $scope.animal = {};

  const { id } = $routeParams;
  $http.get(`http://localhost:1203/animals/${id}`)
    .then(res => {
      $scope.animal = res.data;
    });

  $scope.submitForm = () => {
    $http
      .put(`http://localhost:1203/animals/${id}`, $scope.animal)
      .then(res => {
        $location.path('/animals');
      })
  }
}]);