// Code to generates date of next 7 days
(function(){

function offerExpires(today){
var today, weekFromToday, dayNames, monthNames;
var day, date, month, year;
var expiryMsg;

    var today = new Date();
   weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

   dayNames = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday', 'Thursday' ,
'Friday', 'Saturday' ];
  
  monthNames = ['January', 'February', 'March', 'April', 'May' , 'June' ,
'July' , 'August' , 'September' , 'October' , 'November' , 'December' ];
  
day = dayNames[weekFromToday.getDay()];
date = weekFromToday.getDate();
month = monthNames[weekFromToday.getMonth()];
year = weekFromToday.getFullYear();


expiryMsg = 'Offer expires next';
expiryMsg += day + ' <br I>( ' + date + ' ' + month + ' ' + year + ')';
return expiryMsg;
}

var elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires() ;
}());

// Code to show if-else statement, while and Do - while statements

var sign = prompt("Enter the addition or multiplication sign ", " + or * ");
var num = prompt(" Enter the multiplication number you will like to generate ");
var msg = ' <br> RESULT <br>';
var i = 1;

if (num === isNaN || num === ' '){
	msg = 'Please enter a valid number example 2';
	}
	else{

			if(sign === '+'){
					for(i=1; i<=12; i++){
					msg += i + ' + ' + num + ' = ' + (i+num) + '<br>';
					}
	
			} 
			else if(sign === '*'){
					while(i <= 12){
					msg += i + ' x ' + num + ' = ' + (i*num) + '<br>';
					i++;
					}
	
			} 
			else{
	
				msg = 'Please input + for Addition and * for Multiplication';
			}
	}
		
var elMsg = document.getElementById('sign');
	elMsg.innerHTML = msg;
	
	
	
	