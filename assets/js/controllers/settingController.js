(function() {

	'use strict';

	angular
		.module('achieveApp')
		.controller('settingController', SettingController);

	function SettingController(setting) 
	{

		var vm = this;

		get();

		function get() 
		{
			var settings = setting.get();

			if(settings === false) {
				setting.retrieve().then(function(success) {
					vm.user = success.user;
				})
				.catch(function(response) {
					console.log('error setting controller', response);
				});
			} else {
				vm.user = settings.user;
			}
		}

		vm.vibrate = function() {
			setting.vibrate().then(function(success) {
				console.log(success);
			})
			.catch(function(response) {
				console.log('error setting controller vibrate', response);
			})
		}	
	}

})();