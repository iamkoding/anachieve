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

		if(today.getDate() === date.request.getDate() && today.getMonth() === date.request.getMonth() && today.getFullYear() === date.request.getFullYear()) vm.today = true;

		get();

		function get()
		{
			var object = stats.get(date);

			if(object === false) {
				stats.retrieve(date).then(function(object) {
					vm.allSet = true;
					vm.date = date;
				})
				.catch(function(response) {
					console.log('error statscontroller', response);
				});
			} else {
				vm.date = date;
				vm.allSet = true;
			}
		}

		vm.previous = function()
		{
			date.request.setMonth(date.request.getMonth() - 1);
			return $state.go('stats', {year: date.request.getFullYear(), month: date.request.getMonth() + 1});
		}

		vm.next = function()
		{
			date.request.setMonth(date.request.getMonth() + 1);
			return $state.go('stats', {year: date.request.getFullYear(), month: date.request.getMonth() + 1});
		}
	}


})();