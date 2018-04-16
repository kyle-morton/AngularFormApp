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
                views: angular.extend({}, reusableViewBase, {
                    contentView: {
                        templateUrl: 'App/form/html/address.html',
                        controller: 'FormController'
                    }
                })
            })
            .state(appConstants.FORM[2].KEY, {
                url: '/form',
                bannerTitle: appConstants.FORM[2].TITLE,
                views: angular.extend({}, reusableViewBase, {
                    contentView: {
                        templateUrl: 'App/form/html/education.html',
                        controller: 'FormController'
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
    .service('FormService', function (appConstants, StorageService, $http, $q) {

        this.getForm = function () {
            var formStr = StorageService.getItem(appConstants.FORM_KEY);
            return formStr ? JSON.parse(formStr) : null;
        }
        this.setForm = function (form) {
            StorageService.setItem(appConstants.FORM_KEY, JSON.stringify(form));
        }
        this.clearForm = function () {
            StorageService.clearItem(appConstants.FORM_KEY);
        }


        //API
        this.submit = function (form) {
            return $http({
                method: 'POST',
                url: appConstants.API_URL + 'Submit',
                data: JSON.stringify(form)
            });
        }
        this.getAll = function () {
            return $http({
                method: 'GET',
                url: appConstants.API_URL + 'GetAll'
            });
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
    .controller('FormController', function ($scope, FormService, NavigationService) {

        $scope.isFormValid = true;

        $scope.isStart = NavigationService.isStart();
        $scope.form = FormService.getForm();

        //go to start if no form & not on starting step
        if (!$scope.isStart) {
            if (!$scope.form) 
                NavigationService.goToStart();
        }
        $scope.form = $scope.form ? $scope.form : {};

        $scope.back = function () {
            var prevState = NavigationService.getPreviousState();
            NavigationService.go(prevState);
        }
        $scope.submit = function () {

            if ($scope.isFormValid) {
                FormService.setForm($scope.form);
                var nextState = NavigationService.getNextState();

                if (nextState)
                    NavigationService.go(nextState);
                else {
                    FormService.submit($scope.form);
                    console.log('submit form via API...');
                }
            }
        }

    });