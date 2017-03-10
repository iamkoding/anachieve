(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('registerController', RegisterController);

	function RegisterController(jwtHelper, register, $state, error) {

		var vm = this;

		if(localStorage.getItem('id_token') !== null && localStorage.getItem('id_token').length > 20) {
			var expired = jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
		    if(!expired) $state.go('times');
		}

		get();

		function get() 
		{
			register.get().then(function(success) {
				vm.cities = success.api.message;
			})
			.catch(function(response) {
				console.log(response);
			});
		} 

		vm.submit = function() {

			register.attempt(vm.email, vm.name, vm.password, vm.city.id, vm.vibrate).then(function(success) {
				localStorage.setItem('id_token', success.api.message.token);
				$state.go('time');
			})
			.catch(function(response) {
				switch(response.status) {
					case 406: 
						error.set(response.data.api.message);
						break;
				}
			});
			
		}


	}

})();
