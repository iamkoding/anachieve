(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('timeController', TimeController);

	function TimeController(time, $http, jwtHelper) {

		if(localStorage.getItem('id_token')) {
			var date = jwtHelper.getTokenExpirationDate(localStorage.getItem('id_token'));
			console.log('date', date);
		}

		var vm = this;

		// times();

		function times() {
			time.get(2,2017).then(function(success) {
				console.log(success);
			})
			.catch(function(response) {
				console.log('error timcontroller', response);
			});
		}
	}

})();
