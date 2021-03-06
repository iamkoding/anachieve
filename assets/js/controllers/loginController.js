(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('loginController', LoginController);

	function LoginController(jwtHelper, login, $state, error) {

		var vm = this;
		reset();	

		if(localStorage.getItem('id_token') !== null && localStorage.getItem('id_token').length > 20) {
			var expired = jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
		    if(!expired) $state.go('times');
		}

		vm.submit = function() {

			reset();

			login.attempt(vm.email, vm.password).then(function(success) {
				localStorage.setItem('id_token', success.api.message.token);
				$state.go('time');
			})
			.catch(function(response) {
				switch(response.status) {
					case 406: 
						error.set('Incorrect credentials, please try again.');
						break;
				}
			});
		}

		function reset()
		{
			vm.error = false;
		}

	}

})();
