<?php
    session_start();
    if(isset($_SESSION['login']) != true)
        header("Location: login.html");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina Restrita </title>
</head>
<body style="background-Color:#6d1d21">
    <h1 style="color:#bf00ff"> Congratilation !!!<h1>
        <h3 style="color:rgb(0, 191, 255)"> Finalmente você chegou aqui! :) <h3>
</body>
</html>