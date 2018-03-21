// Practising by creating Element

var elH = document.createElement('h2'); 
var sellGrocery = document.createTextNode('Sell Groceries');
	elH.appendChild(sellGrocery);
	document.body.appendChild(elH);
				
// Creating list of grocery to sell (apple, oranges, banana)	
var eldiv = document.createElement('div');	
var elli1 = document.createElement('li'); 
var fruitApple = document.createTextNode('apple');
		elli1.appendChild(fruitApple);
		eldiv.appendChild(elli1);
		document.body.appendChild(eldiv);
		
var	elli2 = document.createElement('li'); 
var fruitOrange = document.createTextNode('orange');
		elli2.appendChild(fruitOrange);
		eldiv.appendChild(elli2);
		document.body.appendChild(eldiv);
		
var elli3 = document.createElement('li'); 
var fruitBanana = document.createTextNode('banana');
		elli3.appendChild(fruitBanana);
		eldiv.appendChild(elli3);
		document.body.appendChild(eldiv);

// Accessing DOM Elements

var	el1 = document.getElementsByTagName('li');
 		var i = el1.length; // To know the total number of li
 		if(i > 0){
		el1[6].className = 'cool';
	}
	

// This will change the first li(hot to cool)	
var	el2 = document.querySelector('li.hot');
	el2.className = 'cool';
	
	
//	This will return the Nodelist of all  li
var	el3 = document.querySelectorAll('li.hot');
		el3[0].className = 'cool';
		el3[1].className = 'completed';
		
	
// Using For statement to change multiple Elements in a code
var	el4 = document.getElementsByClassName('cool');
	var n = el4.length;
	for(var j=0; j <= n-1; j++){
	el4[0].className = 'completed';
	}

var	el5 = document.querySelectorAll('li.completed');
	el5[0].className = 'cool';
	el5[1].className = 'hot';
	el5[3].className = 'cool';

var elStart = document.getElementById('three');
var	elPrev = elStart.previousSibling;
var elNext = elStart.nextSibling;
	
	elPrev.className = 'fresh';
	elNext.className = 'hot';
	
// You can run them one by one to get how each works