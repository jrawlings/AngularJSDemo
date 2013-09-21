'use strict';

angular.module('openhouse').controller('OpenHouseCtrl', ['$scope', 'Twitter', ($scope, Twitter) => {

	$scope.angularJsResults = Twitter.query('#angularjs');

	var executeDebouncedQuery = _.debounce((query) => {
		$scope.results = Twitter.query(query);
	}, 500);

	$scope.$watch('query', (query) => {
		query && executeDebouncedQuery(query);
	});
}]);