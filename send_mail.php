<?php
$name = $_GET['name'];
$email = $_GET['email'];
$msg = "You have received an email from $name, email = $email. The message is <br />";
$msg .= $_GET['msg'];


$to = "shon.saoji@gmail.com";
mail($email, "Enquiry for cerebrate", $msg);

