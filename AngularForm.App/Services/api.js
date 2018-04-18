angular.module('AngularFormApp')
    .service('ApiService', function (appConstants, $http, $q) {

        //API
        this.submit = function (form) {
            return $http({
                method: 'POST',
                url: appConstants.API_URL + 'Submit',
                data: JSON.stringify(form)
            });
        }
        this.getAll = function () {
            return $http({
                method: 'GET',
                url: appConstants.API_URL + 'GetAll'
            });
        }

    });