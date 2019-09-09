'use strict';

angular.module('myApp.traineeDetails', ['myApp.traineesService'])

.component('traineeDetails', {

    templateUrl: 'trainee-details/trainee-details.html',

    controller: function($scope, $stateParams, TraineesService) {      

      $scope.trainee = {};
      $scope.traineeId = $stateParams.traineeId;
      $scope.title = `Details for Trainee # ${$scope.traineeId}`;
      
      this.getTrainee = function () {
          
        TraineesService.getTrainees($scope.traineeId).then(function (response) {          
          $scope.trainee = response;            
          }),
          function error(response) {                    
        };
        
      };

      this.getTrainee();
    }
    
  });