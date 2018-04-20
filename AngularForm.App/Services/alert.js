angular.module('AngularFormApp')
    .service('AlertService', function () {

        var alertService = {};
        alertService.success = function (title, message) {
            return alertService.displayMessage(title, message, "success");
        }
        alertService.error = function(title, message) {
            return alertService.displayMessage(title, message, "error");
        }
        alertService.displayMessage = function(title, message, type) {
            return swal(title, message, type);
        }

        return alertService;
    });