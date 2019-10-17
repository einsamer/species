'use strict';

angular.module('myApp.importAnimal', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/animal-import', {
      templateUrl: 'animal-import/animal-import.html',
      controller: 'ImportAnimalCtrl'
    });
  }])

  .controller('ImportAnimalCtrl', ['$http', '$scope', '$location', function ($http, $scope, $location) {
    $scope.formData = {};


    $scope.submitForm = () => {

      const file = document.getElementById('animal_import_file').files[0];
      const formData = new FormData();
      formData.append('files', file)
      $http
        .post('http://localhost:1203/import-animal', formData, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          },
        })
        .then(res => {
          // $location.path('/animals');
        })
    }
  }]);