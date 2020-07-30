


/* Booking 

$(document).ready(function(){
	 var minDate = new Date();
	$("#checkin").datepicker({
		showAnim: 'drop',
		numberOfMonth: 1,
		minDate: minDate,
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd/mm/yy',
		onClose: function(selectedDate){
		$('#checkout').datepicker("option","minDate",selectedDate);	
			
		}
	});
	
	$("#checkout").datepicker({
		showAnim: 'drop',
		numberOfMonth: 1,
		minDate: minDate,
		//maxDate: '4M',
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd/mm/yy',
		onClose: function(selectedDate){
		$('#checkout').datepicker("option","minDate",selectedDate);	
			
		}
	});
});

$('.info').hide();
   function check(){
    $('.info').show();
	var incheck = $("#checkin").val();
	var outcheck = $("#checkout").val();
	var gue = $("#guests").val();
	var roo = $("#rooms").val();
	
	 $( "#demo" ).html( "<b>Check-In:</b> " + incheck );
	 $( "#demo1" ).html( "<b>Check-Out:</b> " + outcheck );
	 $( "#demo2" ).html( "<b>Guests:</b> " + gue );
	 $( "#demo3" ).html( "<b>Rooms:</b> " + roo );
   
}*/

























/* ENQUIRY */





function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var enquirydetail = document.getElementById("enquirydetail").value;
	
	
	var namecheck = /^[A-Za-z .]{3,30}$/;
	var emailcheck = /^[A-Za-z_.]{3,}[0-9]{0,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var messagecheck = /^[A-Za-z. ]{2,60}[0-9]{0,}$/;
	var enquiryerror = " ";
	
	if(namecheck.test(name)){
		document.getElementById("nameerror").innerHTML =" ";
	}
	else{
		document.getElementById("nameerror").innerHTML ="**Name is Invalid";
		return false;
	}
	
	if(emailcheck.test(email)){
		document.getElementById("emailerror").innerHTML =" ";
	}
	else{
		document.getElementById("emailerror").innerHTML ="**Email is Invalid";
		return false;
	}
	
	if(messagecheck.test(message)){
		document.getElementById("messageerror").innerHTML =" ";
	}
	else{
		document.getElementById("messageerror").innerHTML ="**Please enter a valid message";
		return false;
	}
	
    alert("Thank You! We will get back to you.");
}



		
 
 

	


	

		