'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'myApp.dashboard',
  'myApp.animalList',
  'myApp.newAnimal',
  'myApp.animalDetail',
  'myApp.editAnimal',
  'myApp.plantList',
  'myApp.legacyHeader',
  'myApp.importAnimal',
  'myApp.version',
  'ui.grid',
  'myApp.table-list'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
.directive("checkboxArray", () => {
  return {
    restrict: 'E',
    scope: {
      listOption: '<listOption',
      valueField: '<valueField',
      textField: '<textField',
      ngModel: '=ngModel',
    },
    templateUrl: "checkbox-array.html",
    controller: () => {
      this.$onInit = function() {
        console.log(this.hasOwnProperty('listOption')) // true
        console.log(this.hasOwnProperty('ngModel')) // false
      }
    }
  }
})
;
