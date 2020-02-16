/**
Javascript file for the cheesecake.html file
This is for CS341 HW4, BY Stelios Papoutsakis 02/10/2020
The purpose of this file is to add functionailty such as form validation,
and a hover drop down menu
**/
// function is called when doc is ready
$(document ).ready(function () {
	      $("#order").click(function () {
	          var notes = $("#extranotes").val();
	          //using regex to not match words that contain "vegan" (E.g. HDHDHVEGANJJD)
	          if (/(^|\s+)vegan(\.|$|\s+)/.exec(notes.toLowerCase())) {
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
	              if (notes.length > 0) {
	                  $(".element-wrap").append($("<h3</h3>").text("Notes: "));
	                  $(".element-wrap").append($("<p></p>").text(notes));
	              }
	          }
			  // sending post request to neworders
			 $.post("http://localhost:3000/neworders", {
				 'quanity': quanity, 
				 'topping': type, 
				 'notes': notes  
	    	});
		  });
	       //selects option from drop down and replaces the name in header for orders
	       $(".dropdown-content > a").click( function () {
			   let month_str = $(this).text();
			   $.post("http://localhost:3000/orders",{'month': month_str}, (data) => {
				   // creating varibales to hold the sum of all the types of orders
				  let num_cherry = num_plain = num_chocolate = 0;
				  for (let i = 0; i < data.length; i++) {
					  //using toLowerCase because I put the data in all caps :(
					  switch (data[i].TOPPING.toLowerCase()) {
					  	case 'chocolate':
							  num_chocolate+=data[i].QUANTITY;
							  break;
						case 'plain':
							  num_plain+=data[i].QUANTITY;
							  break;
						case 'cherry':
							  num_cherry+=data[i].QUANTITY;
							  break;
						default:
							  console.log('warning, topping not recongized');
					 }
					}
				    //updating dom
					 $('#cherry_count').text(num_cherry + ' cherry');
					 $('#chocolate_count').text(num_chocolate + ' chocolate');
					 $('#plain_count').text(num_plain + ' plain');
				});
	           $(".dropbtn").text(month_str);
	       
	       });
	   
	   
		   
	   });

