// JS code to show greeting on Web page

var username = "Babanila";
var greeting = " Hello ";
var welcome = greeting + username + ', please confirm your order';

/*var elUsername = document.getElementById('username');
	elUsername.textContent = username;
	*/
var elGreeting = document.getElementById('greeting')
	elGreeting.textContent = welcome;


// JS code showing how to get element to Web page
var shipping = 4;
var price = 5;
var userSign = "MANCHESTER CITY";
var numTiles = userSign.length;
var costPrice = price * numTiles;
var total= shipping + costPrice;

var elUserSign = document.getElementById('userSign');
	elUserSign.textContent = userSign;

var elNumTiles = document.getElementById('numTiles');
	elNumTiles.textContent = numTiles;


var elShip = document.getElementById('shipping');
elShip.textContent ='$' + shipping ;

var elPrice = document.getElementById('price');
elPrice.textContent ='$' + price;


var elPrice = document.getElementById('costPrice');
elPrice.textContent = '$' + costPrice;


var elTotal = document.getElementById('total');
	elTotal.textContent ='$' + total;

