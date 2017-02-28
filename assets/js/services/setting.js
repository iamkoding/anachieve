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
			if(City_array.length > 0) {
				return {
					cities: City_array,
					user: Setting
				};			
			}
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
						Setting.vibrate = (city.user.vibrate === 1 ? true : false);
						Setting.email = city.user.email;
						Setting.name = city.user.name;
					}
				});
			})
			.catch(function(respose) {
				throw response;
			})
		}

		function updateVibrate()
		{
			return $resource(API + 'change-vibrate', {}, {
				post: {
					method: 'POST'
				}
			}).post().$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			})
		}

		function updateCity(city_id)
		{
			return $resource(API + 'change-city', {}, {
				post: {
					method: 'POST'
				}
			}).post({city_id: city_id}).$promise.then(function(success) {
				Setting.city_id = city_id;
				return success;
			})
			.catch(function(response) {
				throw response;
			})
		}

		function updatePassword(password, new_password)
		{
			return $resource(API + 'change-password', {}, {
				post: {
					method: 'POST'
				}
			}).post({password: password, new_password: new_password}).$promise.then(function(success) {
				return success;
			})
			.catch(function(response) {
				throw response;
			})
		}




		return {
			get: get,
			retrieve: retrive,
			vibrate: updateVibrate,
			city: updateCity,
			password: updatePassword
		}
	}


})();