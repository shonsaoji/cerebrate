$("#contactBtn").click(function(e) {
	var sender_name = $("#senderName");
	var sender_email = $("#senderEmail");
	var sender_msg = $("#senderMsg");
	$.get("/send_mail.php?")
});