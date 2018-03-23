/*
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
	
// End of Using Event Listener
*/

/*
// Using Event Listener with Input parameters using Event Handler
var elFeedbackMsg = document.getElementById("feedback");
var elUsername = document.getElementById("username");

function checkUsername(minLength){
		if(elUsername.value.length > minLength){
			elFeedbackMsg.textContent = " ";
		}
		else{
			elFeedbackMsg.textContent = " Please enter more than " + minLength + " characters ";
		}	
}

// Checking if the browser support addEventListener
	if(elUsername.addEventListener){
		elUsername.addEventListener("blur", function(){checkUsername(8);}, false);
	}
	else{ 
		elUsername.attachEvent("onblur", function(){checkUsername(8);});
		}
//	End of Using Event Listener code
*/



// Using Event Handler/Listener to check for browser support 
function checkLength(e, minLength) {
    var el, elMsg;

    if (!e) {
        e = window.event;
    }

    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        elMsg.innerHTML = "Please enter more than " + minLength + " characters";
    } else {
        elMsg.innerHTML = " ";
    }
}


var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener("blur", function(e) { checkLength(e, 8); }, false);
} else {
    elUsername.attachEvent("onblur", function(e) { checkLength(e, 8); });
}
// End of the code




/*
// Passing parameters to the Event Handler
  function checkUsername(el , minlength){
      var elMsg = document.getElementById('feedback');
            if (el.value.length < minlength){
                      elMsg .innerHTML = 'Not long enough ' ;
            }
            else{
                  elMsg.innerHTML = '';
            }
  }
	     var el = document.getElementById('username');
         el.addEventListener('blur', function(){checkUsername(el , 5);}, false);
          
// End of codes 
*/