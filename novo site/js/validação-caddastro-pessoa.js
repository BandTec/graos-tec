function validacao_cadastro_pessoal(){
    valida_nome.innerHTML = "";
    valida_email.innerHTML = "";
    valida_senha.innerHTML = "";
    valida_confirmacao_senha.innerHTML = "";
    valida_telefone.innerHTML = "";

    var nome = valor_nome.value;
    var email = valor_email.value;
    var senha1 = valor_senha1.value;
    var senha2 = valor_senha2.value;
    var telefone = valor_telefone.value;

    if(nome == "" || email == "" || email.indexOf ("@") ==-1 || telefone == "" || telefone.length <2 || senha1.length <=8 || senha1.length >=19 
    || senha1 == senha2 || senha2 == ""){
        if(nome == ""){
            valida_nome.style.color = 'red';
            valida_nome.innerHTML = `Nome Inválido`;
        }
        if(email == "" || email.indexOf ("@") == -1){
            valida_email.style.color = 'red';
            valida_email.innerHTML = `Email Inválido`;
        }
        if(telefone == "" || telefone.length <=9 || telefone.length >11){
            valida_telefone.style.color = 'red';
            valida_telefone.innerHTML = `Telefone Inváldio`;
        }
        if(senha1.length <=8 || senha1.length >=19){
            valida_senha.style.color = 'red';
            valida_senha.innerHTML = `Senha Invílida`;
        }
        if(senha1 != senha2){
            valida_confirmacao_senha.style.color = 'red';
            valida_confirmacao_senha.innerHTML = `Senha não esta igual`;
        }
    }else{
        location.href = `../corpo/DashBoard.html`;
    }
}