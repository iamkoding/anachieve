var API = 'https://www.achieve.dev/api/';

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
						if(rejection.status === 400 || rejection.status === 401) {
							localStorage.clear();
							$injector.get('$state').go('login');
							return $q.reject(rejection);
						}
					}

				}	
			})

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('time', {
					url: '/',
					controller: 'timeController as time',
					templateUrl: '/views/timeView.html',
					data: {
						requiresLogin: true
					}
				})
				.state('settings', {
					url: '/settings',
					controller: 'settingController as setting',
					templateUrl: '/views/settingView.html',
					data: {
						requiresLogin: true
					}
				})
				.state('times', {
					url: '/times/:year/:month/:date',
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
