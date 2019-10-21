function redefinir(){
    var email = email_validar.value;

    if(email.endsWith('@graostech.com')){

        div_msg.innerHTML = '<span style="color: darkgreen">Aguarde um código para recuperação</span>';

    } else {

        div_msg.innerHTML = '<span style="color: red">Seu e-mail não está cadastrado</span>'
    }

    if(email == ''){

        div_msg.innerHTML = '<span style="color: red">Preencha o campo e-mail</span>'
    }
}