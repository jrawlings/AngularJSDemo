angular.module('openhouse').controller('OpenHouseCtrl', ['$scope', 'Twitter', function ($scope, Twitter) {

    'use strict';

    $scope.angularJsResults = Twitter.query('#angularjs');

    var executeDebouncedQuery = _.debounce(function (query) {
        $scope.results = Twitter.query(query);
    }, 500);

    $scope.$watch('query', function (query) {
        query && executeDebouncedQuery(query);
    });
}]);