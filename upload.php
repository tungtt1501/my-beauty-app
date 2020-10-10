<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$response = array();
$upload_dir = realpath('./images') . '/';
$logic_dir = ('images');
$server_url = 'http://my-beauty-lausanne.ch';

if($_FILES['file']) {
    $name = $_FILES["file"]["name"];
  	$ext = '.'.pathinfo($name, PATHINFO_EXTENSION);
    $tmp_name = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];

    if($error > 0) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    } else {
        $random_name = 'gallery-'.rand(1000,1000000).($ext);
        $upload_name = $upload_dir.strtolower($random_name);
	    $upload_name = preg_replace('/\s+/', '-', $upload_name);
    
        if(move_uploaded_file($tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $logic_dir."/".strtolower($random_name)
              );
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
die();
?>