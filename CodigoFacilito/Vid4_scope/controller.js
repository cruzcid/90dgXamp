(function(){
    var app = angular.module("MiApp",[]);
	app.controller("FirstController", function($scope){
		$scope.nombre = "Cruz";
		$scope.newGalaxy = {};
		$scope.newUserData = {};
		$scope.personal_data=[
			{
				user_name: "Duckerberry Duck",
				user_email: "dDuck@inffinix.com",
				user_opinion: "Stars shine only in the night. Quack!!"
			},
			{
				user_name: "Bussines boy",
				user_email: "bBoy@bronx.com",
				user_opinion: "Pop is corn and fresh is meat"
			},
			
		];
		$scope.galaxys=[
			{
				showGallaxy: true,
				g_name: "Milkey Way",
				stars: ["Aten", "Rigel", "Cosmo", "Draco", "Eros"],
				planets: ["Jupiter","Urano","Neptuno"]
			},
			{
				showGallaxy: true,
				g_name: "Orion",
				stars: ["Fenaco", "Tripode", "Wanda", "677", "Delfos"],
				planets: ["ROck","Solid","Place"]
			}
			
		];
		$scope.addGalaxy = function(){
			$scope.galaxys.push(newGalaxy);
		};
		$scope.addUserData = function(){
			$scope.personal_data.push(newUserData);
		};

	});

})();
