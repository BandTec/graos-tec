/*
*Script cadastro pessoal
*/

function validacao(){
    var nome = nome_validar.value;
    var cpf =(cpf_validar.value);
    var email = email_validar.value;
    var senhaum = senhaum_validar.value;
    var senhadois = senhadois_validar.value;
    var telefone = telefone_validar.value;

    //começo da validação do "cadastrar-se"

    if(nome == "" || nome.length <6 ){
        mensagem_nome.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>nome</b> com o minimo de carateres`;

    }
    if(email == "" || email.indexOf ('@') ==-1 ){
        mensagem_email.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo<b>email</b> com o minimo de carateres` ;
            
    }
    if(cpf == "" || cpf.length  <11 ){
        mensagem_cpf.innerHTML = `<span style = "color:#a30f0f">  Preencha o campo <b>CPF</b>com o minimo de carateres.` ;
            
    }
    if(telefone == "" || telefone.length < 9){
        mensagem_telefone.innerHTML = `<span style = "color:#a30f0f">  Preencha o campo <b>Tefefone</b> com o minimo de carateres. `;
            
    }
    if(senhaum == ""|| senhaum.length <5){
        mensagem_senha.innerHTML = ` <span style = "color:#a30f0f">  Preencha o campo <b>senha</b> com o minimo de carateres`;
    }
        
    if(senhaum != senhadois ){
            mensagem_senha.innerHTML = `<span style = "color:#a30f0f"> as senhas não podem ser divergentes`
    }
    //Final da validação do "cadastrar-se"
    
    // Começo da validação "endereço"
    var cep = cep_validar.value
    var rua = rua_validar.value
    var cidade = cidade_validar.value
    var estado = estado_validar.value
    var numero = numero_validar.value
    

    if(cep == "" || cep.length < 8   ){
        mensagem_cep.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>rua</b> com o minimo de carateres`;
    }
    if(rua == ""){
        mensagem_rua.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>rua</b> com o minimo de carateres`
    }
    if(cidade == ""){
        mensagem_cidade.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b> cidade</b> com o minimo de carateres`
    }
    if(estado == ""){
        mensagem_estado.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>estado</b> com o minimo de carateres`
    }
    if(numero == "" || numero.length <1){
        mensagem_numero.innerHTML = `<span style = "color:#a30f0f"> Preencha o campo <b>nume..</b> com o minimo de carateres`
    }
     // Começo da validação "endereço"
    else{
        alert(`Você está cadastrado`)
    }
        
}




