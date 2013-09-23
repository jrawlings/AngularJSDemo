angular.module('openhouse').controller('OpenHouseCtrl', 
  ['$scope', 'Twitter', function ($scope, Twitter) {

    'use strict';

    $scope.angularJsResults = Twitter.query('#angularjs');
}]);