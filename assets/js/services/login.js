(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('login', login);

	function login($resource) {
		
		var login = $resource(API + 'authenticate/', {}, {
			put: {
				method: 'PUT'
			}
		});

		function put(email, password) {

			return login.put({email: email, password: password}).$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			});
		}

		return {
			attempt: put
		}
	}

})();