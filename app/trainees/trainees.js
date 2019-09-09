'use strict';

angular.module('myApp.trainees', ['myApp.traineesService'])

.component('trainees', {

  templateUrl: 'trainees/trainees.html',
  
  controller: function($scope, TraineesService) {    
    $scope.title = 'Trainees';
    $scope.trainees = [];
    $scope.traineeId = 0;
    
    this.getTrainees = function () {      

      TraineesService.getTrainees().then(function (response) {
        $scope.trainees = response;              
        }),
        function error(response) {                    
      };
    }

    this.getTrainees();
  }

})