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