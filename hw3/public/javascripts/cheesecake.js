/**
Javascript file for the cheesecake.html file
This is for CS341 HW2, BY Stelios Papoutsakis
The purpose of this file is to add functionailty such as form validation,
and a hover drop down menu
**/

// function is called when doc is ready
$(document ).ready(function () {
	$("#order").click(function () {
		var notes = $("#extranotes").val();
		//using regex to not match words that contain "vegan" (E.g. HDHDHVEGANJJD)
		if (/(^|\s+)vegan($|\s+)/.exec(notes.toLowerCase())) {
			alert('Warning, Cheesecake contains dairy!');
		} else {
			//getting values
			var quanity = $("option").filter(':selected').text();
			var type = $('input[type=radio]:checked').val();
			//remove table, notes and topping header
			$(".element-wrap").empty();
			//inserting new elements
			$(".element-wrap").append($("<h1></h1>").text("Thank you! Your order has been placed"));
			$(".element-wrap").append($("<p></p>").text("Order Info:"))
			$(".element-wrap").append($("<p></p>").text("Quanity: "+quanity));
			$(".element-wrap").append($("<p></p>").text("Toppings: "+type));
			if (notes.length() > 0) {
				$(".element-wrap").append($("<h3</h3>").text("Notes: "));
				$(".element-wrap").append($("<p></p>").text(notes));
			}
		}
	});
	//selects option from drop down and replaces the name in header for orders
	$(".dropdown-content > a").click( function () {
		$(".dropbtn").text($(this).text());
	
	});



});

