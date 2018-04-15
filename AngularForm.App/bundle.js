'use strict';

angular.module('AngularFormApp', ['ui.router']) //,'services','controllers'])
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
            .state('home',
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
            .state(appConstants.FORM.STEP1.KEY, {
                url: '/form',
                views: angular.extend({}, reusableFormBase, {
                    contentView: {
                        templateUrl: 'App/form/html/personalInfo.html',
                        controller: 'PersonalInformationController'
                    }
                })
            })
            .state(appConstants.FORM.STEP2.KEY, {
                url: '/form',
                views: angular.extend({}, reusableViewBase, {
                    contentView: {
                        templateUrl: 'App/form/html/address.html',
                        controller: 'AddressController'
                    }
                })
            })
            

        $locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true);

    });
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

angular.module('AngularFormApp')
    .factory('formApiFactory', function ($http, $q, appConstants) {

        var apiFactory = {};

        apiFactory.submit = function () {
             
        };

        apiFactory.get = function (id) {

        };

        apiFactory.getAll = function () {
            return $http({
                method: 'GET',
                url: appConstants.API_URL + 'GetAll'
            });
        };

        return apiFactory;

    });
angular.module('AngularFormApp')
    .service('NavigationService', function (appConstants, $state) {

        this.getNextStep = function (currentStep) {

            console.log('Getting Next Step: ' + currentStep);

            //return constant object
        };
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
    .controller('StatusSummaryController', function ($scope, $state, appConstants) {

        console.log('statusSummary init...');

    });
angular.module('AngularFormApp')
    .controller('NavButtonsController', function ($scope, $state, appConstants) {

        console.log('navbuttons init...');

    });
angular.module('AngularFormApp')
    .controller('NavBarController', function ($scope, $state, appConstants) {

        var currentState = $state.current.name;
        console.log('key/state: ' + appConstants.HOME.KEY + '/' + currentState);
        $scope.isHome = appConstants.HOME.KEY === currentState;
        //$scope.isHome = currentState

        $scope.goToHome = function () {
            $state.go(appConstants.HOME.KEY, {});
        };

        $scope.goToFormStart = function () {
            $state.go(appConstants.FORM.STEP1.KEY, {});
        };

    });
angular.module('AngularFormApp')
    .controller('HomeController', function ($scope, formApiFactory) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;

        console.log('home initialized...');

    });
angular.module('AngularFormApp')
    .controller('PersonalInformationController', function ($scope, appConstants, StorageService, NavigationService) {

        $scope.isFormValid = true;

        var existingForm = StorageService.getItem(appConstants.FORM_KEY);
        $scope.form = existingForm ? JSON.parse(existingForm) : {};

        $scope.submit = function() {

            //if ($scope.isFormValid) {
            StorageService.setItem(appConstants.FORM_KEY, JSON.stringify($scope.form));
            NavigationService.go(appConstants.FORM.STEP2.KEY);
            //}

        };
    });
angular.module('AngularFormApp')
    .controller('AddressController', function ($scope, NavigationService) {

        $scope.isFormValid = true;
        $scope.back = function() {
            console.log('back...');
        }
        $scope.submit = function() {
            console.log('submit...');
        }


    });