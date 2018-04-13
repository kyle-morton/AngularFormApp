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