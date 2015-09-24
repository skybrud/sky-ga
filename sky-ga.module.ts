(function() {
	'use strict';

	angular.module('skyGa',[]);


	/* 
	 * To use in SPA 

	config.$inject = ['skyGaProvider'];
	function config(skyGaProvider) {
		skyGaProvider.setTrackingId('UA-2503247-27');
		skyGaProvider.setConfigObject('ess-food.com');
	}

	run.$inject = ['$rootScope', 'skyGaService'];
	function run($rootScope, skyGaService) {
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
			skyGaService.send('pageview', toParams.path);
		});
	}

	*/


})();