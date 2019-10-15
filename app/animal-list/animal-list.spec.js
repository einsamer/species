'use strict';

describe('myApp.animalList module', function() {

  beforeEach(module('myApp.animalList'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var viewCtrl = $controller('AnimalListCtrl');
      expect(viewCtrl).toBeDefined();
    }));

  });
});