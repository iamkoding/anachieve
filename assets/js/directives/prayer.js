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
				city: '@city',
				year: '@year',
				month: '@month',
				date: '@date'
			},
			controller: function($scope, $attrs) {
				var times = time.get($scope.city,$scope.year,$scope.month,$scope.date);
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
			}
		}
	}


})();