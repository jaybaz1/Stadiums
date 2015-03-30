'use strict';

(function(){

angular.module('stadiumsApp').filter('leagueId', function() {
  return function(href) {
	
	var id = href.match(/\d+$/g);
	  
    return id[0];
  };
});

}());