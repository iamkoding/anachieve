(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('prayer', Prayer);

	function Prayer(time) 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/prayerDirectiveView.html',
			scope: {
				type: '@type',
				date: '@date',
			},
			controller: function($scope, $attrs) {
				var times = time.get(JSON.parse($scope.date));
				switch($scope.type) {
					case 'fajr':
						$scope.prayer = times.fajr;
						break;
					case 'dhuhr':
						$scope.prayer = times.dhuhr;
						break;
					case 'asr':
						$scope.prayer = times.asr;
						break;
					case 'maghrib':
						$scope.prayer = times.maghrib;
						break;
					case 'isha':
						$scope.prayer = times.isha;
						break;
					default:
						break;
				}	
				var date = new Date($scope.prayer.datetime);
				$scope.prayer.hour = date.getHours();
				$scope.prayer.minute = date.getMinutes();
				$scope.prayer.second = date.getSeconds();

				$scope.save = function(id) {
					time.save(id, JSON.parse($scope.date), $scope.type).then(function(success) {

					});
				}

				$scope.delete = function(id) {
					time.delete(id, JSON.parse($scope.date), $scope.type).then(function(success) {
						
					});
				}
			}
		}
	}


})();