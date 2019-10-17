'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard',
  'myApp.animalList',
  'myApp.newAnimal',
  'myApp.animalDetail',
  'myApp.editAnimal',
  'myApp.plantList',
  'myApp.legacyHeader',
  'myApp.importAnimal',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
