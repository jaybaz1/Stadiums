
'use strict';

(function(){
	
	angular.module('stadiumsApp')
		.service('footballdata', function($http, $filter, $log, $rootScope, MapService){
			
			var countryLeagues = [
				{ country : 'England', codes : 'PL' },
				{ country : 'Germany', codes : 'BL1' },
				{ country : 'France', codes : 'FL1' },
				{ country : 'Netherlands', codes : 'DED' },
				{ country : 'Italy', codes : 'SA' },
				{ country : 'Spain', codes : 'FL1' }
			];
			
			var onLeagueComplete = function(data){
			  	sortLeaguesCountries(data);
			  	$rootScope.$broadcast('countryLeagues');
			};
	  
			var sortLeaguesCountries = function(data){
				angular.forEach(data, function(fd){
				  
				    for(var i=0; i < countryLeagues.length; i++){
					   var l = countryLeagues[i];
					   if(l.codes === fd.league){
						   l.id = getLeagueId(fd);
						   l.title = getLeagueTitle(fd);
					   }
				    }
				    console.log(countryLeagues);
				});
			};
			
			var leagues = function(){
				
				$http.defaults.headers.common['X-Auth-Token'] = '6b73a1aa6da24542bcb213f600e88766';				
				return $http.get('http://api.football-data.org/alpha/soccerseasons/')
							.then(function(response){
								return response.data;
							});
			};
			
			var markLeagueLocation = function(){
				angular.forEach(countryLeagues, function(item){
					MapService.marker(item.country);
				});	
			};
			
			var getLeagueId = function(league){
			  return $filter('leagueId')(league._links.self.href);
			};
			
			var getLeagueTitle = function(league){
			  return $filter('leagueTitle')(league.caption);
			};
			
			var onError = function(data){
			 $log.log(data); 
			};
			  
			var init = function(){
			  leagues().then(onLeagueComplete, onError);
			  return countryLeagues;
			};
			
			return {
				init:init,
				countryLeagues:countryLeagues,
				markLeagueLocation:markLeagueLocation
			};
		});
}());