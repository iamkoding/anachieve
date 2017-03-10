(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('register', register);

	function register($resource) {
		
		var register = $resource(API + 'authenticate/', {}, {
			post: {
				method: 'POST'
			}
		});

		function attempt(email, name, password, city_id, vibrate) 
		{

			return register.post({email: email, name: name, password: password, city_id: city_id, vibrate: vibrate}).$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			});
		}

		function get()
		{
			return $resource(API + 'cities').get().$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			});
		}

		return {
			attempt: attempt,
			get: get
		}
	}

})();