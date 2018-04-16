angular.module('AngularFormApp')
    .service('FormService', function (appConstants, StorageService, $http, $q) {

        this.getForm = function () {
            var formStr = StorageService.getItem(appConstants.FORM_KEY);
            return formStr ? JSON.parse(formStr) : null;
        }
        this.setForm = function (form) {
            StorageService.setItem(appConstants.FORM_KEY, JSON.stringify(form));
        }
        this.clearForm = function () {
            StorageService.clearItem(appConstants.FORM_KEY);
        }


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