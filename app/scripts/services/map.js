
'use strict';

(function(){
	
	angular.module('stadiumsApp')
		.service('MapService', function($log){
			/* jshint undef: true, unused: true */
			/* global google */
			
			var map, geocoder;
						
			var mapOptions = {
			    zoom: 4,
			    center: new google.maps.LatLng(50.0000, 15.0000),
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
			
			var init = function(){
				geocoder = new google.maps.Geocoder();
				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				return map;
			};
			
			var onZoomChange = function(){
				google.maps.event.addListener(map, 'zoom_changed', function() {
					var zoomLevel = map.getZoom();
					if(zoomLevel >= 7){
						
					}
					console.log(zoomLevel);
				});
			};
			
			var marker = function(loc){
			  geocoder.geocode( { 'address': loc}, function(results, status) {
			    if (status === google.maps.GeocoderStatus.OK) {
			      new google.maps.Marker({
			          map: map,
			          position: results[0].geometry.location
			      });
			    } else {
			      $log.log('Geocode was not successful for the following reason: ' + status);
			    }
			  });
			};
						
			return {
				init:init,
				onZoomChange:onZoomChange,
				marker:marker
			};
		});
})();