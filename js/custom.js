
function clickLogIn(element,event) {
	event.preventDefault();
	
	var username = $("#input_username").val();
	var passwordtxt = $("#input_password").val();

	if(username == "admin" && passwordtxt == 'admin'){
		window.location.href = "home.html";
		$("#label_incorrectlogin").hide();		
	}else{
		$("#label_incorrectlogin").show();
	}
	
}

function clickFinish(element,event) {
	
	event.preventDefault();
	
	var invoiceNum = $("#input_invoiceNum").val();
	var invoiceDate = $("#input_invoiceDate").val();
	var invoiceDelivery = $("#input_invoiceDlvDdate").val();
	var fieldTicket = $("#input_fieldTicket").val();
	var invoiceTotoal = $("#input_total").val();
	window.location.href = "home.html";
}