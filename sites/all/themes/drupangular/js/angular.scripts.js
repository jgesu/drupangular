var myApp = angular.module('drupangular', []);
jQuery(document).ready(function() {
	angular.bootstrap(document.getElementById('drp-app'),['drupangular']);
});



myApp.controller('slideControler', function ($scope, $http) {
	$http.get('/json/slide').success(function (result) {
		$scope.allSlides = (function() {
			return result.nodes;
		})();
		setTimeout(function() {
        	jQuery('#slidePrincipal').bxSlider({
              adaptiveHeight: true,
              mode: 'fade'
            });
        }, 50);
	});
}); 