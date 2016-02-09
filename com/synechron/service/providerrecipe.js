(function(){
	angular.module("app").provider("hero",function(){
		this.$get=function(){
					var appTitle="Synechron Hero Application";
					return {
						apt:appTitle
					}
		}
	});
}());