/**
 * @author SachinYe
 */
(function(){
	angular.module("app")
	//.controller("herocontroller",function($scope,datafactory){	
	.controller("herocontroller",function($scope,dataservice){	
	  //$scope.data=datafactory.hd;
	  $scope.data=dataservice.getData();
	});
}());
