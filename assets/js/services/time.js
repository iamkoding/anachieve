(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('time', time);

	function time($resource) {
		
		var Time_array = [];
		var Sorted_time_array = [];

		var Time = $resource(API + 'time/', {}, {
			get: {
				method: 'GET'
			}
		});

		function get(month, year) {

			if(Time_array[month+'-'+year] !== undefined) return Time_array[month+'-'+year];

			return $resource(API + 'time/'+month+'/'+year).get().$promise.then(function(success) {
				Time_array[month+'-'+year] = success.api.message;
				angular.forEach(success.api.message, function(object) {
					console.log(Date.parse(object.datetime))
					// Sorted_time_array[]
				});
				return success.api.message;
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