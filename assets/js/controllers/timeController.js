(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('timeController', TimeController);

	function TimeController(time, $http, jwtHelper) {

		var vm = this;

		times();

		function times() {
			time.get(2,2017).then(function(times) {
				console.log(times);
			})
			.catch(function(response) {
				console.log('error timcontroller', response);
			});
		}
	}

})();
