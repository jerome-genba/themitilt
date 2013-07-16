'use strict';

angular.module('themitiltApp')
  .controller('MainCtrl', function ($scope) {
    $scope.learnings = [
        new Learning('Learning 1', 'Victor Hugo', new Date(2013, 6, 28, 13, 7, 43)),
        new Learning('Learning 2', 'Gandhi', new Date(2013, 6, 27, 9, 32, 14))
    ];
  });
