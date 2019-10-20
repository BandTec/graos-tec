
function calcular(){
    var ton = Number(txb_tonelada.value);
    var preco = Number(txb_preco_tonelada.value);
    var toneladas_perdidas;
    var dinheiro_perdido;
      
      toneladas_perdidas = ton * 0.056;
      
      dinheiro_perdido = toneladas_perdidas * preco;


      if (toneladas_perdidas < 1){

          toneladas_perdidas *= 1000;

         escrever_perda.innerHTML = `O desperdicio foi de ${toneladas_perdidas.toFixed(2)} quilogramas e com isso se perdeu  R$ ${dinheiro_perdido.toFixed(2)}`;

      }
      
      else{
      escrever_perda.innerHTML = `O desperdidicio foi de ${toneladas_perdidas.toFixed(2)} toneladas e com isso se perdeu R$ ${dinheiro_perdido.toFixed(2)}`;
      }

}

/* 
ton = pega valor em toneladas (safra anual)

preco = preço de toneladas vendidas

toneladas_perdidas = é a própria operação com base no valor constante de 5,6% (0.056 no código) de toneladas perdidas em média

dinheiro_perdido = é o dinheiro perdido com base nas toneladas_perdidas

if (se) = se a quantidade de toneladas perdidas for menor que 1 a frase exibida será em quilogramas (com base no calculo)

else (se não) = frase padrão para perda em toneladas.
*/