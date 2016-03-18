angular.module("SwApiFetcherPeople",[])	
	.controller("PeopleController",function($scope,$http){
		$scope.peopleApiResponse = [];

		// Links of related SW pages
		$http.get("http://swapi.co/api/people/")
			.success(function(data){
				console.log(data);
				$scope.peopleApiResponse = data;
			})
			.error(function(err){
					console.log(err);
				});
	});