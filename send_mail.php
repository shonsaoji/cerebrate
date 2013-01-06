<?php
$name = $_GET['name'];
$email = $_GET['email'];
$msg = "You have received an email from $name, email = $email. The message is \n";
$msg .= $_GET['msg'];
$headers = 'From: admin@cerebrateinc.com';

$to = "Shon Saoji <shon.saoji@gmail.com>, Eashwar Iyer <eashwarsiyer@hotmail.com>, Shyam_Personal <gdmunshi@yahoo.com>";
mail($email, "Enquiry for cerebrate", $msg, $headers);

