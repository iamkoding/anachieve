(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('password', Password);

	function Password(setting, error) 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/passwordDirectiveView.html',
			controller: function($scope, $attrs) {

				$scope.show = false;
				$scope.user = {
					password: '',
					new_password: ''
				};

				$scope.changePassword = function() {
					setting.password($scope.user.password, $scope.user.new_password).then(function(success) {
						$scope.show = false;
					})
					.catch(function(response) {
						switch(response.status) {
							case 403:
							case 406:
								error.set(response.data.api.message);	
								break;
						}
					})
				}
				
				$scope.open = function() {

				}

			}
		}
	}


})();