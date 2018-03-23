/*
// Using HTML Event Handler
function checkUsername(){
		var elFeedbackMsg = document.getElementById("feedback");
		var username = document.getElementById("username");
		if(username.value.length > 5){
			elFeedbackMsg.textContent = " ";
		}
		else{
			elFeedbackMsg.textContent = " Please enter more than 5 character for the Username ";
		}	
}
*/

/*
// Using DOM Event Handler
function checkUsername(){
		var elFeedbackMsg = document.getElementById("feedback");
		if(this.value.length > 5){
			elFeedbackMsg.textContent = " ";
		}
		else{
			elFeedbackMsg.textContent = " Please enter more than 5 characters ";
		}	
}

var elUsername = document.getElementById("username");
	elUsername.onblur = checkUsername;
*/

	
// Using Event Listener
function checkUsername(){
		var elFeedbackMsg = document.getElementById("feedback");
		if(this.value.length > 5){
			elFeedbackMsg.textContent = " ";
		}
		else{
			elFeedbackMsg.textContent = " Please enter more than 5 characters ";
		}	
}

var elUsername = document.getElementById("username");
	elUsername.addEventListener("blur", checkUsername, false);