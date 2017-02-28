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
					settings = success;
				})
				.catch(function(response) {
					console.log('error setting controller', response);
				});
			}

			vm.setting = settings;
		}
	}

})();