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
			
			$httpProvider.interceptors.push(function($q, $injector) {
				return {
					'requestError': function(rejection) {

					}, 
					'responseError': function(rejection) {
						if(rejection.status === 400) {
							localStorage.clear();
							$injector.get('$state').go('login');
							return $q.reject(rejection);
						}
					}

				}	
			})

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
				.state('locations', {
					url: '/locations',
					controller: 'mosqueController as mq',
					templateUrl: '/views/mosqueView.html'
				})
				.state('login', {
					url: '/login',
					controller: 'loginController as lg',
					templateUrl: '/views/loginView.html'
				});
		})
		.run(function(authManager) {
			authManager.checkAuthOnRefresh();
			authManager.redirectWhenUnauthenticated();
		});
})();
