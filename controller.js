(function(){
    var app = angular.module("MiApp",[]);
	app.controller("FirstController", function($scope){
		$scope.nombre = "Cruz";
		$scope.newGalaxy = {};
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

	});

})();
