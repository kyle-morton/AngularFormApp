angular.module('StatusSummaryModule', [])
    .controller('StatusSummaryController', function ($scope, $state, appConstants, formConstants) {

        console.log('statusSummary init...');

        var formSteps = formConstants.FORM;
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