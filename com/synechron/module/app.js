( function() {
		angular.module("app", ["ngRoute"]);
		angular.module("app").config(function($routeProvider,constantrecipe) {
			alert(constantrecipe.message)
			$routeProvider
			.when("/", {
				controller : "herocontroller",
				templateUrl : "com/synechron/views/heros.html"
			}).when("/movies/:hid", {
				controller : "moviescontroller",
				templateUrl : "com/synechron/views/movies.html"
			});
		});
	}());
