angular.module('AngularFormApp')
    .controller('FormController', function ($scope, formApiFactory) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;



    });