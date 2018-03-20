// Variable testing
var price;
var quantity;
var total;

// Assigning value to the variables
price = 5;
quantity = 10;


// Calculating total cost
total = price * quantity;

var el = document.getElementById('cost');
	el.textContent = '$' + total;
