 function validacao(){
        var grao = grao_validacao.value;
        var temperatura = temperatura_validacao.value;
        var umidade = umidade_validacao.value;

    if(grao == "" || grao.length <3) {
        mensagem_grao.innerHTML += `<span style="color: #a30f0f;"> Preencha o campo <b>Grão</b></span>`;
    }
    if(temperatura == "" || temperatura.length <3)  { /*3 pq são 4 digitos Exp:30.00 graus C*/
        mensagem_temperatura.innerHTML += `<span style="color: #a30f0f;"> Preencha o campo <b>Temperatura</b></span>`;
    }
    if(umidade == "" || umidade.length < 3) { /*3 pq são 4 digitos Exp:30.00 UR*/
        mensagem_umidade.innerHTML += `<span style="color: #a30f0f;"> Preencha o campo <b>Umidade</b></span>`;
    }
    else{
        alert(`Você esta cadastrador`);
    }
 }
