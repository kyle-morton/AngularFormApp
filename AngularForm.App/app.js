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