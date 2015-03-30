'use strict';

(function(){

angular.module('stadiumsApp').filter('leagueTitle', function() {
  return function(league) {
	
	var newLeagueTitle = league.replace(/\d{4}[/]\d{2}$/g, '');
	  
    return newLeagueTitle;
  };
});

}());