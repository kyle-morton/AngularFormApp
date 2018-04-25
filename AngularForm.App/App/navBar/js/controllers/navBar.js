angular.module('NavBarModule', [])
    .controller('NavBarController', function ($scope, $state, appConstants, formConstants) {

        var currentState = $state.current.name;
        $scope.isHome = appConstants.HOME.KEY === currentState;
        $scope.isForms = formConstants.FORM_LIST.KEY === currentState;
        $scope.isForm = formConstants.FORM.KEY === currentState;

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToForms = function () {
            $state.go(formConstants.FORM_LIST.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(formConstants.FORM[0].KEY, {});
        };

    });