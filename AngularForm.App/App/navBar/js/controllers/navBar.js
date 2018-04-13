angular.module('AngularFormApp')
    .controller('NavBarController', function ($scope, $state, appConstants) {

        console.log('navbar init...');

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(appConstants.FORM.STEP1.KEY, {});
        };

    });