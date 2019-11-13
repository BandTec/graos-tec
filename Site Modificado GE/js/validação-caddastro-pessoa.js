function validacao_cadastro_pessoal(){
    valida_nome.innerHTML = "";
    valida_email.innerHTML = "";
    valida_senha.innerHTML = "";
    valida_confirmacao_senha.innerHTML = "";
    valida_telefone.innerHTML = "";

    valida_cep.innerHTML = "";
    valida_numero.innerHTML = "";
    valida_bairro.innerHTML = "";
    valida_cidade.innerHTML = "";
    valida_estado.innerHTML = "";

    var nome = valor_nome.value;
    var email = valor_email.value;
    var senha1 = valor_senha1.value;
    var senha2 = valor_senha2.value;
    var telefone = valor_telefone.value;

    var cep = valor_cep.value;
    var numero = valor_numero.value;
    var bairro = valor_bairro.value;
    var cidade = valor_cidade.value;
    var estado = valor_estado.value;

    if(nome == "" || nome.length >=30 || nome.length <=2 || email.length <=10 || email.length >=40 || email.indexOf ("@") == -1 || email == "" ||
    telefone == "" || telefone.length <9 || telefone.length >11 || senha1 == "" || senha1.length <=8 || senha1.length >=19 || 
    senha1 != senha2 || senha2 == "" || cep.length <=7 || cep.length >=9 || cep == "" || numero.length >6 || numero.length <=1 || numero == "" ||
    bairro.length >20 || bairro.length <3 || bairro == "" || cidade.length >20 || cidade.length <3 || cidade == "" || estado.length >20 || estado.length <3 ||
    estado == ""){
        
        if(estado.length >20 || estado.length <3){
            valida_estado.style.color = "red";
            valida_estado.innerHTML = "Estado Inválido";
                if(estado == ""){
                    valida_estado.style.color= "red";
                    valida_estado.innerHTML = "Estado vazio";
                }
            }

        if(cidade.length >20 || cidade.length <3){
            valida_cidade.style.color = "red";
            valida_cidade.innerHTML = "Cidade Inválida";
                if(cidade == ""){
                    valida_cidade.style.color = "red";
                    valida_cidade.innerHTML = "Cidade vazia";
                }
            }

        if(bairro.length >20 || bairro.length <3){
            valida_bairro.style.color = "red";
            valida_bairro.innerHTML = "Bairro Inválido";
                if(bairro == ""){
                    valida_bairro.style.color = "red";
                    valida_bairro.innerHTML = "Bairro vazio";
                }
            }

        if(numero.length >6 || numero.length <=1){
            valida_numero.style.color = "red";
            valida_numero.innerHTML = "Numero Inválido";
                if(numero == ""){
                    valida_numero.style.color = "red";
                    valida_numero.innerHTML = "Numero vazio";
                }
            }

        if(cep.length <=7 || cep.length >=9){
            valida_cep.style.color = "red";
            valida_cep.innerHTML = "Cep Inválido";
                if(cep == ""){
                    valida_cep.style.color = "red";
                    valida_cep.innerHTML = "Cep vazio";
                }
            }

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

        if(telefone.length <=9 || telefone.length >11){
            valida_telefone.style.color = 'red';
            valida_telefone.innerHTML = `Telefone inválido`;
                if(telefone == ""){
                    valida_telefone.style.color = 'red';
                    valida_telefone.innerHTML = `Telefone vazio`;
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

