'use strict';

angular.module('openhouse').filter('date', [() => {
	return input => input.substring(0, input.indexOf('+')-1);
}]);