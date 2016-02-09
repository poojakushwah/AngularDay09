/**
 * @author SachinYe
 */
( function() {
		//angular.module("app").controller("moviescontroller", function($scope, $routeParams,datafactory) {
		angular.module("app").controller("moviescontroller", function($scope, $routeParams,dataservice) {
			//$scope.data=datafactory.hd;
			$scope.data=dataservice.getData();
			$scope.movies = null;
			$scope.selectedHero = $routeParams.hid;
			function listMovies() {
				$scope.movies = $scope.data.heros[$scope.selectedHero - 1].movieslist;
			};
			listMovies();

		});
	}());
