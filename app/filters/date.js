angular.module('openhouse').filter('date', [function () {

    'use strict';

    return function (input) {
        return input.substring(0, input.indexOf('+') - 1);
    };
}]);