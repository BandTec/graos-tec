function entrar(){
    var login = login_validar.value;
    var senha = senha_validar.value;

    if(login == 'graos@tech.com'){

        div_frase.innerHTML = '<span style="color: darkgreen">login válido</span>';

    } else {

        div_frase.innerHTML = '<span style="color: red">login inválido</span>';
    }

    if(senha == '1234'){

        div_mensagem.innerHTML = '<span style="color: darkgreen">senha válida</span>';

    } else {

        div_mensagem.innerHTML = '<span style="color: red">senha inválida</span>';
    }



}