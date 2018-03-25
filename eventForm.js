// To know how each block of codes works, You need to unblock one and run at a time.

// Event with Form sample
var elForm, elSelectPackage, elPackageHint, elTerms;
elForm = document.getElementById('formSignUp');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint(){
    var package = this.options[this.selectedIndex].value;
    if(package == 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for a year';
    }
    else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}
        function checkTerms(event){
            if (!elTerms.checked){
                elTermsHint.innerHTML = 'You must agree to the terms';
                event.preventDefault();
            }
        }

    elForm.addEventListener('submit', checkTerms, false); //Event listeners attached to submit calling checkTerms(),
    elSelectPackage.addEventListener("change", packageHint, false); //Event listeners attached to change calls packageHint()
// Event with Form sample code ends

/*
// Start of Mutation Event/Mover sample with list
var elList, addLink, newEl, newText, counter, listItems;

ellist = document.getElementById('list');
addlink = document.querySelector('a');
counter = document .getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = list.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

    addLink.addEventListener("click", addItem, false);
    elList.addEventListener("DOMNodeInserted", updateCount, false);
// End of Mutation code
*/

/*
// using Event Listener DOMContentLoaded,beforeUnload
function setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;});
// End of using Event Listener DOMContentLoaded,beforeUnload code

*/