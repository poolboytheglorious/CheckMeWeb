<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));

$btnName=$dbhandle->real_escape_string($data->btnName);
if($btnName=='Insert'){

$name=$dbhandle->real_escape_string($data->name);
$lastname=$dbhandle->real_escape_string($data->lastname);
$phonenumber=$dbhandle->real_escape_string($data->phonenumber);
$country=$dbhandle->real_escape_string($data->country);
$company=$dbhandle->real_escape_string($data->company);


$query="INSERT INTO `checkmeweb`.`engineers` (`Name`, `LastName`, `PhoneNumber`, `Country`, `Company`)
VALUES ($name, $lastname, $phonenumber, $country, $company);


$dbhandle->query($query);
	}

	else {

		$id=$dbhandle->real_escape_string($data->id);
    	$name=$dbhandle->real_escape_string($data->name);
    	$query="UPDATE student SET studname = '".$name."' WHERE studid=$id ";
    	$dbhandle->query($query);



	}

?>