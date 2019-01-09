<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "checkmeweb");

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = $conn->query("SELECT Name, LastName,
  PhoneNumber, Country, Company, Registered FROM engineers");
$query="SELECT * FROM engineers";


//$data = array();

$rs = mysqli_query($conn,"SELECT * FROM engineers");

while ($row = $rs->fetch_array(MYSQLI_ASSOC)) {
  $data[] = $row;

  $outp = "";


}

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
  $outp .= '"City":"'   . $rs["City"]        . '",';
  $outp .= '"Country":"'. $rs["Country"]     . '"}';
}

	print_r($data);
    
    print json_encode($data);
    $conn->close();
    $outp ='{"records":['.$outp.']}';
?>


