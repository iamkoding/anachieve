(function() {

	'use strict';

	angular
		.module('achieveApp', ['ui.router', 'angular-jwt', 'ngResource'])
		.config(function Config($httpProvider, jwtOptionsProvider, $stateProvider, $urlRouterProvider) {

			jwtOptionsProvider.config({
				whiteListedDomains: ['www.achieve.dev'],
				tokenGetter: function() {
					return localStorage.getItem('id_token');
				},
				unauthenticatedRedirector: ['$state', function($state) {
					$state.go('login');
				}]
			});

			$httpProvider.interceptors.push('jwtInterceptor');

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('times', {
					url: '/',
					controller: 'timeController as time',
					templateUrl: '/views/timeView.html',
					data: {
						requiresLogin: true
					}
				})
				.state('login', {
					url: '/login',
					controller: 'loginController as login',
					templateUrl: '/views/loginView.html'
				});
		})
		.run(function(authManager) {
			authManager.redirectWhenUnauthenticated();
		});
})();
