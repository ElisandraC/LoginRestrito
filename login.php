<?php
    session_start();
    extract($_POST);
    
    if($login == "Administrador" && $senha == "123"){
        $_SESSION['login'] = [
            'nome' => $login,
            'senha' => $senha
        ];
        header("Location: restrito.php");
    
    }
    
    else
    {
        echo "Usuário e senha inválidos";
    }

?>