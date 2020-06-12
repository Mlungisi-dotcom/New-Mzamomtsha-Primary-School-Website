 
function validateForm()								 
{ 
	var name = document.forms["RegForm"]["Name"];			 
	var email = document.forms["RegForm"]["EMail"]; 
	var phone = document.forms["RegForm"]["Telephone"]; 
	var what = document.forms["RegForm"]["Subject"]; 
	var password = document.forms["RegForm"]["Password"]; 
	var address = document.forms["RegForm"]["Address"]; 

	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (address.value == "")							 
	{ 
		window.alert("Please enter your address."); 
		address.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (phone.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (what.selectedIndex < 1)				 
	{ 
		alert("Please enter your course."); 
		what.focus(); 
		return false; 
	} 

	return true; 
		var navbar  = document.querySelector('.#navbar');

		navbar.onclick = function () {
 		var red = Math.floor(Math.random() * 256);
 		var blue = Math.floor(Math.random() * 256);
 		var green = Math.floor(Math.random() * 256);

 		this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
