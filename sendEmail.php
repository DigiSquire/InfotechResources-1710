<?php

if(isset($_POST['cd-name'])){
    $name = $_POST['cd-name'];
}
if(isset($_POST['cd-email'])){
    $from = $_POST['cd-email'];
}
if(isset($_POST['cd-company'])){
    $companyName = $_POST['cd-company'];
}
if(isset($_POST['product'])){
    $product = $_POST['product'];
}
if(isset($_POST['cd-textarea'])){
    $formMessage = $_POST['cd-textarea'];
}
if(isset($_POST['cd-phone'])){
    $formMessage = $_POST['cd-phone'];
}

$subject = 'Infotech form';

$headers = "From: " . $_POST['cd-email'] . "\r\n";
$headers .= "Reply-To: ". $_POST['cd-email'] . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body style="margin:0;padding:0;font-family:"helvetica";">';
$message .= '<h1 style="color:#555;margin-left:31%;"><img src="http://www.digisquire.co/images/favicon/logo.png" alt="digisquire logo"></h1>';
$message .= '<h2>Enquiry form</h2>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $_POST['cd-name'] . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . $_POST['cd-email']. "</td></tr>";
$message .= "<tr><td><strong>Company Name:</strong> </td><td>" . $_POST['cd-company'] . "</td></tr>";
$message .= "<tr><td><strong>Work Phone:</strong> </td><td>" . $_POST['cd-phone'] . "</td></tr>";
$message .= "<tr><td><strong>Product:</strong> </td><td>" . $_POST['product'] . "</td></tr>";
$message .= "<tr><td><strong>Product Quantity:</strong> </td><td>" . $_POST['radio-button'] . "</td></tr>";
$message .= "<tr><td><strong>Message:</strong> </td><td>" . $_POST['cd-textarea'] . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

$to  = 'mktg.itresources@gmail.com';//replace with your email

$success = "
<div class=\"row-fluid\">
    <div class=\"span12\">
        <h3>Submission successful</h3>
        <p>Thank you for taking the time to contact DigiSquire Ltd.If you need immediate assistance or would like to speak to someone now, please feel free to contact us directly at <strong>09822976448</strong>.</p>
		<p> $from </p>
    </div>
</div>
";
if (mail($to, $subject,$message,$headers)) {
    echo "$success"; // success
} else {
    echo 'Form submission failed. Please try again...'; // failure
}
// Success Message

//header("Location: http://digisquire.co");
/* echo "Message sent";
echo $name;
echo $from ;
echo $subject;
echo $message;
echo $to; */
die;
