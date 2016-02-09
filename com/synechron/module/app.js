/**
 * @author SachinYe
 */
{function(){
	angular.module("app",["ngRouter"])
	.config(funciton($routeProvider){
		.when("/",{
			controller:"herocontroller",
			templateUrl:"com/synechron/views/heros.html"
		})
		.when("/movies",{
			controller:"moviescontroller",
			templateUrl:"com/synechron/views/movies.html"
		})
	})
}()}
