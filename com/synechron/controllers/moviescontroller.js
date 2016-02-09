/**
 * @author SachinYe
 */
( function() {
		//angular.module("app").controller("moviescontroller", function($scope, $routeParams,datafactory) {
		angular.module("app").controller("moviescontroller", function($scope, $routeParams,dataservice,valuerecipe,constantrecipe) {
			//$scope.data=datafactory.hd;
			$scope.data=dataservice.getData();
			$scope.movies = null;
			$scope.selectedHero = $routeParams.hid;
			function listMovies() {
				$scope.movies = $scope.data.heros[$scope.selectedHero - 1].movieslist;
			};
			listMovies();
			$scope.message=valuerecipe.message;
	 		$scope.version=valuerecipe.version;
	 		$scope.constMessage= constantrecipe.message;
			$scope.consVersion= constantrecipe.consVersion;
		});
	}());
