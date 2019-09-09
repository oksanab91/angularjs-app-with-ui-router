angular.module('myApp').config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("", "/trainees");

    var states = [
        {             
            name: 'trainees', 
            url: '/trainees',
            component: 'trainees'  
        },

        {             
            name: 'trainees.details',
            url: '/{traineeId}', 
            component: 'traineeDetails'
        },

        { 
            name: 'trainee-edit',
            url: '/trainee-edit/{traineeId}', 
            component: 'traineeEdit'
        }

    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
  
  });