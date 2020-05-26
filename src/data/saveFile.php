<?php

if(isset($_POST)) {
    header('Content-type: application/json');
    $file = "list.json";
    $postdata = file_get_contents("php://input");
    $json = json_decode(file_get_contents($file), true);

    file_put_contents($file, $postdata);
    echo true;
}


?>