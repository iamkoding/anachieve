(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('mosqueController', MosqueController);

	function MosqueController() {

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
		    console.log("Latitude: " + position.coords.latitude + 
		    "<br>Longitude: " + position.coords.longitude); 
		}
	}


})();