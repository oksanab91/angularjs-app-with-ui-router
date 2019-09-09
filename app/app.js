'use strict';

// Declare app level module which depends on views, and core components

var app = angular.module('myApp', [
  'ui.router',
  'ui.router.state', 
  'myApp.trainees',  
  'myApp.traineeDetails',
  'myApp.traineeEdit',
  'myApp.trainee.directive'       
]);