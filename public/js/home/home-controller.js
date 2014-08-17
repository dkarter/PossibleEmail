angular.module('pfinder')
  .controller('HomeController', ['$scope', 'pfinderFactory', function ($scope, pfinderFactory) {
  	$scope.person = {};
  	$scope.getPerson = function () {
  		debugger;
  		$scope.result = pfinderFactory.findPerson($scope.person.first, 
  												$scope.person.last,
  												$scope.person.domains);
  	}
  }]);
