<?php
	//Check to make sure that the name field is not empty
	if(trim($_POST['nome']) == '') {
		$hasError = true;
	} else {
		$nome = trim($_POST['nome']);
	}
	
	//Check to make sure that the name field is not empty
	if(trim($_POST['cognome']) == '') {
		$hasError = true;
	} else {
		$cognome = trim($_POST['cognome']);
	}
	

	//Check to make sure sure that a valid email address is submitted
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}

	//Check to make sure comments were entered
	if(trim($_POST['messaggio']) == '') {
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$messaggio = stripslashes(trim($_POST['messaggio']));
		} else {
			$messaggio = trim($_POST['messaggio']);
		}
	}

	//If there is no error, send the email
	
	
	if(!isset($hasError)){
		$emailTo = 'lookatfestival@gmail.com'; //Put your own email address here
		$subject = 'Richiesta informazioni dal sito LookAt Festival';
		$headers = 'RICHIESTA INFORMAZIONI LOOKAT FESTIVAL DA: ' . $email;
		$body = "NOME: $nome \nCOGNOME: $cognome \nEMAIL: $email \nMESSAGGIO: $messaggio";
		
		
		$mail =mail($emailTo, $subject, $body, $headers);
		
		if($mail){
			echo 'OK';
		}
		else
		{
			echo '<div class="notification_error">C\'&egrave; stato un problema nell\'invio. Ritenta.</div>';
		}
	}
	else
	{
		echo '<div class="notification_error"></div>';
	}
	
?>