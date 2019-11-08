function entrar(){
    div_validar_email.innerHTML = "";
    div_validar_senha.innerHTML = "";

    var email = email_validar.value;
    var senha = senha_validar.value;

    if(senha.length <=8 || senha.length >=19 || email.length <=10 || email.length >=40 || email.indexOf ("@") == -1 || email == "" ||
    senha == ""){
    if(senha.length <=8 || senha.length >=19){
        div_validar_senha.style.color = 'red';
        div_validar_senha.innerHTML = `Senha Inválida`; 
            if(senha == ""){
                div_validar_senha.style.color = 'red';
                div_validar_senha.innerHTML = `Senha vazia`; 
            }
        }
    if(email.length <=10 || email.length >=40 || email.indexOf ("@") == -1){
        div_validar_email.style.color = 'red';
        div_validar_email.innerHTML = `Senha Inválida`; 
            if(email == ""){
                div_validar_email.style.color = 'red';
                div_validar_email.innerHTML = `E-mail vazio`; 
            }
        }
    }else{
        location.href = `./DashBoard.html`;
    }   
}