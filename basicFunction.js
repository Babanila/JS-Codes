var signUpMessage = "Sign up for our newsletter and get 10% off !!!"
function updateMessage(){
	var elSignUp = document.getElementById('signUp');
	elSignUp.textContent = signUpMessage;
}
// Calling the function
updateMessage();

// Getting single value out of a function
function calculateArea(width, height){
	var area = width * height;
	return area;
}

// Calling the function using different print statement
    window.alert(calculateArea(2, 9));
	document.write(calculateArea(5, 8));
   // document.innerHTML(calculateArea(4, 12));
	console.log(calculateArea(10, 7));

/* when a return statement is used in a function, the function jump out and does not read any
other statements after the return statement */


// Using function to get multiple values
	function getSizes(width, height, depth){
	var area = width * height ;
	var volume = width * height * depth ;
	var sizes = [area, volume];
	return sizes;
	}

// Returning the function into an array
	 var elArea = getSizes(2,5,9)[0];
      var elVolume = getSizes(2,5,9)[1];
      var sizes = [elArea, elVolume];
	document.write("<br>" + "Area = " + elArea + " <br>  " + " Volume =  " + elVolume);

// Another way of calling the function		
	var sizes = new Array();
       sizes[0] = getSizes(2,5,9)[0];
      sizes[1] = getSizes(2,5,9)[1];
	document.write("<br>" + sizes[0] + "<br>" + sizes[1]);
