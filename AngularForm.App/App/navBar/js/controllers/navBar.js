angular.module('AngularFormApp')
    .controller('NavBarController', function ($scope, $state, appConstants) {

        var currentState = $state.current.name;
        $scope.isHome = appConstants.HOME.KEY === currentState;
        $scope.isForms = appConstants.FORM_LIST.KEY === currentState;
        $scope.isForm = appConstants.FORM.KEY === currentState;

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToForms = function () {
            $state.go(appConstants.FORM_LIST.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(appConstants.FORM[0].KEY, {});
        };

    });