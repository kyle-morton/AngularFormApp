angular.module('AngularFormApp')
    .controller('PersonalInformationController', function ($scope, appConstants, StorageService, NavigationService) {

        $scope.isFormValid = true;

        var existingForm = StorageService.getItem(appConstants.FORM_KEY);
        $scope.form = existingForm ? JSON.parse(existingForm) : {};

        $scope.submit = function() {

            //if ($scope.isFormValid) {
            StorageService.setItem(appConstants.FORM_KEY, JSON.stringify($scope.form));
            NavigationService.go(appConstants.FORM.STEP2.KEY);
            //}

        };
    });