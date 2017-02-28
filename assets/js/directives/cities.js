(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('cities', Cities);

	function Cities(setting) 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/citiesDirectiveView.html',
			controller: function($scope, $attrs) {
				var settings = setting.get();
				$scope.data = {
					selected: {},
					cities: settings.cities
				}

				angular.forEach(settings.cities, function(city) {
					if(settings.user.city_id === city.id) {
						$scope.data.selected = city;
					}
				});

				$scope.updateCity = function() {
					setting.city($scope.data.selected.id).then(function(success) {

					})
					.catch(function(response) {
						console.log('error city directive update', response);
					})
				}
			}
		}
	}


})();