angular.module('ConstantsModule', [])
    .constant('appConstants', {
        API_BASE: 'http://localhost:61109/api',
        LOGIN_URI: '/authenticateUser',
        HOME: {
            KEY: 'home'
        }
    });
