(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('mosqueController', MosqueController);

	function MosqueController(mosque) {

		var vm = this;
		getLocation();
		function getLocation() {
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		        console.log("Geolocation is not supported by this browser.");
		    }
		}

		function showPosition(position) {
		    mosque.locations(position.coords.latitude, position.coords.longitude).then(function(locations) {
		    	console.log(locations);
		    })
		    .catch(function(response) {
		    	console.log(response);
		    });
		}
	}


})();