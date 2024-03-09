<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email address where you want to send the message
    $to = "mangodudenikola@gmail.com";

    // Subject of the message
    $subject = "New message from $name";

    // Message body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "An error occurred while sending the message.";
    }
}
?>
