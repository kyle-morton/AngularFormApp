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
            

        $locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true);

    });