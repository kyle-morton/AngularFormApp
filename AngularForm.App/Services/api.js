angular.module('AngularFormApp')
    .factory('formApiFactory', function ($http, $q, appConstants) {

        var apiFactory = {};

        apiFactory.submit = function () {
             
        };

        apiFactory.get = function (id) {

        };

        apiFactory.getAll = function () {
            return $http({
                method: 'GET',
                url: appConstants.API_URL + 'GetAll'
            });
        };

        return apiFactory;

    });