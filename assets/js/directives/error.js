(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('error', ErrorMessage);

	function ErrorMessage() 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/errorDirectiveView.html',
			controller: function($scope) {
				var error = localStorage.getItem('errorMessage');
				if(error !== null) {
					$scope.error = error;
					localStorage.removeItem('errorMessage');
				}
			}
		}
	}


})();