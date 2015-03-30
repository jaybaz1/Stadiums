'use strict';

/**
 * @ngdoc function
 * @name stadiumsApp.controller:Map
 * @description
 * # Map
 * Controller of the stadiumsApp
 */
angular.module('stadiumsApp')
  .controller('Map', function ($scope, MapService, footballdata) {
	  
	$scope.map = MapService.init();
	
	MapService.onZoomChange();
	
	$scope.$on('countryLeagues', function() {
		footballdata.markLeagueLocation();
	});

  });
