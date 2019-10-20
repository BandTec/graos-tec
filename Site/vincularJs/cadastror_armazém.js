function validacao(){
    var nome = nome_validacao.value;
    var lagura = Number(lagura_validacao.value);
    var altura = Number(altura_validacao.value);
    var volume = Number(volume_validacao.value);

    if(nome == "" || nome.length < 20){
        mensagem_nome.innerHTML = `<span style="color: #a30f0f;"> Preencha o campo <b>Nome</b></span>`;
    }
    if(lagura == "" || lagura.length < 3){
        mensagem_largura.innerHTML = `<span style="color: #a30f0f;"> Preencha o campo <b>Lagura</b></span>`;
    }
    if(altura == "" || altura.length < 3){
        mensagem_altura.innerHTML = `<span style="color: #a30f0f;"> Preencha o campo <b>Altura</b></span>`;
    }
    if(volume == "" || volume.length < 3){
        mensagem_volume.innerHTML = `<span style="color: #a30f0f;"> Preencha o campo <b>volume</b></span>`;
    }else{
        alert(`Você esta cadastrador`);
    }
}
