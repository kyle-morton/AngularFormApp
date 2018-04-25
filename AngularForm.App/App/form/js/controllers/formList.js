angular.module('FormModule')
    .controller('FormListController', function ($scope, appConstants, formService, AlertService) {

        $scope.forms = [];
        $scope.isLoading = false;
        $scope.getForms = function () {
            $scope.isLoading = true;
            formService.getActive(function (response) {
                if (response) {
                    $scope.forms = response;
                } else {
                    //handle error
                }
                $scope.isLoading = false;
            });
        };
        $scope.edit = function(form) {
            console.log('editing: ' + form.Id);



        }
        $scope.delete = function (form) {

            AlertService.prompt('Are you sure?')
            .then(function(choice) {
              
                if (choice) {
                    formService.delete(form.Id, function (response) {
                        if (response) {
                            $scope.getForms();
                        }
                    });
                }


            });
        }

        $scope.getForms();
    });