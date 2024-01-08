<?php
    $NAME = $_POST['NAME'];
    $EMAIL = $_POST['EMAIL'];
    $SUBJECT = $_POST['SUBJECT'];
    $MESSAGE = $_POST['MESSAGE'];

    $conn = new mysqli('localhost', 'root', '', 'PORTFOLIO');
    if($conn->connect_error){
        die("Connection Failed: " .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into portfolio(NAME, EMAIL, SUBJECT, MESSAGE) values (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $NAME, $EMAIL, $SUBJECT, $MESSAGE);
        $stmt->execute();
        // echo "Registation successfully";
        $stmt->close();
        $conn->close();
    }
?>