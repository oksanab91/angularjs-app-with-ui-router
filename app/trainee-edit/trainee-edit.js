'use strict';

  angular.module('myApp.traineeEdit', ['myApp.traineesService'])

  .component('traineeEdit', {
   
    templateUrl: 'trainee-edit/trainee-edit.html',

    controller: function($scope, $stateParams, TraineesService) {
        $scope.trainee = {};
        $scope.traineeId = $stateParams.traineeId;
        $scope.title = `Edit Trainee # ${$scope.traineeId}`;
      
        $scope.getTrainee = function () {        
          TraineesService.getTrainees($scope.traineeId).then(function (response) {
            $scope.trainee = response; 
            }),
            function error(response) {
          };
        };

        $scope.updateTrainee = function() {          
          TraineesService.updateTrainee($scope.trainee).then(function (response) {            
                  if(response == true){
                    alert(`Trainee ${$scope.trainee.traineeName} saved`);
                  }
            }),
            function error(response) {                    
          };

        };

        $scope.getTrainee();
      }    
  })