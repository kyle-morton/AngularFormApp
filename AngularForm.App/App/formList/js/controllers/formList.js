angular.module('AngularFormApp')
    .controller('FormListController', function ($scope, appConstants, FormService) {

        $scope.forms = [];
        $scope.isLoading = false;
        $scope.getForms = function () {
            $scope.isLoading = true;
            FormService.getAll(function(response) {

                if (response) {
                    debugger;
                    $scope.forms = response;
                } else {
                    //handle error
                }

                $scope.isLoading = false;
            });
        };

        $scope.getForms();


    });