'use strict';

angular.module('AngularFormApp', ['ui.router', 'ngResource']) 
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants, formConstants) {

        $urlRouterProvider.otherwise('/home');

        var reusableViewBase = {
            navBar: {
                templateUrl: '/App/navBar/html/navBar.html',
                controller: 'NavBarController'
            }
        };

        var reusableFormBase = angular.extend({}, reusableViewBase,
        {
            navButtons: {
                templateUrl: '/App/navButtons/html/navButtons.html',
                controller: 'NavButtonsController'
            },
            statusSummary: {
                templateUrl: '/App/statusSummary/html/statusSummary.html',
                controller: 'StatusSummaryController'
            }
        });

        $stateProvider
            .state(appConstants.HOME.KEY,
                {
                    url: '/home',
                    views: angular.extend({},
                        reusableViewBase,
                        {
                            contentView: {
                                templateUrl: 'App/home/html/home.html',
                                controller: 'HomeController'
                            }
                        })
            })
            .state(formConstants.FORM_LIST.KEY,
                {
                    url: '/forms',
                    views: angular.extend({},
                        reusableViewBase,
                        {
                            contentView: {
                                templateUrl: 'App/formList/html/formList.html',
                                controller: 'FormListController'
                            }
                        })
            })
            .state(formConstants.FORM[0].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[0].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/personalInfo.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[1].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[1].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/address.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[2].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[2].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/education.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[3].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[3].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/employment.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[4].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[4].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/certification.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[5].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[5].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/references.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(formConstants.FORM[6].KEY, {
                url: '/form',
                bannerTitle: formConstants.FORM[6].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/hobbies.html',
                        controller: 'FormController'
                    }
                })
            });
            

        $locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true);

    });
angular.module('AngularFormApp')
    .constant('appConstants', {
        API_BASE: 'http://localhost:61109/api',
        LOGIN_URI: '/authenticateUser',
        HOME: {
            KEY: 'home'
        }
    });

angular.module('AngularFormApp')
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
angular.module('AngularFormApp')
    .service('ApiService',
        function($http, $log, $q, $resource, appConstants) {

            var domainApiUrl = appConstants.API_BASE;

            function getResourcePromise(uri, payload, parameters, resourceConfig, resourceMethod, additionalHeaders) {
                // calcualte URL
                var url = domainApiUrl + uri;

                // calculate HEADERS
                var headers = angular
                    .extend({},
                        {
                            'Accept': 'application/json,text/html',
                        },
                        additionalHeaders || {});

                // calculate method
                var method = methodMap[resourceMethod] || methodMap[resourceMethod].get;
                var isGet = method.verb === 'GET';
                var isAuthenticating = uri === appConstants.LOGIN_URI;

                // initialize resource method configuration
                if (resourceConfig) {
                    resourceConfig[resourceMethod] = {
                        headers: headers,
                        method: method.verb
                    };

                    if (isGet)
                        resourceConfig[resourceMethod].isArray = false;

                    if (isAuthenticating)
                        resourceConfig[resourceMethod].isArray = true;

                }

                return method.fn($resource(url, parameters || null, resourceConfig), payload).$promise;
            }

            var methodMap = {
                delete: {
                    verb: 'DELETE',
                    fn: function(resource) { return resource.delete(); }
                },
                get: {
                    verb: 'GET',
                    fn: function(resource) { return resource.get(); }
                },
                query: {
                    verb: 'GET',
                    fn: function(resource) { return resource.query(); }
                },
                save: {
                    verb: 'POST',
                    fn: function(resource, payload) { return resource.save(payload); }
                },
                update: {
                    verb: 'PUT',
                    fn: function(resource, payload) { return resource.update(payload); }
                }
            };

            return {
                get: function(url, parameters) {
                    return $http({
                        method: 'GET',
                        url: domainApiUrl + url,
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        params: parameters
                    });
                },
                post: function(uri, payload, params) {
                    return getResourcePromise(
                        uri,
                        payload,
                        params,
                        null,
                        'save');
                },
                put: function(uri, payload, params) {
                    return getResourcePromise(
                        uri,
                        payload,
                        params,
                        null,
                        'update');
                },
                remove: function(uri, params) {
                    return getResourcePromise(
                        uri,
                        null,
                        params,
                        null,
                        'delete');
                }
            };
    });
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

            return ApiService.remove(formConstants.API.DELETE, {id})
                .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }

        return formService;
    });
angular.module('AngularFormApp')
    .service('formNavigationService', function (formConstants, $state) {

        this.isStart = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            return current === formConstants.FORM[index].KEY;
        }
        this.goToStart = function () {
            var index = formConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            this.go(formConstants.FORM[index].KEY);
        }
        this.getNextStep = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (formConstants.FORM[index].IS_END)
                return null;

            return formConstants.FORM[index + 1].KEY;
        }
        this.getPreviousStep = function () {
            var current = $state.current.name;
            var index = formConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (formConstants.FORM[index].IS_START)
                return null;

            return formConstants.FORM[index - 1].KEY;
        }

    });
