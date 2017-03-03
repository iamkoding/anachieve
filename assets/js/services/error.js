(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('error', error);

	function error($timeout) 
	{

		var error = {
			set: 0,
			message: ''
		};

		function get() 
		{
			return error;
		}

		function set(message)
		{
			error.message = message;
			error.set = 1;
			$timeout(function() {
				error.set = 0;
			}, 10000);
		}

		return {
			get: get,
			set: set
		}
	}

})();