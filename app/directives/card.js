angular.module('openhouse').directive('card', [function () {

    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: {
            status: '=',
            mini: '@'
        },
        templateUrl: 'app/templates/card.tpl.html'
    };
}]);