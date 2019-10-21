'use strict';

angular.module('myApp.animalList', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/animals', {
      templateUrl: 'animal-list/animal-list.html',
      controller: 'AnimalListCtrl'
    });
  }])

  .controller('AnimalListCtrl', ['$http', '$scope', '$location', 'uiGridConstants', function ($http, $scope, $location, uiGridConstants) {
    $scope.aFilter = "";

    const sortChanged = (grid, sortColumns) => {
      console.log(sortColumns);
      if (sortColumns.length === 0 || sortColumns[0].name !== $scope.gridAnimal.columnDefs[0].name) {
        $http.get('http://localhost:1203/animals')
          .then(function (response) {
            $scope.gridAnimal.data = response.data;
          });
      } else {
        switch (sortColumns[0].sort.direction) {
          case uiGridConstants.ASC:
            $http.get('/data/100_ASC.json')
              .then(function (response) {
                $scope.gridAnimal.data = response.data;
              });
            break;
          case uiGridConstants.DESC:
            $http.get('/data/100_DESC.json')
              .then(function (response) {
                $scope.gridAnimal.data = response.data;
              });
            break;
          case undefined:
            $http.get('/data/100.json')
              .then(function (response) {
                $scope.gridAnimal.data = response.data;
              });
            break;
        }
      }
    }

    $scope.sortChanged = sortChanged;
    $scope.gridAnimal = {
      enableSorting: false,
      enableColumnMenus: false,
      columnDefs: [
        { name: 'id', enableSorting: true },
        { name: 'common_name' },
        { name: 'sci_name', enableSorting: true }
      ],
      onRegisterApi: function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.core.on.sortChanged($scope, $scope.sortChanged);
        $scope.sortChanged($scope.gridApi.grid, [$scope.gridAnimal.columnDefs[1]]);
      }
    };
    // $http
    //   .get('http://localhost:1203/animals')
    //   .then(res => {
    //     $scope.animalList = res.data;
    //     $scope.gridAnimal.data = res.data;
    //   });

    $scope.goToNew = () => {
      $location.path('/animals/new');
    }

    $scope.goToImport = () => {
      $location.path('/animal-import');
    }

    $scope.goToDetail = (id) => {
      $location.path(`/animals/${id}`);
    }

    $scope.goToEdit = ($event, id) => {
      $event.stopPropagation();
      $location.path(`/animals/${id}/edit`);
    }
  }]);

