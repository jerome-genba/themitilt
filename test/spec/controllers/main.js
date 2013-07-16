'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('themitiltApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of learnings to the scope', function () {
      scope.learnings.should.not.be.empty;
      scope.learnings[0].should.be.an.instanceof(Learning);
  });
});
