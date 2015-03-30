'use strict';

/**
 * @ngdoc function
 * @name stadiumsApp.controller:Menu
 * @description
 * # Menu
 * Controller of the stadiumsApp
 */
 
(function(){
 
angular.module('stadiumsApp')
  .controller('Menu', function ($scope, footballdata) {
	  
		$scope.leagues = footballdata.init();

 });
 
}());