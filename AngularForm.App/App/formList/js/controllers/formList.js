angular.module('AngularFormApp')
    .controller('FormListController', function ($scope, appConstants, formService) {

        $scope.forms = [];
        $scope.isLoading = false;
        $scope.getForms = function () {
            $scope.isLoading = true;
            formService.getAll(function (response) {
                if (response) {
                    $scope.forms = response;
                } else {
                    //handle error
                }
                $scope.isLoading = false;
            });
        };

        $scope.getForms();
    });