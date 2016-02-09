/**
 * @author SachinYe
 */
(function(){
	angular.module("app")
	//.controller("herocontroller",function($scope,datafactory){	
	.controller("herocontroller",function($scope,dataservice,valuerecipe,constantrecipe){	
	  //$scope.data=datafactory.hd;
	  $scope.data=dataservice.getData();
	  $scope.message=valuerecipe.message;
	  $scope.version=valuerecipe.version;
	  $scope.constMessage= constantrecipe.message;
	  $scope.consVersion= constantrecipe.consVersion;
	});
}());
