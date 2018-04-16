angular.module('AngularFormApp')
    .constant('appConstants', {
        API_URL: 'http://localhost:61109/api/form/',
        STATE_KEY: 'appState',
        FORM_KEY: 'formState',
        HOME: {
            KEY: 'home'
        },
        FORM: [
            {
                KEY: 'personalInfo',
                TITLE: 'Personal Information',
                IS_START: true
            }, 
            {
                KEY: 'address',
                TITLE: 'Address',
            },
            {
                KEY: 'education',
                TITLE: 'Education',
                IS_END: true
            }
        ]
    });
