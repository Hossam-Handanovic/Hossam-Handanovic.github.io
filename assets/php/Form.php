
<?php

// THIS is a simple form of php sending code please note the following:
	// 1-if The code does not work when you upload in domain server try to download xampp and try to use apache or Mysql.
	// 2- The best solution is to use PHP Mailer so u can download from githup page by using command in win or terminal in linux.
	// 3- Some times VS CODE requires from u to get update for php. 

	if(isset($_POST['submit'])){
		$name=$_POST['name'];
        $email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='hossamelhendawi123@hotmail.com'; // My email that message should send to me from sender
		$subject='Form Submission';
		$message="Name :".$name."\n"."Wrote the following :"."\n\n".$msg; // "/n" which means new block line
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo '<script>alert("Thank you we will contact you soon");</script>'; //JS alert box we can use sweet alert popup.
		}
		else{
			echo '<script>alert("Something went wrong");</script>';
		}
	}
?>