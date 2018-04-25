angular.module('FormModule', [])
    .service('formService', function (formConstants, ApiService) {

        var formService = {};
        formService.submit = function(form, callback) {
            return ApiService.post(formConstants.API.SUBMIT, JSON.stringify(form), {})
                .then(function successCallback(response) {
                    callback(response);
                }, function errorCallback(response) {
                    debugger;
                    callback(false);
                });
        }
        formService.get = function(id) {

        }
        formService.getActive = function(callback) {
            return ApiService.get(formConstants.API.GET_ACTIVE, {})
            .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }
        formService.delete = function (id, callback) {

            return ApiService.remove(formConstants.API.DELETE, {id})
                .then(
                function successCallback(response) {
                    callback(response);
                }, function errorCallback(response) {
                    callback(false);
                });
        }

        return formService;
    });