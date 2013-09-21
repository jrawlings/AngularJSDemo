'use strict';

angular.module('openhouse').directive('card', [() => {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			status: '=',
			mini: '@'
		},
		templateUrl: 'app/templates/card.tpl.html'
	}
}]);