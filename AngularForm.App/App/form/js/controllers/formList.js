angular.module('AngularFormApp')
    .controller('FormListController', function ($scope, appConstants, formService, AlertService) {

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
        $scope.edit = function(form) {
            console.log('editing: ' + form.Id);



        }
        $scope.delete = function(form) {
            console.log('deleting: ' + form.Id);

            formService.delete(form.Id, function(response) {
                if (response) {

                    AlertService.success("Form saved!", "Thanks for your submission!")
                        .then(function () {
                            //remove from scope array...
                        });
                } else {

                }

            });

        }

        $scope.getForms();
    });