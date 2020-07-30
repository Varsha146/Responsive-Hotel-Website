$(document).ready(function(){
	 $('#info').hide();
 });
 
$(document).ready(function(){
	 var minDate = new Date();
	$("#checkin").datepicker({
		showAnim: 'drop',
		numberOfMonth: 1,
		minDate: minDate,
		 maxDate: '4M',
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





function validation(){
	
	
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	
	
	
	var namecheck = /^[A-Za-z .]{3,30}$/;
	var emailcheck = /^[A-Za-z_.]{3,}[0-9]{0,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var phonecheck = /^[0-9]{10}$/;
	
	
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
	
	if(phonecheck.test(phone)){
		document.getElementById("phoneerror").innerHTML =" ";
	}
	else{
		document.getElementById("phoneerror").innerHTML ="**Number is Invalid";
		return false;
	}

 alert("Thank You!");

}


   
    $(document).ready(function(){
	 $('#details').click(function(){

     $('#info').show();

	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var incheck = $("#checkin").val();
	var outcheck = $("#checkout").val();
	var gue = $("#guests").val();
	var roo = $("#rooms").val();
	
	
	
	  
	 $( "#demo" ).html( "<b>Name:</b> " + name );
	 $( "#demo1" ).html( "<b>Email:</b> " + email );
	 $( "#demo2" ).html( "<b>Phone:</b> " + phone );
     $( "#demo3" ).html( "<b>Check-In:</b> " + incheck );
	 $( "#demo4" ).html( "<b>Check-Out:</b> " + outcheck );
	 $( "#demo5" ).html( "<b>Guests:</b> " + gue );
	 $( "#demo6" ).html( "<b>Room:</b> " + roo ); 
	 
	 }); 

});


	 
	  $(document).ready(function(){
		$('#confirm').click(function(){
			swal({
  title: "Oops!",
 text: "Please Enter the Mandatory Fields.",
  icon: "warning",
  button: "Ok",
});
			
		});
	});
			





 /*  $(document).ready(function(){
		$('#details').click(function(){
			swal({
  title: "Thank You!",
 // text: "Your Booking has Confirmed!",
  icon: "success",
  button: "Ok.",
});
			
		});
	});
 */
