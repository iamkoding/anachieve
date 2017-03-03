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
			},
			post: {
				method: 'POST'
			}
		});

		function get(date) 
		{
			return getSavedDate(date);
		}

		function retrieve(date)
		{
			return $resource(API + 'time/' + date.month + '/' + date.year).get().$promise.then(function(success) {
				angular.forEach(success.api.message, function(object) {
					var request = new Date(object.datetime);
					if(Time_array[date.city][date.year][date.month][request.getDate()] === undefined ) Time_array[date.city][date.year][date.month][request.getDate()] = [];
					Time_array[date.city][date.year][date.month][request.getDate()][object.prayer.name] = object;
				});
			})
			.catch(function(response) {
				throw response;
			});
		}

		function updateCompleted(date)
		{
			return $resource(API + 'saves/' + date.month + '/' + date.year).get().$promise.then(function(success) {
				if(success.api.message[0] !== undefined) {
					angular.forEach(success.api.message[0].times, function(object) {
							var request = new Date(object.datetime);
							Time_array[date.city][date.year][date.month][request.getDate()][object.prayer.name].save = true;
					});

					return Time_array[date.city][date.year][date.month][date.date];
				}
			})
			.catch(function(response) {
				throw response;
			});
		}

		function saveUserTime(time_id, date, type)
		{
			return Time.post({time_id: time_id}).$promise.then(function(success) {
				Time_array[date.city][date.year][date.month][date.date][type].save = true;
			})
			.catch(function(response) {
				throw response;
			});
		}

		function deleteUserTime(time_id, date, type)
		{
			return $resource(API + 'time/' + time_id, {}, {
				delete: {
					method: 'DELETE'
				}
			}).delete().$promise.then(function(success) {
				Time_array[date.city][date.year][date.month][date.date][type].save = undefined;
				return success;
			})
			.catch(function(response) {
				throw response;
			});
		}

		function getSavedDate(date)
		{
			var level = 0;
			if(Time_array[date.city] === undefined) level = 1;
			else if(Time_array[date.city][date.year] === undefined) level = 2;
			else if(Time_array[date.city][date.year][date.month] === undefined) level = 3;
			else if(Time_array[date.city][date.year][date.month].length === 0) level = 4;

			if(level === 0) return Time_array[date.city][date.year][date.month][date.date];

			if(level === 1) {
				Time_array[date.city] = [];
				level++;
			}

			if(level === 2) {
				Time_array[date.city][date.year] = [];
				level++;
			}

			if(level === 3) {
				Time_array[date.city][date.year][date.month] = [];
			}

			return false;
		}

		return {
			get: get,
			retrieve: retrieve,
			completed: updateCompleted,
			save: saveUserTime,
			delete: deleteUserTime
		}
	}

})();