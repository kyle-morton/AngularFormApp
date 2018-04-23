angular.module('AngularFormApp')
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
        formService.getAll = function(callback) {
            return ApiService.get(formConstants.API.GET_ALL, {})
            .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }
        formService.delete = function (id, callback) {

            return ApiService.remove(formConstants.API.DELETE + '?id=' + id, {})
                .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }

        return formService;
    });