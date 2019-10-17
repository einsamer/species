'use strict';

function LegacyHeaderCtrl() {
}

angular.module('myApp.legacyHeader', [])
.component('legacyHeader', {
  templateUrl: 'layout/legacy/header/header.html',
  controller: LegacyHeaderCtrl,
});