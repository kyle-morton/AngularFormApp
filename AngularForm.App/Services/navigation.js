angular.module('AngularFormApp')
    .service('NavigationService', function (appConstants, $state) {

        this.isStart = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            return current === appConstants.FORM[index].KEY;
        }
        this.goToStart = function () {
            var index = appConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            this.go(appConstants.FORM[index].KEY);
        }
        this.getNextState = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (appConstants.FORM[index].IS_END)
                return null;

            return appConstants.FORM[index+1].KEY;
        }
        this.getPreviousState = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (appConstants.FORM[index].IS_START)
                return null;

            return appConstants.FORM[index - 1].KEY;
        }
        this.go = function(state, stateObj) {
            $state.go(state, stateObj);
        }

    });