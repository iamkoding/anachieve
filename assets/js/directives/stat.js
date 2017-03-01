(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.directive('stat', Stat);

	function Stat(stats) 
	{
		return {
			restrict: 'E',
			templateUrl: '/views/statDirectiveView.html',
			scope: {
				type: '@type',
				date: '@date',
			},
			controller: function($scope, $attrs) {

				var data = stats.get(JSON.parse($scope.date));
				switch($scope.type) {
					case 'fajr':
						$scope.prayer = data.fajr;
						break;
					case 'dhuhr':
						$scope.prayer = data.dhuhr;
						break;
					case 'asr':
						$scope.prayer = data.asr;
						break;
					case 'maghrib':
						$scope.prayer = data.maghrib;
						break;
					case 'isha':
						$scope.prayer = data.isha;
						break;
					case 'total':
						$scope.prayer = data.total;
						break;
					default:
						break;
				}	
			}
		}
	}


})();