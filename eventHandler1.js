// Using HTML Event Handler
function checkUsername(){
		var msg = document.getElementById("feedback");
		if(username.value.length > 5){
			msg = " ";
		}
		else{
			msg = " Please enter more than 5 character for Username ";
		}	
			var elFeedback = document.getElementById("feedback");
	return elFeedback.textContent = msg;
}