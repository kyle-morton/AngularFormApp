angular.module('AngularFormApp')
    .service('FormService', function (appConstants, ApiService) {

        var formService = {};
        formService.submit = function(form) {

        }
        formService.get = function(id) {

        }
        formService.getAll = function(callback) {
            return ApiService.get('/form/getall', {})
            .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }

        return formService;
    });



        //function (appConstants, $http, $q) {

        //API
        //this.submit = function (form) {
        //    return $http({
        //        method: 'POST',
        //        url: appConstants.API_URL + 'Submit',
        //        data: JSON.stringify(form)
        //    });
        //}
        //this.getAll = function () {
        //    return $http({
        //        method: 'GET',
        //        url: appConstants.API_URL + 'GetAll'
        //    });
        //}

    //});