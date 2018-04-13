angular.module('AngularFormApp')
    .service('NavigationService', function (appConstants, $state) {

        this.getNextStep = function (currentStep) {

            console.log('Getting Next Step: ' + currentStep);

            //return constant object
        };
        this.go = function(state, stateObj) {
            $state.go(state, stateObj);
        }

    });