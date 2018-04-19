angular.module('AngularFormApp')
    .controller('StatusSummaryController', function ($scope, $state, appConstants) {

        console.log('statusSummary init...');

        var formSteps = appConstants.FORM;
        var statusString = '';
        for (var i = 0; i < formSteps.length; i++) {
            statusString = statusString.concat(formSteps[i].TITLE);
            if (formSteps[i].KEY === $state.current.name)
                break;
            else
                statusString = statusString.concat(' -> ');
        }

        $scope.statusString = statusString;

    });