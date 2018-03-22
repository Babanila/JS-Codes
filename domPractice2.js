// Practising by creating Element

				
// Creating list of grocery to sell (apple, oranges, banana)
var eldiv = document.createElement('div');	// Creating div	
var elul = document.createElement('ul');	// Creating unordered list	
	eldiv.appendChild(elul);

var elli1 = document.createElement('li');   // creating list item
var fruitApple = document.createTextNode('apple');
		elli1.appendChild(fruitApple);
		elul.appendChild(elli1);
		document.body.appendChild(elul);
		
var	elli2 = document.createElement('li'); 
var fruitOrange = document.createTextNode('orange');
		elli2.appendChild(fruitOrange);
		elul.appendChild(elli2);
		document.body.appendChild(elul);
		
var elli3 = document.createElement('li'); 
var fruitBanana = document.createTextNode('banana');
		elli3.appendChild(fruitBanana);
		elul.appendChild(elli3);
		document.body.appendChild(elul);
	

// Accessing DOM Elements

var	el1 = document.getElementsByTagName('li');
 		var i = el1.length; // To know the total number of li
 		if(i > 0){
		el1[1].className = 'cool';
		el1[2].className = 'completed';
		el1[5].className = 'hot';
		el1[6].className = 'cool';
	}

// Changing the fresh value of the firstChild using either innerHTML,textContent or innerText
var item1 = document.getElementById('one');
var itemNext1 = item1.firstChild.textContent;
	itemNext1 =itemNext1.replace('fresh', 'old');
	item1.firstChild.textContent = itemNext1;
	
	
// Changing the fig value either firstChild or lastChild the two below method
var item1b = document.getElementById('one');
var itemNext1b = item1b.firstChild.nextSibling.nodeValue;
	itemNext1b =itemNext1b.replace('figs', 'trees');
    item1b.firstChild.nextSibling.nodeValue = itemNext1b;
/*    
var item1b = document.getElementById('one');
var itemNext1b = item1b.lastChild.nodeValue;
	itemNext1b =itemNext1b.replace('figs', 'trees');
    item1b.lastChild.nodeValue = itemNext1b;
*/	
	

var item2 = document.getElementById('two');
var itemNext2 = item2.firstChild.nodeValue;
	itemNext2 =itemNext2.replace('pine nuts', 'sugar');
	item2.firstChild.nodeValue = itemNext2;
	
			
var elli4 = document.createElement('li'); // creating new Element
var elli4Text = document.createTextNode('salt'); // creating what is inside the element(TextNode)
	elli4.appendChild(elli4Text); // putting the node value or text in the element
	position = document.getElementsByTagName('li')[0]; // creating the exact position to put the element
	position.appendChild(elli4);
	
		
var elli5 = document.createElement('div');
var elli5Text = document.createTextNode('Sell Groceries');
	elli5.appendChild(elli5Text);
	position = document.getElementsByTagName('div')[0];
	position.appendChild(elli5);

// Removing Element
var removElem = document.getElementsByTagName('li')[2];
var containerElem = removElem.parentNode;
	containerElem.removeChild(removElem);


	
// You can run them one by one to get how each works