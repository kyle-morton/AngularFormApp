angular.module('ServicesModule', [])
    .service('AlertService', function () {

        //var alertService = {};

        //alertService.success = function (title, message) {
        //    return alertService.displayMessage(title, message, "success");
        //}
        //alertService.error = function(title, message) {
        //    return alertService.displayMessage(title, message, "error");
        //}
        //alertService.displayMessage = function(title, message, type) {
        //    return swal(title, message, type);
        //}

        return {
            displayMessage: function (title, message, type) {
                return swal(title, message, type);
            },
            success: function (title, message) {
                return this.displayMessage(title, message, "success");
            },
            error: function (title, message) {
                return this.displayMessage(title, message, "error");
            },
            prompt: function(title, message) {
                return swal({
                    title: title,
                    text: message,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                });
            }

        };
    });