<?php  

include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));
$id=$data->id;

$query="DELETE FROM userlist WHERE id=".$id;

$dbhandle->query($query)

 ?>