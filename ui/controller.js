$("#contactBtn").click(function(e) {
	var sender_name = $("#senderName").val();
	var sender_email = $("#senderEmail").val();
	var sender_msg = $("#senderMsg").val();
	$.get("/send_mail.php?name=" + sender_name + "&email=" + sender_email + "&msg=" + sender_msg, function() {
		$("#senderName").val("");
		$("#senderEmail").val("");
		$("#senderMsg").val("");
		alert('Thank you for the enquiry. Your message has been sent!');
	});
});