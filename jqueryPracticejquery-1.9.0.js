// Practising jQuery syntax

/*
var $item = $('ul').html();
$('ul').append($item);

var $item1 = $('ul').text();
$('ul').append($item1);

var $item2 = $('li.hot').html();
$('li').append($item2);

var $item3 = $('li.hot').text();
$('ul').append($item3);

var $item4 = $('li#four').addClass('cool');

var $item5 = $('li em').addClass('complete');

var $item6 = $('li.hot').addClass('favorite');


var $item8 = $('li[id=two]').addClass('cool');

var $item9 = $('li[id!=three]').addClass('complete');

var $item10 = $('li[id=four]').hide().delay(400).fadeOut(1500);
*/

$(function(){
    $('li:contains(fresh)').text('almond');

    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>'});

    $('li#one').remove();
});

$(function(){
    $('ul').before('<p class="notice"> Just Updated </p>');
    $('li.hot').prepend('- ');
    // $('ul').append('<li> gluten free soya sausage </li>');
    	var $newItem = $('<li><em>gluten free</em> soya sausage </li>');
    	$('li:last').after($newItem);
});




$(function(){
    var ids = " ";
    var $listItems = $('li');

		$listItems.on('mouseover click', function(){
				ids = this.id;
				$listItems.children('span').remove();
				$(this).append('<span class="priority">' + ids + '</span>');
		}) ;

		$listItems.on('mouseout', function(){
		$(this).children('span').remove();
		}) ;
} ) ;
// You can run them one by one to get how each works