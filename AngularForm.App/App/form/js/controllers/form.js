angular.module('AngularFormApp')
    .controller('FormController',
    function ($scope, $state, formConstants, StorageService, AlertService, formNavigationService, formService) {

        $scope.isFormValid = true;
        $scope.isProcessing = false;
        $scope.isStart = formNavigationService.isStart();

        var formStr = StorageService.getItem(formConstants.FORM_KEY);
        $scope.form = formStr ? JSON.parse(formStr) : {};

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                formNavigationService.goToStart();
        }
        
        $scope.states = formConstants.STATES;

        $scope.back = function () {
            var prevState = formNavigationService.getPreviousStep();
            $state.go(prevState, {});
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {

                $scope.isProcessing = true;

                //save form to local storage
                StorageService.setItem(formConstants.FORM_KEY, JSON.stringify($scope.form));

                var nextStep = formNavigationService.getNextStep();

                if (nextStep) {
                    $state.go(nextStep, {});
                    StorageService.setItem(formConstants.STEP_KEY, nextStep);
                }
                else {
                    formService.submit($scope.form, function (response) {
                        if (response && response.IsSuccess) {
                            AlertService.success("Form saved!", "Thanks for your submission!")
                                .then(function () {
                                    $state.go(formConstants.FORM_LIST.KEY, {});
                                    StorageService.clearItem(formConstants.FORM_KEY);
                                    StorageService.clearItem(formConstants.STEP_KEY);
                                });
                        } else {
                            AlertService.error("Error!", "An error has occurred!")
                                .then(function () {
                                    $state.go(formConstants.FORM_LIST.KEY, {});
                                });
                        }
                    });
                    
                }
            }
        }

    });