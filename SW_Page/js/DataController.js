angular.module("SwApiFetcher",[])
	.controller("DataController",function($scope,$http){
		$scope.apiResponse = [];
		$http.get("http://swapi.co/api/")
			.success(function(data){
				console.log(data);
				$scope.apiResponse = data;
			})
			.error(function(err){
					console.log(err);
				});
	});