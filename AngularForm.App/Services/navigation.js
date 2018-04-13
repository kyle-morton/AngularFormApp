angular.module('AngularFormApp')
    .service('NavigationService', function (appConstants) {

        this.getNextStep = function (currentStep) {

            console.log('Getting Next Step: ' + currentStep);

            //return constant object
        };

    });