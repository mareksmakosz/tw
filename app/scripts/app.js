'use strict';

/**
 * @ngdoc overview
 * @name twAppApp
 * @description
 * # twAppApp
 *
 * Main module of the application.
 */
angular
  .module('twAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
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
  })
  .constant('API_URL', 'https://api-sandbox.transferwise.com/api/v1');