var exibiu_grafico = false;



// verificar_autenticacao();


// só mexer se quiser alterar o tempo de atualização
// ou se souber o que está fazendo!
function atualizarGrafico() {
    obterDadosGrafico();
    setTimeout(atualizarGrafico, 1000);
}

// altere aqui as configurações do gráfico
// (tamanhos, cores, textos, etc)
function configurarGrafico() {
    var configuracoes = {
        responsive: true,
        animation: exibiu_grafico ? false : {duration: 1500},
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            // text: 'Histórico recente de temperatura e umidade'
        },
        scales: {
            yAxes: [{
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
                id: 'y-temperatura',
            }, {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'right',
                id: 'y-umidade',

                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
        }
    };

    exibiu_grafico = true;

    return configuracoes;
}

// altere aqui como os dados serão exibidos
// e como são recuperados do BackEnd
function obterDadosGrafico() {

    // neste JSON tem que ser 'labels', 'datasets' etc, 
    // porque é o padrão do Chart.js
    var dados = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: window.chartColors.orange,
                backgroundColor: window.chartColors.orange,
                fill: false,
                data: []
            }
        ]
    };
    var dados1 = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-umidade',
                label: 'Umidade',
                borderColor: window.chartColors.green,
                backgroundColor: window.chartColors.green,
                fill: false,
                data: []
            }
        ]
    };


    fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {

                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();


               

                for (i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];
                
                    // aqui, após 'registro.' use os nomes 
                    // dos atributos que vem no JSON 
                    // que gerou na consulta ao banco de dados
                    dados1.labels.push(registro.momento_grafico);
                    dado_umidade.innerHTML = `Média: ${registro.umidade_atual}`;
                    dados1.datasets[0].data.push(registro.umidade_atual);
                    
                    
                    var limites = { 
                 
                        max_umidade: 20,
                        emergencia_alta: 18,
                        alerta_alto: 16,
                        alerta_baixo: 12,
                        emergencia_baixa: 10,
                        min_umidade: 6,            
                    };
                    
                    var mensagem;
                    if (registro.umidade_atual < 6) {
                        alerta_umidade.style.backgroundColor = 'red';
                    }

                    else if (registro.umidade_atual > 20){
                        alerta_umidade.style.backgroundColor = 'red';
                    }
                                // entre 12 e 10 
                    else if (registro.umidade_atual < 10){
                        alerta_umidade.style.backgroundColor = 'orange';
                    }
                                        
                    else if (registro.umidade_atual > 18){
                        alerta_umidade.style.backgroundColor = 'orange';
                    }

                    else if (registro.umidade_atual < 12){
                        alerta_umidade.style.backgroundColor = 'yellow';
                    }

                    else if (registro.umidade_atual > 16) {
                        alerta_umidade.style.backgroundColor = 'yellow';
                    }

                    else{
                        alerta_umidade.style.backgroundColor = 'green';
                    }
                            
                }
                
                console.log(JSON.stringify(dados1));

                //alertar(resposta.umidade);
                plotarGrafico(dados1);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })


        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
        
        fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
    
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
    
                    resposta.reverse();
    
                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                    
                        // aqui, após 'registro.' use os nomes 
                        // dos atributos que vem no JSON 
                        // que gerou na consulta ao banco de dados
                        registro.temperatura_atual = 22;
                        dados.labels.push(registro.momento_grafico);
                        dado_temp.innerHTML = `Média: ${registro.temperatura_atual}`
                        dados.datasets[0].data.push(registro.temperatura_atual);
                      
                        var limites = { 
                            max_temperatura: 24,
                            emergencia_alta: 22,
                            alerta_alto: 20,
                            alerta_baixo: 12,
                            emergencia_baixa: 10,
                            min_temperatura: 8,  
                        };
                
                        var mensagem;
                        if (registro.temperatura_atual > 24) {
                            alerta_temp.style.backgroundColor = 'red';
                        }
    
                        else if (registro.temperatura_atual < 8){
                            alerta_temp.style.backgroundColor = 'red';
                        }
    
                        else if (registro.temperatura_atual > 22){
                            alerta_temp.style.backgroundColor = 'orange';
                        }

                        else if (registro.temperatura_atual < 10){
                            alerta_temp.style.backgroundColor = 'orange';
                        }

                        else if (registro.temperatura_atual > 18){
                            alerta_temp.style.backgroundColor = 'yellow';
                        }

                        else if (registro.temperatura_atual < 14) {
                            alerta_temp.style.backgroundColor = 'yellow';
                        }
    
                        else{
                            alerta_temp.style.backgroundColor = 'green';
                        }
                    }
                    console.log(JSON.stringify(dados));
    
                   // alertar(resposta.temperatura);
                    plotarGrafico2(dados);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });

        

}

// só altere aqui se souber o que está fazendo!
function plotarGrafico(dados1) {
    console.log('iniciando plotagem do gráfico...');

    var ctx = chart2.getContext('2d');
    window.grafico_linha = Chart.Line(ctx, {
        data: dados1,
        options: configurarGrafico()
    });
}

function plotarGrafico2(dados) {
    console.log('iniciando plotagem do gráfico...');

    var ctx = chart.getContext('2d');
    window.grafico_linha = Chart.Line(ctx, {
        data: dados,
        options: configurarGrafico()
    });
}

configurarGrafico()
atualizarGrafico()

