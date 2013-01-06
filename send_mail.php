<?php
$name = $_GET['name'];
$email = $_GET['email'];
$msg = "You have received an email from $name, email = $email. The message is \n";
$msg .= $_GET['msg'];
$headers = 'From: admin@cerebrateinc.com';


$to = "shon.saoji@gmail.com";
mail($email, "Enquiry for cerebrate", $msg, $headers);

