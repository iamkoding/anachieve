(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('loginController', LoginController);

	function LoginController(jwtHelper) {

		var vm = this;

		vm.login = function() {
			console.log(vm.email, vm.password);
		}

	}

})();
