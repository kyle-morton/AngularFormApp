angular.module('AngularFormApp')
    .controller('NavBarController', function ($scope, $state, appConstants) {

        var currentState = $state.current.name;
        console.log('key/state: ' + appConstants.HOME.KEY + '/' + currentState);
        $scope.isHome = appConstants.HOME.KEY === currentState;
        //$scope.isHome = currentState

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(appConstants.FORM.STEP1.KEY, {});
        };

    });