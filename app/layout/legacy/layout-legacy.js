'use strict';

angular.module('myApp')
  .directive('legacyTemplate', () => {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'layout/legacy/layout-legacy.html',
    }
  });