(function() {

	'use strict';

	angular
		.module('achieveApp')
		.factory('time', time);

	function time($resource) 
	{
		
		var Time_array = [];

		var Time = $resource(API + 'time/', {}, {
			get: {
				method: 'GET'
			}
		});

		function get(city, year, month, date) 
		{
			return getSavedDate(city, year, month, date);
		}

		function retrieve(city, year, month, date)
		{
			return $resource(API + 'time/'+month+'/'+year).get().$promise.then(function(success) {
				angular.forEach(success.api.message, function(object) {
					var date = new Date(object.datetime);
					if(Time_array[city][year][month][date.getDate()] === undefined ) Time_array[city][year][month][date.getDate()] = [];
					Time_array[city][year][month][date.getDate()][object.prayer.name] = object;
				});
			})
			.catch(function(response) {
				throw response;
			});
		}

		function updateCompleted(city, year, month, date)
		{
			return $resource(API + 'saves/'+month+'/'+year).get().$promise.then(function(success) {
				if(success.api.message[0] !== undefined) {
					angular.forEach(success.api.message[0].times, function(object) {
							var date = new Date(object.datetime);
							Time_array[city][year][month][date.getDate()][object.prayer.name].save = true;
					});

					return Time_array[city][year][month][date];
				}
			})
			.catch(function(response) {
				throw response;
			});
		}

		function getSavedDate(city, year, month, date)
		{
			var level = 0;
			if(Time_array[city] === undefined) level = 1;
			else if(Time_array[city][year] === undefined) level = 2;
			else if(Time_array[city][year][month] === undefined) level = 3;

			if(level === 0) return Time_array[city][year][month][date];

			if(level === 1) {
				Time_array[city] = [];
				level++;
			}

			if(level === 2) {
				Time_array[city][year] = [];
				level++;
			}

			if(level === 3) {
				Time_array[city][year][month] = [];
			}

			return false;
		}

		return {
			get: get,
			retrieve: retrieve,
			completed: updateCompleted
		}
	}

})();