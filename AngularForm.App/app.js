angular.module('AngularFormApp', ['ui.router']) //,'services','controllers'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {

        $urlRouterProvider.otherwise('/home');

        var reusableViewBase = {
            navBar: {
                templateUrl: '/App/navBar/html/navBar.html',
                controller: 'NavBarController'
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
                        templateUrl: 'App/form/html/personalInfo.html',
                        controller: 'PersonalInformationController'
                    }
                })
            });
            

        $locationProvider.hashPrefix('');
    });