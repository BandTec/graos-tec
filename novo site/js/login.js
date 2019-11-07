function entrar(){
    var login_valor = usuario_validar.value;
    var senha_valor = senha_validar.value;


    if(login_valor == ''){

        div_validar_login.innerHTML = '<span style="color: red">preencha campo usuario</span>';
    }
    else

    if(login_valor == 'graos@tech.com'){

        div_validar_login.innerHTML = '<span style="color: darkgreen">login válido</span>';

    } else {

        div_validar_login.innerHTML = '<span style="color: red">login inválido</span>';
    }


    if(senha_valor == ''){
        
        div_validar_senha.innerHTML = '<span style="color: red">preencha campo senha</span>';
    }    
     else if(senha_valor == '1234'){

        div_validar_senha.innerHTML = '<span style="color: darkgreen">senha válida</span>';

    } else {

        div_validar_senha.innerHTML = '<span style="color: red">senha inválida</span>';
    }

}