angular.module('myApp.traineesService', []).service('TraineesService', function ($http) {
    this.baseUrl = 'https://localhost:44397';

    this.getTrainees = function (traineeId) {        
        let url = this.baseUrl + '/api/trainees';

        url += traineeId ? '/' + traineeId : '';
                
        return $http.get(url, { cache: true }).then(function(resp) {
            return resp.data;
        });
    };

    this.updateTrainee = function (trainee) {
        if(!trainee){ return; }

        let url = `${this.baseUrl}/api/trainees/${trainee.traineeId}`;     
        
        return $http.put(url, trainee).then(resp => {            
            return resp.data;        
        });        
    };

})