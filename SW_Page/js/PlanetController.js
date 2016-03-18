angular.module("SwApiFetcherPlanet",[])	
	.controller("PlanetController",function($scope,$http){
		$scope.planetApiResponse = [];

		// Links of related SW pages
		$http.get("http://swapi.co/api/planets/")
			.success(function(data){
				console.log(data);
				$scope.planetApiResponse = data;
			})
			.error(function(err){
					console.log(err);
				});
	});