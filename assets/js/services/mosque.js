(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('mosque', mosque);

	function mosque($resource) {
		
		var mosque = $resource('http://www.achieve.dev:8888/api/distance/', {}, {
			post: {
				method: 'POST'
			}
		});

		function post(lat, lng)
		{
			return mosque.post({lat: lat, lng: lng}).$promise.then(function(success) {
				return success.api.message;
			})
			.catch(function(response) {
				throw response;
			});
		}

		return {
			locations: post
		}
	}

})();