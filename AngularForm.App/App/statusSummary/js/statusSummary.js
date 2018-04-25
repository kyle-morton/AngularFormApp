angular.module('StatusSummaryModule', [])
    .controller('StatusSummaryController', function ($scope, $state, appConstants, formConstants) {

        $scope.steps = [];
        for (var i = 0; i < formConstants.FORM.length; i++) {
            var step = formConstants.FORM[i];
            $scope.steps.push({
                'name': step.KEY,
                'isCurrent': $state.current.name === step.KEY
            });
        }

        $scope.goToStep = function(step) {
            console.log('step: ' + step);
        }

    });