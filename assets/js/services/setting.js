(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('setting', setting);

	function setting($resource)
	{
		var City_array = [];
		var Setting = {
			city_id: 0,
			vibrate: 0,
			email: '',
			name: ''	
		}
		
		function get()
		{
			return false;
		}

		function retrive()
		{
			return $resource(API + 'cities').get().$promise.then(function(success) {
				angular.forEach(success.api.message, function(city, key) {
					City_array[key] = {
						id: city.id,
						name: city.name
					};
					if(city.user !== null) {
						Setting.city_id = city.id;
						Setting.vibrate = city.user.vibrate;
						Setting.email = city.user.email;
						Setting.name = city.user.name;
					}
				});
				console.log(Setting);
			})
			.catch(function(respose) {
				throw response;
			})
		}

		return {
			get: get,
			retrieve: retrive
		}
	}


})();