'use strict';

angular.module('AngularFormApp', ['ui.router']) //,'services','controllers'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {

        $urlRouterProvider.otherwise('/home');

        var reusableViewBase = {
            navBar: {
                templateUrl: '/App/navBar/html/navBar.html',
                controller: 'NavBarController'
            },
            navButtons: {
                templateUrl: '/App/navButtons/html/navButtons.html',
                controller: 'NavButtonsController'
            },
            statusSummary: {
                templateUrl: '/App/statusSummary/html/statusSummary.html',
                controller: 'StatusSummaryController'
            }
        };

        $stateProvider
            .state('home', {
                url: '/home',
                views: angular.extend({}, reusableViewBase, {
                    contentView: {
                        templateUrl: 'App/home/html/home.html',
                        controller: 'HomeController'
                    }
                })
            })
            .state(appConstants.FORM.STEP1.KEY, {
                url: '/personalInfo',
                views: angular.extend({}, reusableViewBase, {
                    contentView: {
                        templateUrl: 'App/form/html/formContainer.html'
                    },
                    'formContent@contentView': {
                        templateUrl: 'App/form/html/personalInfo.html',
                        controller: 'PersonalInformationController'
                    }
                })
            });
            

        $locationProvider.hashPrefix('');
    });
angular.module('AngularFormApp')
    .constant('appConstants', {
        API_URL: 'http://localhost:61109/api/form/',
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
    .service('NavigationService', function (appConstants) {

        this.getNextStep = function (currentStep) {

            console.log('Getting Next Step: ' + currentStep);

            //return constant object
        };

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

        console.log('navbar init...');

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
    .controller('PersonalInformationController', function ($scope, NavigationService) {

        console.log('PIC + service: ' + NavigationService);

    });
angular.module('AngularFormApp')
    .controller('FormController', function ($scope, formApiFactory) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;



    });