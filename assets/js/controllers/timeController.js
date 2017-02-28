(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('timeController', TimeController);

	function TimeController(time, $state, $stateParams) 
	{

		var vm = this;

		var today = new Date();
		var date = {
			request: today,
			year: today.getFullYear(),
			month: today.getMonth() + 1,
			date: today.getDate(),
			city: 1
		};

		if($stateParams.date !== undefined) {

			date.year = $stateParams.year;
			date.month = $stateParams.month;
			date.date = $stateParams.date;

			var checkDate = new Date(date.year + '-' + date.month + '-' + date.date);
			if(isNaN(checkDate) || checkDate > date.request) return window.history.back();
			date.request = checkDate;
		}		

		get();

		function get() 
		{
			var object = time.get(date)

			if(object === false) {
				time.retrieve(date).then(function(object) {

					time.completed(date).then(function(object) {
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
				vm.date = date;
				vm.allSet = true;
			}
			
		}

		vm.previous = function()
		{
			date.request.setDate(date.request.getDate() - 1);
			return $state.go('times/' + date.request.getFullYear() + '/' + date.request.getMonth() + '/' + date.request.getDate());
		}
	}

})();
