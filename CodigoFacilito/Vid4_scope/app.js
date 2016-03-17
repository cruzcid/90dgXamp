(function(){
	var app = angular.module('gemStore',[]);
	
	app.controller('StoreController', function(){
		this.product = gem;
		this.products = gems;
	});	
	var gem = {
		name: 'Azurite',
		price: 110.50,
		canPurchase: false,
		soldOut: false
	};
	var gems = [
		{name: 'Azurite', price: 25.44},
		{name: 'BloodStone', price: 74.44},
		{name: 'Zircoin', price: 33.99}
	];
})();