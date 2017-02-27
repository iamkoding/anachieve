(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('mosque', mosque);

	function mosque($resource) {
		
		var Mosque_array = [];

		var mosque = $resource(API + 'distance/', {}, {
			post: {
				method: 'POST'
			}
		});

		function get(lat, lng) 
		{
			if(Mosque_array[lat+'-'+lng] !== undefined) return Mosque_array[lat+'-'+lng];
			return false;
		}

		function post(lat, lng)
		{
			return mosque.post({lat: lat, lng: lng}).$promise.then(function(success) {
				Mosque_array[lat+'-'+lng] = success.api.message[0].mosques;
				return success.api.message[0];
			})
			.catch(function(response) {
				throw response;
			});
		}

		return {
			locations: post,
			get: get
		}
	}

})();