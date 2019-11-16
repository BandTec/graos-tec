function entrar(){
   var Email = formuser.Email.value;
   var Senha = formuser.Senha.value;

   

    if(Senha.length <=8 || Senha.length >=19 || Email.length <=10 || Email.length >=40 || Email.indexOf ("@") == -1 || Email == "" ||
    Senha == ""){


        if(Email.length <12 || Email.length >40||Email == "" || Email.indexOf ('@') == -1 ){
            alert('Campo "e-mail" inválido');
            formuser.Email.focus();
            return false;
        }

        if(Senha == "" || Senha.length <8 ){
            alert('Campo "Senha" inválido');
            formuser.Senha.focus();
            return false;
        }location.href = `./DashBoard.html`;
    }   
}