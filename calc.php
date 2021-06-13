
<?php

if(isset($_POST['submit'])){

    $sumDeposit = $_POST['sumDeposit'];

    $deposit2 = $_POST['deposit2'];


	if(!$operation || (!$number1 && $number1 != '0') || (!$number2 && $number2 != '0')) {
		$error_result = 'Не все поля заполнены';

    else
 	switch{
     case'1':
	     $result=$sumDeposit+$deposit2;
	     break;
	 case'2':
	    $result=$sumDeposit+2*$deposit2;
	     break;
	 case'3':
	    $result=$sumDeposit+3*$deposit2;
	     break;
		 
	 case'4':
	     $result=$sumDeposit+4*$deposit2;
	     break;
	 case'5':
	     $result=$sumDeposit+5*$deposit2;
	     break;
	}

if(isset($error_result)){
echo "Ошибка"}
else{echo "Ответ:$result";} 
}
?>



