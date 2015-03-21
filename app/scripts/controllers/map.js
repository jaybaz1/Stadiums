'use strict';

/**
 * @ngdoc function
 * @name stadiumsApp.controller:Map
 * @description
 * # Map
 * Controller of the stadiumsApp
 */
angular.module('stadiumsApp')
  .controller('Map', function ($scope) {
	  
	/* jshint ignore:start */  
    var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644),
	    mapTypeControl:true,
	    mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DEFAULT,
			position: google.maps.ControlPosition.RIGHT_BOTTOM	
		},
		panControl: false,
	    scaleControl : false,
        zoomControl: true,
	    zoomControlOptions: {
	        style: google.maps.ZoomControlStyle.LARGE,
	        position: google.maps.ControlPosition.RIGHT_TOP
	    },
	    streetViewControl: true,
	    streetViewControlOptions: {
	        position: google.maps.ControlPosition.RIGHT_TOP
	    }  
	};
	
	$scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	/* jshint ignore:end */
      
	setTimeout(function(){
		console.log($scope.map);
	}, 5000);

  });
