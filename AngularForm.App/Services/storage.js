angular.module('ServicesModule')
    .service('StorageService', function ($window) {

        this.getItem = function(key) {
            return $window.localStorage.getItem(key);
        }
        this.setItem = function(key, value) {
            $window.localStorage.setItem(key, value);
        }
        this.clearItem = function(key) {
            $window.localStorage.removeItem(key, null);
        }

    });