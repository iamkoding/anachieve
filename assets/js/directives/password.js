(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('password', Password);

	function Password(setting) 
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
						console.log(success);
						$scope.show = false;
					})
					.catch(function(response) {
						console.log('error password directive update', response);
					})
				}
				
				$scope.open = function() {

				}

			}
		}
	}


})();