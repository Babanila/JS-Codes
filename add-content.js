/* This codes greet the user on a web page */
var today = new Date(); // Create new date
var hourNow = today.getHours(); // Get the current hour of the day
var greeting;


// Display the appropriate greetings based on the current hour
if(hourNow > 18){
	greeting = 'Good evening! ';
}
else if(hourNow > 12){
	greeting = ' Good afternoon! ';
}
else if(hourNow > 0){
	greeting = ' Good morning! ';
}
else{
	greeting = ' Welcome';
}
document.write('<h3>' + greeting + '</h3>');