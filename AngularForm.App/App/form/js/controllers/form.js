angular.module('AngularFormApp')
    .controller('FormController', function ($scope, appConstants, StorageService, NavigationService, ApiService) {

        $scope.isFormValid = true;
        $scope.isStart = NavigationService.isStart();

        var formStr = StorageService.getItem(appConstants.FORM_KEY);
        $scope.form = formStr ? JSON.parse(formStr) : {};

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                NavigationService.goToStart();
        }
        
        $scope.states = appConstants.STATES;

        $scope.back = function () {
            var prevState = NavigationService.getPreviousState();
            NavigationService.go(prevState);
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {

                //save form to local storage
                StorageService.setItem(appConstants.FORM_KEY, JSON.stringify($scope.form));

                var nextStep = NavigationService.getNextState();

                if (nextStep) {
                    NavigationService.go(nextStep);
                    StorageService.setItem(appConstants.STEP_KEY, nextStep);
                }
                //else {
                //    ApiService.submit($scope.form);
                //    StorageService.clearItem(appConstants.STEP_KEY);
                //}
            }
        }

    });