'use strict';

describe('myApp.dashboard module', function() {

  beforeEach(module('myApp.dashboard'));

  describe('dashboard controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var viewCtrl = $controller('DashboardCtrl');
      expect(viewCtrl).toBeDefined();
    }));

  });
});