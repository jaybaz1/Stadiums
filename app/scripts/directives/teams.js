'use strict';

(function(){
	angular.module('stadiumsApp')
		.directive('teamsInit', function(){
			return {
				link: function($scope, element){
					element.bind('click', function(){
						$scope.test = 'test';
						console.log(element);
						element.append($scope.test);	
					});
				}
			};
		});	
}());