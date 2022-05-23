/* window.onload = () => {
    const formulario = document.getElementsByTagName("form")[0];
    const nome = document.getElementById("usuario");
    const senha = document.getElementById("Senha");
    
    formulario.onsubmit = (evento) => 
    {
          evento.preventDefault();
  
      if(nome.value == "" && senha.value == "" ){
        alert("Campos Obrigatorios !!!");
        nome.focus();
        senha.focus();
        return false;
      }
      
      else if(nome.value != "Administrador" || senha.value != 123 )
      {
        alert("Somente Usuario Administrador");
        nome.focus();
        senha.focus();
        return false;
      } */
  
      /* else 
      {
        header("Location: Restrito.php");
      }
   */
  
  
      //  formulario.submit();
          
      /* const formdata = new FormData(formulario);
  
      fetch("login.php", 
          {
                "body": formdata,
                "method": formulario.getAttribute("method")
          }).then((resposta) => 
          {
              resposta.text();
          }).then((texto) => 
          {
              console.log(texto);
          }); */
    //};
 // };
  