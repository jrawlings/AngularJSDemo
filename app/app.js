angular.module('openhouse', []).config(['$routeProvider', function ($routeProvider) {
 
  'use strict';

  $routeProvider.when('/', {
    templateUrl: 'app/templates/openhouse.tpl.html',
    controller: 'OpenHouseCtrl'
  }).otherwise({ redirectTo: '/' });

}]);