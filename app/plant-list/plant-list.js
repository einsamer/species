'use strict';

angular.module('myApp.plantList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/plants', {
    templateUrl: 'plant-list/plant-list.html',
    controller: 'PlantListCtrl'
  });
}])

.controller('PlantListCtrl', [function() {

}]);