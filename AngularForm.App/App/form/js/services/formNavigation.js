angular.module('FormModule')
    .service('formNavigationService', function (formConstants, $state) {

        this.isStart = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            return current === formConstants.FORM[index].KEY;
        }
        this.goToStart = function () {
            var index = formConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            this.go(formConstants.FORM[index].KEY);
        }
        this.getNextStep = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (formConstants.FORM[index].IS_END)
                return null;

            return formConstants.FORM[index + 1].KEY;
        }
        this.getPreviousStep = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (formConstants.FORM[index].IS_START)
                return null;

            return formConstants.FORM[index - 1].KEY;
        }

    });