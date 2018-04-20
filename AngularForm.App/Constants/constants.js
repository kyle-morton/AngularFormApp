angular.module('AngularFormApp')
    .constant('appConstants', {
        API_BASE: 'http://localhost:61109/api',
        LOGIN_URI: '/authenticateUser',
        HOME: {
            KEY: 'home'
        }
    });
