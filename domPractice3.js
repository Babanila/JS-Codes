// Practising setting and getting of Element Attributes
				
var firstItem = document.getElementById('one');
	if(firstItem.hasAttribute('class')){
		var attr = firstItem.getAttribute('class');
		//document.write(attr);
		var elAttr = document.getElementById('attrRes');
	elAttr.innerHTML = '<p> The class of First Item is :  '  + attr +'</p>';
	}
	

var secondItem = document.getElementById('two');
    secondItem.className = 'completed';
var fourthItem = document.getElementsByTagName('li').item(3);
     fourthItem.setAttribute('class' , ' cool');


var thirdItem = document.getElementById('three'); 
	if(thirdItem.hasAttribute('class')){
			thirdItem.removeAttribute('class');
			}

// You can run them one by one to get how each works