'use strict';

angular.module('openhouse', []).config(['$routeProvider', ($routeProvider) => {
  
  $routeProvider.when('/', {
	templateUrl: 'app/templates/openhouse.tpl.html',
	controller: 'OpenHouseCtrl'
  }).otherwise({ redirectTo: '/' });

}]);