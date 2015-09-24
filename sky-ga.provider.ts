(function() {
	'use strict';

	angular.module('skyGa').provider('skyGa', skyGaProvider);
	function skyGaProvider() {
		var trackingId = '', //UA-xxxxxxx-x - using empty (not setting at config-timg) string to enable debug-/dev-mode...
			configObject; //domain.com

		this.setTrackingId = function(value) {
			trackingId = value;
		};
		this.setConfigObject = function(value) {
			configObject = value;
		};

		this.$get = function() {
			return {
				trackingId,
				configObject
			};
		};

		return this;
	}

})();