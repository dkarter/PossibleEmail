var app = angular.module('pfinder');
app.factory('pfinderFactory', ['$http', function ($http) {
	var factory = {};

	factory.findPerson = function (first, last, domains) {

		return $http.post('/pfind', 
			{
				"first": first, 
				"last": last, 
				"domains": domains
			}
		).success(function (data) {
			return data;
		});
	}
	return factory;
}]);