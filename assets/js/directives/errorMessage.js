(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('errorMessage', ErrorMessage);

	function ErrorMessage(error) 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/errorDirectiveView.html',
			controller: function($scope) {
				$scope.error = error.get();
			}
		}
	}


})();