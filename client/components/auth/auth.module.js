'use strict';

angular.module('whatwhenApp.auth', [
  'whatwhenApp.constants',
  'whatwhenApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
