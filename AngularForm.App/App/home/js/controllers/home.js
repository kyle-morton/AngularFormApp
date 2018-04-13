angular.module('AngularFormApp')
    .controller('HomeController', function ($scope, formApiFactory) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;

        console.log('home initialized...');

    });