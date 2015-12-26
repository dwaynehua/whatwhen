'use strict';

angular.module('whatwhenApp', [
  'whatwhenApp.auth',
  'whatwhenApp.admin',
  'whatwhenApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
