'use strict';

/**
 * @ngdoc overview
 * @name stadiumsApp
 * @description
 * # stadiumsApp
 *
 * Main module of the application.
 */
angular
  .module('stadiumsApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
