declare var ga: any;

(function() {
	'use strict';

	angular.module('skyGa').service('skyGaService', skyGaService);

	skyGaService.$inject = ['skyGa'];
	function skyGaService(skyGa) {
		var debug = (skyGa.trackingId === '') ? true : false;

		if (debug) {
			console.log('skyGa: DEBUGGING (no data transmitted)! \n'+
						'Start sending the tracking-beacons by configuring the skyGaProvider (using the setTrackingId() and setConfigObject()-methods) during app.config-time.');
		} else {
			// Instantiating google analytics
			(function(i, s, o, g, r) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = (new Date()).getTime(); var a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); // jshint ignore:line
			ga('create', skyGa.trackingId, skyGa.configObject);
		}

		return {
			send: function(hittype, fieldObject) {

				// Defaults to send with hittype:'pageview' and options:location.pathname
				hittype = hittype || 'pageview';
				fieldObject = fieldObject || location.pathname;

				// Sends a tracking beacon to Google’s collection servers. The optional field object allows users to override one or more field values for this hit only.
				if (debug) {
					// When in debug-mode, just console.log the info
					console.log('skyGa: Send: "'+hittype+'" with:', fieldObject);
				} else {
					ga('send', hittype, fieldObject);
				}
			}
		};
	}

})();