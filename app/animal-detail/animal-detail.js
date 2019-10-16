'use strict';

angular.module('myApp.animalDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/animals/:id', {
    templateUrl: 'animal-detail/animal-detail.html',
    controller: 'AnimalDetailCtrl'
  });
}])

.controller('AnimalDetailCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
  const { id } = $routeParams;
  $http.get(`http://localhost:1203/animals/${id}`)
    .then(res => {
      $scope.animal = res.data;
    });
}]);