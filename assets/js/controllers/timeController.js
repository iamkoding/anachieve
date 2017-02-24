(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('timeController', TimeController);

	function TimeController(time, $http, jwtHelper, $state, $stateParams) 
	{

		var vm = this;

		var today = new Date();

		if($stateParams.date !== undefined) {

			var year = $stateParams.year;
			var month = $stateParams.month;
			var date = $stateParams.date;

			var checkDate = new Date(year + '-' + month + '-' + date);
			if(isNaN(checkDate) || checkDate > today) return window.history.back();
		} else {

			var year = today.getFullYear();
			var month = today.getMonth() + 1;
			var date = today.getDate();
		}
		
		var city = 1;

		get(city, year, month, date);

		function get(city, year, month, date) 
		{
			var object = time.get(city, year, month, date)

			if(object === false) {
				time.retrieve(city, year, month, date).then(function(object) {

					time.completed(city, year, month, date).then(function(object) {
						vm.city = city;
						vm.year = year;
						vm.month = month;
						vm.date = date;
						vm.allSet = true;
					})
					.catch(function(response) {
						console.log('error timecontroller saves', response);
					})
				})
				.catch(function(response) {
					console.log('error timcontroller', response);
				});
			} else {
				vm.city = city;
				vm.year = year;
				vm.month = month;
				vm.date = date;
				vm.allSet = true;
			}
			
		}

		vm.previous = function()
		{

		}
	}

})();
