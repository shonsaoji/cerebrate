<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg = "You have received an email from $name, email = $email. The message is <br />";
$msg .= $_POST['msg'];


$to = "shon.saoji@gmail.com";
mail($email, "Enquiry for cerebrate", $msg);