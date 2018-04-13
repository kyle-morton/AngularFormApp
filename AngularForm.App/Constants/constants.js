angular.module('AngularFormApp')
    .constant('appConstants', {
        API_URL: 'http://localhost:61109/api/form/',
        STATE_KEY: 'appState',
        FORM_KEY: 'formState',
        HOME: {
            KEY: 'home'
        },
        FORM: {
            STEP1: {
                KEY: 'personalInfo',
                TITLE: 'Personal Information',
                IS_START: true
            }, 
            STEP2: {
                KEY: 'address',
                TITLE: 'Address',
            },
            STEP3: {
                KEY: 'education',
                TITLE: 'Education',
                IS_END: true
            }
        }
    });
