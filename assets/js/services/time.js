(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('time', time);

	function time($resource) {
		
		var Time = $resource('http://www.achieve.dev:8888/api/time/', {}, {
			get: {
				method: 'GET'
			}
		});

		function get(month, year) {

			return $resource('http://www.achieve.dev:8888/api/time/'+month+'/'+year).get().$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			});
		}

		return {
			get: get
		}
	}

})();