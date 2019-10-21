function refefinir(){
    var email = email_validar.value;

    if(email == 'oi'){

        div_msg.innerHTML = '';

    } else {

        div_msg.innerHTML = '<span style="color: red">Preencha o campo e-mail</span>'
    }
}