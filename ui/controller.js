$("#contactBtn").click(function(e) {
	var sender_name = $("#senderName").val();
	var sender_email = $("#senderEmail").val();
	var sender_msg = $("#senderMsg").val();
	ret = false;
	if(sender_name.length == 0) {
		$("#senderName").addClass("error");
		ret = true;
	} 
	
	if ( sender_email.length == 0 ) {
		$("#senderEmail").addClass("error");
		ret = true;
	} 
	
	if (sender_msg.length ==0 ) {
		$("#senderMsg").addClass("error");
		ret = true;
	}
	if(ret) {
		$("#msgStatus").addClass("alert-box alert");
		$("#msgStatus").html('Please fill in all the information below. <a href="" class="close">&times;</a>');
		return;
	} 
	$.get("/send_mail.php?name=" + sender_name + "&email=" + sender_email + "&msg=" + sender_msg, function() {
		$("#senderName").val("");
		$("#senderEmail").val("");
		$("#senderMsg").val("");
		$("#senderName").removeClass("error");
		$("#senderEmail").removeClass("error");
		$("#senderMsg").removeClass("error");
		$("#msgStatus").removeClass("alert");
		$("#msgStatus").addClass("alert-box success");
		$("#msgStatus").html('Thank you for the enquiry. Your message has been sent! <a href="" class="close">&times;</a>');
	});
});