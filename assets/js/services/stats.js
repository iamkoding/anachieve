(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('stats', stats);

	function stats($resource) 
	{

		function get() 
		{
			return false;			
		}

		function retrieve(date)
		{
			return $resource(API + 'stats/' + date.month + '/' + date.year + '/' + date.month + '/' + date.year).get().$promise.then(function(success) {
				console.log(success);
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