'use strict';

describe('Controller: ShareCtrl', function () {

    // load the controller's module
    beforeEach(module('themitiltApp'));

    var ShareCtrl;

    beforeEach(inject(function ($controller) {
        ShareCtrl = $controller('ShareCtrl', {
            $scope: {}
        });
    }));

    it('should instantiate a ShareCtrl', function() {

        ShareCtrl.should.not.be.an('undefined');

    });
});
