var msg = '<h2>Browser Window</h2><p>Width : ' + window.innerWidth + '</p>' ;
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h2>History</h2><p>Items : ' + window.history.length + '</p>';


msg += ' <h2>Screen</h2><p>Width : ' + window.screen.width+ '</ p> ';
msg += ' <p>Height : ' + window.screen.height + '</p>';

//document.write(msg);
var elMsg = document.getElementById('broswerDetail');
elMsg.innerHTML = msg;

//alert('Current page : ' + window.location);

// The footer code using Document Object Model
var msg2 = '<p><b>Page Title: </b>' + document.title + '</p>';
	msg2 += '<p><b>Page address: </b>' + document.URL + '</p>';
	msg2 += '<p><b>Last modified: </b>' + document.lastModified + '</p>';
	
var	elMsg2 = document.getElementById('footer');
	elMsg2.innerHTML = msg2;
	
// Generating random number between 1 and 30
	var randomNumber = Math.floor((Math.random() * 30) + 1);
	
	var elRandNum = document.getElementById('randomNumber');
		elRandNum.innerHTML = randomNumber + ' is a random number.';