angular.module('AngularFormApp')
    .constant('formConstants', {
        STEP_KEY: 'formStep',
        FORM_KEY: 'formState',
        FORM_LIST: {
            KEY: 'formList'
        },
        FORM: [
            {
                KEY: 'personalInfo',
                TITLE: 'Personal Information',
                IS_START: true
            },
            {
                KEY: 'address',
                TITLE: 'Address'
            },
            {
                KEY: 'education',
                TITLE: 'Education',
                IS_END: true
            },
            {
                KEY: 'employment',
                TITLE: 'Employment'
            },
            {
                KEY: 'ceritification',
                TITLE: 'Ceritification'
            },
            {
                KEY: 'reference',
                TITLE: 'References'
            },
            {
                KEY: 'hobbies',
                TITLE: 'Hobbies'
            },
            {
                KEY: 'review',
                TITLE: 'Review',
                //IS_END: true
            }
        ],
        STATES: [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ],
        API: {
            SUBMIT: '/form/Submit',
            GET_ALL: '/form/getall',
            GET: 'form/get',
            DELETE: '/form/delete'
        }
    });

angular.module('AngularFormApp')
    .controller('StatusSummaryController', function ($scope, $state, appConstants, formConstants) {

        console.log('statusSummary init...');

        var formSteps = formConstants.FORM;
        var statusString = '';
        for (var i = 0; i < formSteps.length; i++) {
            statusString = statusString.concat(formSteps[i].TITLE);
            if (formSteps[i].KEY === $state.current.name)
                break;
            else
                statusString = statusString.concat(' -> ');
        }

        $scope.statusString = statusString;

    });
angular.module('AngularFormApp')
    .controller('NavButtonsController', function ($scope, $state, appConstants) {

        console.log('navbuttons init...');

    });
angular.module('AngularFormApp')
    .controller('NavBarController', function ($scope, $state, appConstants, formConstants) {

        var currentState = $state.current.name;
        $scope.isHome = appConstants.HOME.KEY === currentState;
        $scope.isForms = formConstants.FORM_LIST.KEY === currentState;
        $scope.isForm = formConstants.FORM.KEY === currentState;

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToForms = function () {
            $state.go(formConstants.FORM_LIST.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(formConstants.FORM[0].KEY, {});
        };

    });
angular.module('AngularFormApp')
    .controller('HomeController', function ($scope) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;

        console.log('home initialized...');

    });
angular.module('AngularFormApp')
    .controller('FormController',
    function ($scope, $state, formConstants, StorageService, AlertService, formNavigationService, formService) {

        $scope.isFormValid = true;
        $scope.isProcessing = false;
        $scope.isStart = formNavigationService.isStart();

        var formStr = StorageService.getItem(formConstants.FORM_KEY);
        $scope.form = formStr ? JSON.parse(formStr) : {};

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                formNavigationService.goToStart();
        }
        
        $scope.states = formConstants.STATES;

        $scope.back = function () {
            var prevState = formNavigationService.getPreviousStep();
            $state.go(prevState, {});
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {

                $scope.isProcessing = true;

                //save form to local storage
                StorageService.setItem(formConstants.FORM_KEY, JSON.stringify($scope.form));

                var nextStep = formNavigationService.getNextStep();

                if (nextStep) {
                    $state.go(nextStep, {});
                    StorageService.setItem(formConstants.STEP_KEY, nextStep);
                }
                else {
                    formService.submit($scope.form, function (response) {
                        if (response && response.IsSuccess) {
                            AlertService.success("Form saved!", "Thanks for your submission!")
                                .then(function () {
                                    $state.go(formConstants.FORM_LIST.KEY, {});
                                    StorageService.clearItem(formConstants.FORM_KEY);
                                    StorageService.clearItem(formConstants.STEP_KEY);
                                });
                        } else {
                            AlertService.error("Error!", "An error has occurred!")
                                .then(function () {
                                    $state.go(formConstants.FORM_LIST.KEY, {});
                                });
                        }
                    });
                    
                }
            }
        }

    });
angular.module('AngularFormApp')
    .controller('FormListController', function ($scope, appConstants, formService, AlertService) {

        $scope.forms = [];
        $scope.isLoading = false;
        $scope.getForms = function () {
            $scope.isLoading = true;
            formService.getAll(function (response) {
                if (response) {
                    $scope.forms = response;
                } else {
                    //handle error
                }
                $scope.isLoading = false;
            });
        };
        $scope.edit = function(form) {
            console.log('editing: ' + form.Id);



        }
        $scope.delete = function(form) {
            console.log('deleting: ' + form.Id);

            formService.delete(form.Id, function(response) {
                if (response) {

                    AlertService.success("Form saved!", "Thanks for your submission!")
                        .then(function () {
                            //remove from scope array...
                        });
                } else {

                }

            });

        }

        $scope.getForms();
    });