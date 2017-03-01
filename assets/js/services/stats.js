(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('stats', stats);

	function stats($resource) 
	{

		var Stat_array = [];

		function get(date) 
		{
			if(Stat_array[date.year] === undefined || Stat_array[date.year][date.month] === undefined) return false;
			return Stat_array[date.year][date.month];			
		}

		function retrieve(date)
		{
			return $resource(API + 'stats/' + date.month + '/' + date.year + '/' + date.month + '/' + date.year).get().$promise.then(function(success) {
				if(Stat_array[date.year] === undefined) Stat_array[date.year] = [];	
				return Stat_array[date.year][date.month] = success.api.message;
			})
			.catch(function(response) {
				throw response;
			})	
		}

		return {
			get: get,
			retrieve: retrieve
		}
	}

})();