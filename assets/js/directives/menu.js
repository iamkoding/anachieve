(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('menu', Menu);

	function Menu() 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/menuDirectiveView.html'
		}
	}


})();