<?php
require 'restful_api.php';

class api extends restful_api {
	var $result;

	function __construct(){
		parent::__construct();
		$this->response(200, $this->method);
	}

	function service_category(){
		switch ($this->method) {
            case 'POST':
		  		$arr = json_decode($this->file, true);
                $serviceCategoryName = $arr['categoryName'];
		  		$result = $this -> dbConnect -> query("INSERT INTO service_category(service_category_name) VALUES ('$serviceCategoryName')");
    			
    			$service_category;
    			if($result) {
    				// Cycle through results
    				$id = $this -> dbConnect -> insert_id;
    				$result = $this -> dbConnect -> query("SELECT * from service_category where service_category_id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$service_category = array (
                                "categoryId" => $service_category_id,
                                "categoryName" => $service_category_name
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_category);
				break;
			case 'GET':
				// Perform query
				$result = $this -> dbConnect -> query("SELECT * FROM service_category");
			
				$resultSet = array();
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$service_category_item = array (
							'categoryId' => $service_category_id,
							'categoryName' => $service_category_name
						);
						array_push($resultSet, $service_category_item);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $resultSet);
				break;
			case 'PUT':
		  		$arr = json_decode($this->file, true);
		  		$serviceCategoryId = $arr['categoryId'];
                $serviceCategoryName = $arr['categoryName'];
		  		$result = $this -> dbConnect -> query("UPDATE service_category SET service_category_name = '$serviceCategoryName' where service_category_id = '$serviceCategoryId'");
    			
    			$service_category;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from service_category where service_category_id = '$serviceCategoryId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$service_category = array (
                                "categoryId" => $service_category_id,
                                "categoryName" => $service_category_name
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_category);
				break;
			case 'DELETE':
		  		// Perform query
				$serviceCategoryId = $_GET['id'];
		  		$result = $this -> dbConnect -> query("DELETE FROM service_item where service_category_id = '$serviceCategoryId'");
			    $result = $this -> dbConnect -> query("DELETE FROM service_category where service_category_id = '$serviceCategoryId'");
		
			    $service_category;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from service_category where service_category_id = '$serviceCategoryId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$service_category = array (
                                "categoryId" => $service_category_id,
                                "categoryName" => $service_category_name
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_category);
				break;
			default:
                $this->response(500, "Invalid Method");
            break;
		}
	}
  
  function service_category_by_id(){
		switch ($this->method) {
            case 'POST':
				break;
			case 'GET':
				// Perform query
		  		$serviceCategoryId = $_GET['id'];
				$result = $this -> dbConnect -> query("SELECT * FROM service_category where service_category_id = '$serviceCategoryId'");
			
				$service_category;
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$service_category = array (
							'categoryId' => $service_category_id,
							'categoryName' => $service_category_name
						);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $service_category);
				break;
			case 'PUT':
				break;
			case 'DELETE':
				break;
			default:
                $this->response(500, "Invalid Method");
            break;
		}
	}
	
	function service_item_by_category(){
		switch ($this->method) {
            case 'POST':
				break;
			case 'GET':
				// Perform query
				$categoryId = $_GET['categoryId'];
				$result = $this -> dbConnect -> query("SELECT * FROM service_item where service_category_id = '$categoryId'");
			
				$resultSet = array();
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$service_category_item = array (
							'serviceItemId' =>  $service_item_id,
							'categoryId' => $service_category_id,
							'serviceItemName'=> $service_item_name,
							'serviceItemTime' => $service_item_duration,
							'serviceItemPrice' => $service_item_price
						);
						array_push($resultSet, $service_category_item);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $resultSet);
				break;
			case 'PUT':
				break;
			case 'DELETE':
				break;
			default:
                $this->response(500, "Invalid Method");
            break;
		}
	}
	
	function service_items(){
		switch ($this->method) {
            case 'POST':
		  		$arr = json_decode($this->file, true);
                $categoryId = $arr['categoryId'];
				$serviceItemName = $arr['serviceItemName'];
				$serviceItemTime = $arr['serviceItemTime'];
				$serviceItemPrice = $arr['serviceItemPrice'];
		  		$result = $this -> dbConnect -> query("INSERT INTO service_item(service_category_id, service_item_name, service_item_duration, service_item_price) VALUES ('$categoryId','$serviceItemName','$serviceItemTime','$serviceItemPrice')");
    			
		  		$service_item;
    			if($result) {
    				// Cycle through results
    				$id = $this -> dbConnect -> insert_id;
    				$result = $this -> dbConnect -> query("SELECT * from service_item where service_item_id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
						  	$service_item = array (
								"serviceItemId" => $service_item_id,
                                "categoryId" => $service_category_id,
                                "serviceItemName" => $service_item_name,
								"serviceItemTime" => $service_item_duration,
								"serviceItemPrice" => $service_item_price
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_item);
				break;
			case 'GET':
				// Perform query
				$result = $this -> dbConnect -> query("SELECT * FROM service_item");
			
				$resultSet = array();
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$service_category_item = array (
							'serviceItemId' =>  $service_item_id,
							'categoryId' => $service_category_id,
							'serviceItemName'=> $service_item_name,
							'serviceItemTime' => $service_item_duration,
							'serviceItemPrice' => $service_item_price
						);
						array_push($resultSet, $service_category_item);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $resultSet);
				break;
			case 'PUT':
		  		$arr = json_decode($this->file, true);
		  		$serviceItemId = $arr['serviceItemId'];
                $categoryId = $arr['categoryId'];
				$serviceItemName = $arr['serviceItemName'];
				$serviceItemTime = $arr['serviceItemTime'];
				$serviceItemPrice = $arr['serviceItemPrice'];
		  		$result = $this -> dbConnect -> query("UPDATE service_item set service_category_id = '$categoryId', service_item_name = '$serviceItemName', service_item_duration = '$serviceItemTime', service_item_price = '$serviceItemPrice' where service_item_id = '$serviceItemId'");
    			
		  		$service_item;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from service_item where service_item_id = '$serviceItemId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
						  	$service_item = array (
								"serviceItemId" => $service_item_id,
                                "categoryId" => $service_category_id,
                                "serviceItemName" => $service_item_name,
								"serviceItemTime" => $service_item_duration,
								"serviceItemPrice" => $service_item_price
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_item);
				break;
			case 'DELETE':
		  		$serviceItemId = $_GET['id'];
			    $result = $this -> dbConnect -> query("DELETE FROM service_item where service_item_id = '$serviceItemId'");
		  
		  		$service_item;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from service_item where service_item_id = '$serviceItemId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
						  	$service_item = array (
								"serviceItemId" => $service_item_id,
                                "categoryId" => $service_category_id,
                                "serviceItemName" => $service_item_name,
								"serviceItemTime" => $service_item_duration,
								"serviceItemPrice" => $service_item_price
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $service_item);
				break;
			default:
                $this->response(500, "Invalid Method");
            break;
		}
	}
  
  function service_item_by_id(){
		switch ($this->method) {
            case 'POST':
				break;
			case 'GET':
				// Perform query
		  		$id = $_GET['id'];
				$result = $this -> dbConnect -> query("SELECT * FROM service_item where service_item_id = '$id'");
			
				$service_item;
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$service_item = array (
							'serviceItemId' =>  $service_item_id,
							'categoryId' => $service_category_id,
							'serviceItemName'=> $service_item_name,
							'serviceItemTime' => $service_item_duration,
							'serviceItemPrice' => $service_item_price
						);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $service_item);
				break;
			case 'PUT':
				break;
			case 'DELETE':
				break;
			default:
                $this->response(500, "Invalid Method");
            break;
		}
	}
	
	function users(){
	    switch ($this->method) {
            case 'POST':
				$arr = json_decode($this->file, true);
                $email = $arr['data']['email'];
    		    $password = $arr['data']['password'];
    			$result = $this -> dbConnect -> query("SELECT * FROM users where email = '$email' and password = '$password'");
    			$user = array();
    			if($result){
    				// Cycle through results
    				while ($row = $result -> fetch_assoc()){
    					extract($row);
    					$user = array (
    						'userName' =>  $user_id,
    						'email' => $email,
                            'firstName' => $first_name,
                            'lastName'=> $last_name
    					);
    				}
    				// Free result set
    				$result->close();
    			}
    			$error = null;
    			$data = array ();
    			if (!$user) {
    			    $error = 'Username or password is not correct!!!';
    			}
    			$data = array (
        	        'error' => $error,
        	        'user' => $user
    	        );
    			$this->response(200, $data);
                break;

            case 'GET':
		  		$result = $this -> dbConnect -> query("SELECT * FROM users");
			
				$resultSet = array();
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$user_item = array (
							'userId' =>  $user_id,
							'firstName' => $first_name,
							'lastName'=> $last_name,
							'email' => $email
						);
						array_push($resultSet, $user_item);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $resultSet);
				break;

            case 'PUT':
				break;

            case 'DELETE':
				break;

            default:
                $this->response(500, "Invalid Method");
				break;
        }
	}
  
  	function user(){
	    switch ($this->method) {
            case 'POST':
				$arr = json_decode($this->file, true);
		  		$email = $arr['email'];
                $firstName = $arr['firstName'];
    		    $lastName = $arr['lastName'];
    		    $password = $arr['password'];
    			$result = $this -> dbConnect -> query("INSERT INTO users(first_name, last_name, email, password) VALUES ('$firstName','$lastName','$email','$password')");
    			
    			$user;
    			if($result) {
    				// Cycle through results
    				$id = $this -> dbConnect -> insert_id;
    				$result = $this -> dbConnect -> query("SELECT * from users where user_id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$user = array (
                                "userId" => $user_id,
                                "firstName" => $first_name,
                                "lastName" => $last_name,
                                "email" => $email
        					);
        				}
    				}
    				// Free result set
    				$result->close();
    			}
    			$this->response(200, $user);
                break;

            case 'GET':
				$result = $this -> dbConnect -> query("SELECT * FROM users");
			
				$resultSet = array();
				if($result){
					// Cycle through results
					while ($row = $result -> fetch_assoc()){
						extract($row);
						$user_item = array (
							'userId' =>  $user_id,
							'firstName' => $first_name,
							'lastName'=> $last_name,
							'email' => $email
						);
						array_push($resultSet, $user_item);
					}
					// Free result set
					$result->close();
				}
				$this->response(200, $resultSet);
				break;

            case 'PUT':
		  		$arr = json_decode($this->file, true);
		  		$userId = $arr['userId'];
		  		$email = $arr['email'];
                $firstName = $arr['firstName'];
    		    $lastName = $arr['lastName'];
    			$result = $this -> dbConnect -> query("UPDATE users set first_name = '$firstName', last_name = '$lastName', email = '$email' where user_id = '$userId'");
    			
    			$user;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from users where user_id = '$userId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$user = array (
                                "userId" => $user_id,
                                "firstName" => $first_name,
                                "lastName" => $last_name,
                                "email" => $email
        					);
        				}
    				}
    				// Free result set
    				$result->close();
    			}
    			$this->response(200, $user);
				break;

            case 'DELETE':
		  		$userId = $_GET['id'];
			    $result = $this -> dbConnect -> query("DELETE FROM users where user_id = '$userId'");
		  
		  		$user;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from users where user_id = '$userId'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
						  	$user = array (
								"userId" => $user_id,
                                "firstName" => $first_name,
                                "lastName" => $last_name,
                                "email" => $email
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $user);
				break;

            default:
                $this->response(500, "Invalid Method");
				break;
        }
	}
	
	function order_services(){
	    switch ($this->method) {
            case 'POST':
				$arr = json_decode($this->file, true);
                $firstName = $arr['firstName'];
    		    $lastName = $arr['lastName'];
    		    $email = $arr['email'];
    		    $phone = $arr['phone'];
    		    $serviceName = $arr['serviceType'];
    		    $date = $arr['date'];
    		    $time = $arr['time'];
    		    $status = $arr['status'];
    			$result = $this -> dbConnect -> query("INSERT INTO order_service(first_name, last_name, email, phone, service_name, date, time, status) VALUES ('$firstName','$lastName','$email','$phone','$serviceName','$date','$time',$status)");
    			
    			$order_service = array();
    			if($result) {
    				// Cycle through results
    				$id = $this -> dbConnect -> insert_id;
    				$result = $this -> dbConnect -> query("SELECT * from order_service where id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$order_service = array (
                                "id" => $id,
                                "firstName" => $first_name,
                                "lastName" => $last_name,
                                "email" => $email,
                                "phone" => $phone,
                                "serviceType" => $service_name,
                                "date" => $date,
                                "time" => $time,
                                "status" => $status
        					);
        				}
    				}
    				// Free result set
    				$result->close();
    			}
    			$this->response(200, $order_service);
                break;
            case 'GET':
                // Perform query
			    $result = $this -> dbConnect -> query("SELECT * FROM order_service");
		
			    $resultSet = array();
			    if($result){
				    // Cycle through results
				    while ($row = $result -> fetch_assoc()){
					    extract($row);
					    $order_service_item = array (
						    "id" => $id,
                            "firstName" => $first_name,
                            "lastName" => $last_name,
                            "email" => $email,
                            "phone" => $phone,
                            "serviceType" => $service_name,
                            "date" => $date,
                            "time" => $time,
                            "status" => $status
					    );
					    array_push($resultSet, $order_service_item);
				    }
				    // Free result set
				    $result->close();
			    }
			    $this->response(200, $resultSet);
                break;

            case 'PUT':
				$arr = json_decode($this->file, true);
				$id = $arr['id'];
                $firstName = $arr['firstName'];
    		    $lastName = $arr['lastName'];
    		    $email = $arr['email'];
    		    $phone = $arr['phone'];
    		    $serviceName = $arr['serviceType'];
    		    $date = $arr['date'];
    		    $time = $arr['time'];
    		    $status = $arr['status'];
    			$result = $this -> dbConnect -> query("UPDATE order_service set first_name = '$firstName', last_name = '$lastName', email = '$email', phone = '$phone', service_name = '$serviceName', date = '$date', time = '$time', status = $status where id = '$id'");
    			
    			$order_service;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from order_service where id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$order_service = array (
                                "id" => $id,
                                "firstName" => $first_name,
                                "lastName" => $last_name,
                                "email" => $email,
                                "phone" => $phone,
                                "serviceType" => $service_name,
                                "date" => $date,
                                "time" => $time,
                                "status" => $status
        					);
        				}
    				}
    				// Free result set
    				$result->close();
    			}
    			$this->response(200, $order_service);
                break;

            case 'DELETE':
				break;

            default:
                $this->response(500, "Invalid Method");
				break;
        }
	}
	
	function order_service(){
	    switch ($this->method) {
            case 'POST':
                break;
            case 'GET':
                // Perform query
				$id = $_GET['id'];
			    $result = $this -> dbConnect -> query("SELECT * FROM order_service where id = '$id'");
		
			    $order_service_item;
			    if($result){
				    // Cycle through results
				    while ($row = $result -> fetch_assoc()){
					    extract($row);
					    $order_service_item = array (
						    "id" => $id,
                            "firstName" => $first_name,
                            "lastName" => $last_name,
                            "email" => $email,
                            "phone" => $phone,
                            "serviceType" => $service_name,
                            "date" => $date,
                            "time" => $time,
                            "status" => $status
					    );
				    }
				    // Free result set
				    $result->close();
			    }
			    $this->response(200, $order_service_item);
                break;

            case 'PUT':
                break;

            case 'DELETE':
				break;

            default:
                $this->response(500, "Invalid Method");
				break;
        }
	}

	function gallery(){
	    switch ($this->method) {
            case 'POST':
				$arr = json_decode($this->file, true);
                $photo = $arr['url'];
    			$result = $this -> dbConnect -> query("INSERT INTO gallery(photo) VALUES ('$photo')");
    			
    			$gallery = array();
    			if($result) {
    				// Cycle through results
    				$id = $this -> dbConnect -> insert_id;
    				$result = $this -> dbConnect -> query("SELECT * from gallery where id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
        					$gallery = array (
                                "id" => $id,
                                "photo" => $photo
        					);
        				}
    				}
    				// Free result set
    				$result->close();
    			}
    			$this->response(200, $gallery);
                break;
            case 'GET':
                // Perform query
			    $result = $this -> dbConnect -> query("SELECT * FROM gallery");
		
			    $resultSet = array();
			    if($result){
				    // Cycle through results
				    while ($row = $result -> fetch_assoc()){
					    extract($row);
					    $gallery_item = array (
						    "id" => $id,
                            "photo" => $photo
					    );
					    array_push($resultSet, $gallery_item);
				    }
				    // Free result set
				    $result->close();
			    }
			    $this->response(200, $resultSet);
                break;

            case 'PUT':
                break;

			case 'DELETE':
				$id = $_GET['id'];
			    $result = $this -> dbConnect -> query("DELETE FROM gallery where id = '$id'");
		  
		  		$gallery;
    			if($result) {
    				// Cycle through results
    				$result = $this -> dbConnect -> query("SELECT * from gallery where id = '$id'");
    				if ($result) {
        				while ($row = $result -> fetch_assoc()){
        					extract($row);
						  	$gallery = array (
								"id" => $id,
                                "photo" => $photo
        					);
        				}
    				}
    				// Free result set
				  	$result->close();
    			}
    			$this->response(200, $id);
				break;
				break;

            default:
                $this->response(500, "Invalid Method");
				break;
        }
	}
}

$user_api = new api();
?>
