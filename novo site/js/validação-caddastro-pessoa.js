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
    var telefone = Number(valor_telefone.value);

    if(nome == "" || nome.length >=20 || nome.length <=2 || email.length <=10 || email.length >=40 || email.indexOf ("@") == -1 || email == "" ||
    telefone == "" || telefone.length <2 || telefone.length >11 || senha1 == "" || senha1.length <=8 || senha1.length >=19 || 
    senha1 == senha2 || senha2 == ""){
        
        if(nome.length >=30 || nome.length <=2){
            valida_nome.style.color = 'red';
            valida_nome.innerHTML = `Campo Inválido`;
                if(nome == ""){
                valida_nome.style.color = 'red';
                valida_nome.innerHTML = `Nome vazio`;
            }
        }

        if(email.length <=10 || email.length >=40 || email.indexOf ("@") == -1){
            valida_email.style.color = 'red';
            valida_email.innerHTML = `Campo inválido`;
                if(email == ""){
                valida_email.style.color = 'red';
                valida_email.innerHTML = 'Email vazio';
            }
        }

        if(telefone == ""){
            valida_telefone.style.color = 'red';
            valida_telefone.innerHTML = `Telefone vazio`;
                if(telefone.length <=9 || telefone.length >11){
                    valida_telefone.style.color = 'red';
                    valida_telefone.innerHTML = `Telefone inválido`;
                }
        }
        if(senha1.length <=8 || senha1.length >=19){
            valida_senha.style.color = 'red';
            valida_senha.innerHTML = `Senha Invílida`;
                if(senha1 == ""){
                    valida_senha.style.color = 'red';
                    valida_senha.innerHTML = `Senha Vazia`
                }
        }
        if(senha1 != senha2){
            valida_confirmacao_senha.style.color = 'red';
            valida_confirmacao_senha.innerHTML = `Senha não esta igual`;
                if(senha2 == ""){
                    valida_confirmacao_senha.style.color = 'red';
                    valida_confirmacao_senha.innerHTML = "Senha vazia";
                }
        }
    }else{
            /*Fazer a programção do banco aqui*/
        location.href = `../corpo/DashBoard.html`;
    }
}