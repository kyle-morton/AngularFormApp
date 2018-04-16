angular.module('AngularFormApp')
    .controller('FormController', function ($scope, FormService, NavigationService) {

        $scope.isFormValid = true;

        $scope.isStart = NavigationService.isStart();
        $scope.form = FormService.getForm();

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                NavigationService.goToStart();
        }
        $scope.form = $scope.form ? $scope.form : {};

        $scope.back = function () {
            var prevState = NavigationService.getPreviousState();
            NavigationService.go(prevState);
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {
                FormService.setForm($scope.form);
                var nextState = NavigationService.getNextState();

                if (nextState)
                    NavigationService.go(nextState);
                else {
                    FormService.submit($scope.form);
                    console.log('submit form via API...');
                }
            }
        }

    });