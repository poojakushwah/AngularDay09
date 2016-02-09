( function() {
		angular.module("app", ["ngRoute"]);
		//angular.module("app").config(function($routeProvider,constantrecipe,$provide) {
		angular.module("app").config(function($routeProvider,constantrecipe) {
			//--------------Provide-----------------
			/*$provide.provider("hero",function(){
				this.$get=function(){
					var appTitle="Synechron Hero Application";
					return {
						apt:appTitle;
					}
				}
			});*/
			alert(constantrecipe.message);
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
