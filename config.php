<?php

class config {
	var $dbConnect;

	function __construct(){
	}

	function __destruct() {
		$this->dbConnect->close();
	}
	
	function connectDB(){
		$this->dbConnect = mysqli_connect("fm6g2.myd.infomaniak.com", "fm6g2_tungtt1501", "Tung721119@", "fm6g2_mybeautyapp");
			if($this->dbConnect->connect_errno){
			return null; 
		} else {
			return $this->dbConnect;
		}
	}
}
?>