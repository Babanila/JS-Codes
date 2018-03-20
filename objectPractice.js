// Creating object name Hotel
var hotel = {
		name: 'Ibis Hotel',
		room: 50,
		roomType: ['sigleRoom', 'doubleRoom', 'suite'],
		roomBooked: 15,
		roomPrice: 240,
		location: 'Dubai',
		checkAvailability: function(){
		return this.room - this.roomBooked;
		}
}

var hotelName = hotel.name;
var elHotelName = document.getElementById('hotelName');
	elHotelName.textContent = hotelName;
	
var hotelRoomAvailable = hotel.checkAvailability();
var  elHotelRoomAvailability = document.getElementById('hotelRoomAvailable');
	elHotelRoomAvailability.textContent = hotelRoomAvailable;
	
var hotelRoomPrice = hotel.roomPrice;
var elHotelRoomPrice = document.getElementById('roomPrice');
	elHotelRoomPrice.textContent = '$' + hotelRoomPrice;
/*	
// var hotelRoomType = hotel.roomType;
var hotelRoom = hotel.room;
	elHotelRoom = document.getElementById('hotelRoom');
	elHotelRoom.textContent = hotelRoom;

var hotelRoomBooked = hotel.roomBooked;
	elHotelRoomBooked = document.getElementById('hotelRoomBooked');
	elHotelRoomBooked.textContent = hotelRoomBooked;
*/	



(function(){

		function offerEnds(today){
		var today, nextWeekDate;
		var dayOfTheWeek, monthOfTheYear;
		var day, date, month, year, offerMsg;
		
		today = new Date();
		nextWeekDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		
		dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		date = nextWeekDate.getDate();
		day = dayOfTheWeek[nextWeekDate.getDay()];
		month = monthOfTheYear[nextWeekDate.getMonth()];
		year = nextWeekDate.getFullYear();
		
		offerMsg = ('Offer valid till ' + day + ' <br> (' + date + ' ' + month + ' ' + year + ')');
		return offerMsg;
		}

var today;
var elOfferEndMsg = document.getElementById('offerEnds');
	elOfferEndMsg.innerHTML = offerEnds();
}());