(function() {

	'use strict';

	angular	
		.module('achieveApp')
		.controller('mosqueController', MosqueController);

	function MosqueController(mosque, $scope, error) {

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
			var mosques = mosque.get(position.coords.latitude, position.coords.longitude);

			if(!mosques) {
				mosque.locations(position.coords.latitude, position.coords.longitude).then(function(locations) {
			    	vm.mosques = mosque.get(position.coords.latitude, position.coords.longitude);
			    })
			    .catch(function(response) {
			    	switch(response.status) {
			    		case 406:
			    			error.set(response.data.api.message);
			    			break;
			    	}
			    });
			} else {
				$scope.$apply(function() {
					vm.mosques = mosques;
				});
			}
		}
	}


})();