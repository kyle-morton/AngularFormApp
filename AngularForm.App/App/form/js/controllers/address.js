angular.module('AngularFormApp')
    .controller('AddressController', function ($scope, NavigationService) {

        $scope.isFormValid = true;
        $scope.back = function() {
            console.log('back...');
        }
        $scope.submit = function() {
            console.log('submit...');
        }



    });