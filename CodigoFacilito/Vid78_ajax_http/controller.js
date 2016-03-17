// Direction for SW API http://swapi.co/api/planets/3/*/
angular.module("MyFirstApp", [])
	.controller("FirstController",function($scope,$http){
		$scope.posts=[];
		$http.get("http://swapi.co/api/planets")
			.success(function(data){
				console.log(data);
				$scope.posts = data;
			})
			.error(function(err){

			});
	});