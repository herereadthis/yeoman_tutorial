'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
