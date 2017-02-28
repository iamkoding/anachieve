(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('statsController', StatsController);

	function StatsController(stats, $state, $stateParams) {

		var vm = this;

		var today = new Date();
		var date = {
			request: today,
			year: today.getFullYear(),
			month: today.getMonth() + 1
		};

		if($stateParams.month !== undefined) {

			date.year = $stateParams.year;
			date.month = $stateParams.month;

			var checkDate = new Date(date.year + '-' + date.month);
			if(isNaN(checkDate) || checkDate > date.request) return window.history.back();
			date.request = checkDate;
		}		
		get();

		function get()
		{
			var object = stats.get(date);

			if(object === false) {
				stats.retrieve(date).then(function(object) {
					console.log(object);
				})
				.catch(function(response) {
					console.log('error statscontroller', response);
				});
			} else {
				vm.date = date;
				vm.allSet = true;
			}
		}
	}


})();