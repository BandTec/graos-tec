function Ir(){
    div_recupera.innerHTML = "";

    var email = valor_email.value;

    if(email.length <=10 || email.length >=40 || email.indexOf ("@") == -1){
    div_recupera.style.color = "red";
    div_recupera.innerHTML = "Email Inválido";
        if(email == ""){
            div_recupera.style.color = "red";
            div_recupera.innerHTML = "Email vazio"; 
        }
    }else{
        location.href = `login.html`;
    }
}