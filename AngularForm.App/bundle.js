'use strict';

angular.module('AngularFormApp', ['ui.router', 'ngResource']) 
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {

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
            .state(appConstants.FORM_LIST.KEY,
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
            .state(appConstants.FORM[0].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[0].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/personalInfo.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[1].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[1].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/address.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[2].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[2].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/education.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[3].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[3].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/employment.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[4].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[4].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/certification.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[5].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[5].TITLE,
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/references.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[6].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[6].TITLE,
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
        STEP_KEY: 'formStep',
        FORM_KEY: 'formState',
        HOME: {
            KEY: 'home'
        },
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
                TITLE: 'Education'
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
                IS_END: true
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
        ]
    });

angular.module('AngularFormApp')
    .service('NavigationService', function (appConstants, $state) {

        this.isStart = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            return current === appConstants.FORM[index].KEY;
        }
        this.goToStart = function () {
            var index = appConstants.FORM.map(function (e) { return e.IS_START; }).indexOf(true);
            this.go(appConstants.FORM[index].KEY);
        }
        this.getNextState = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (appConstants.FORM[index].IS_END)
                return null;

            return appConstants.FORM[index+1].KEY;
        }
        this.getPreviousState = function () {
            var current = $state.current.name;
            var index = appConstants.FORM.map(function (e) { return e.KEY; }).indexOf(current);

            if (appConstants.FORM[index].IS_START)
                return null;

            return appConstants.FORM[index - 1].KEY;
        }
        this.go = function(state, stateObj) {
            $state.go(state, stateObj);
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
                resourceConfig[resourceMethod] = {
                    headers: headers,
                    method: method.verb
                };

                if (isGet) 
                    resourceConfig[resourceMethod].isArray = false;
                
                if (isAuthenticating) 
                    resourceConfig[resourceMethod].isArray = true;

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



        //function (appConstants, $http, $q) {

        //API
        //this.submit = function (form) {
        //    return $http({
        //        method: 'POST',
        //        url: appConstants.API_URL + 'Submit',
        //        data: JSON.stringify(form)
        //    });
        //}
        //this.getAll = function () {
        //    return $http({
        //        method: 'GET',
        //        url: appConstants.API_URL + 'GetAll'
        //    });
        //}




    //});
angular.module('AngularFormApp')
    .service('FormService', function (appConstants, ApiService) {

        var formService = {};
        formService.submit = function(form) {

        }
        formService.get = function(id) {

        }
        formService.getAll = function(callback) {
            return ApiService.get('/form/getall', {})
            .then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    callback(false);
                });
        }

        return formService;
    });



        //function (appConstants, $http, $q) {

        //API
        //this.submit = function (form) {
        //    return $http({
        //        method: 'POST',
        //        url: appConstants.API_URL + 'Submit',
        //        data: JSON.stringify(form)
        //    });
        //}
        //this.getAll = function () {
        //    return $http({
        //        method: 'GET',
        //        url: appConstants.API_URL + 'GetAll'
        //    });
        //}

    //});
angular.module('AngularFormApp')
    .controller('StatusSummaryController', function ($scope, $state, appConstants) {

        console.log('statusSummary init...');

        var formSteps = appConstants.FORM;
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
    .controller('NavBarController', function ($scope, $state, appConstants) {

        var currentState = $state.current.name;
        $scope.isHome = appConstants.HOME.KEY === currentState;
        $scope.isForms = appConstants.FORM_LIST.KEY === currentState;
        $scope.isForm = appConstants.FORM.KEY === currentState;

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToForms = function () {
            $state.go(appConstants.FORM_LIST.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(appConstants.FORM[0].KEY, {});
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
    .controller('FormController', function ($scope, appConstants, StorageService, NavigationService, ApiService) {

        $scope.isFormValid = true;
        $scope.isStart = NavigationService.isStart();

        var formStr = StorageService.getItem(appConstants.FORM_KEY);
        $scope.form = formStr ? JSON.parse(formStr) : {};

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                NavigationService.goToStart();
        }
        
        $scope.states = appConstants.STATES;

        $scope.back = function () {
            var prevState = NavigationService.getPreviousState();
            NavigationService.go(prevState);
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {

                //save form to local storage
                StorageService.setItem(appConstants.FORM_KEY, JSON.stringify($scope.form));

                var nextStep = NavigationService.getNextState();

                if (nextStep) {
                    NavigationService.go(nextStep);
                    StorageService.setItem(appConstants.STEP_KEY, nextStep);
                }
                //else {
                //    ApiService.submit($scope.form);
                //    StorageService.clearItem(appConstants.STEP_KEY);
                //}
            }
        }

    });
angular.module('AngularFormApp')
    .controller('FormListController', function ($scope, appConstants, FormService) {

        $scope.forms = [];
        $scope.isLoading = false;
        $scope.getForms = function () {
            $scope.isLoading = true;
            FormService.getAll(function(response) {

                if (response) {
                    debugger;
                    $scope.forms = response.data;
                } else {
                    //handle error
                }

                $scope.isLoading = false;
            });
        };

        $scope.getForms();


    });