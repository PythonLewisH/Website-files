<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  
  $to = "youremail@example.com";
  $subject = "New Enquiry";
  $headers = "From: $email" . "\r\n" .
  "Reply-To: $email" . "\r\n" .
  "X-Mailer: PHP/" . phpversion();
  
  $body = "Name: $name\n Email: $email\n Phone: $phone\n Message: $message";
  
  if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent";
  } else {
    echo "An error occurred";
  }
?>
