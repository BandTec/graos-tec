var exibiu_grafico = false;



// verificar_autenticacao();


// só mexer se quiser alterar o tempo de atualização
// ou se souber o que está fazendo!
function atualizarGrafico() {
    obterDadosGrafico();
    setTimeout(atualizarGrafico, 10000);
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
            text: 'Histórico recente de temperatura e umidade'
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
                borderColor: window.chartColors.red,
                backgroundColor: window.chartColors.red,
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
                borderColor: window.chartColors.blue,
                backgroundColor: window.chartColors.blue,
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
                    dado_umidade.innerHTML = `Média: ${registro.umidade}`;
                    dados1.datasets[0].data.push(registro.umidade);
                    
                    
                    var limites = { 
                 
                        max_umidade: 20,
                        emergencia_alta: 18,
                        alerta_alto: 16,
                        alerta_baixo: 10,
                        emergencia_baixa: 8,
                        min_umidade: 6,            
                    };
                    
                    var mensagem;
                    if (registro.umidade > limites.max_umidade) {
                        mensagem = 'Umidade alta demais! <br>';
                        alerta_umidade.style.color = 'red';
                    }

                    else if (registro.umidade > limites.emergencia_alta){
                        mensagem = 'Umidade alta! <br>';
                        alerta_umidade.style.color = 'orange';
                    }

                    else if (registro.umidade > limites.alerta_alto){
                        mensagem = 'Umidade ficando alta! <br>';
                        alerta_umidade.style.color = 'yellow';
                    }

                    else if (registro.umidade < limites.emergencia_baixa){
                        mensagem = 'Umidade baixa! <br>';
                        alerta_umidade.style.color = 'orange';
                    }
                   
                    else if (registro.umidade < limites.alerta_baixo){
                        mensagem = 'Umidade ficando baixa! <br>';
                        alerta_umidade.style.color = 'yellow';
                    }

                    else if (registro.umidade < limites.min_umidade) {
                        mensagem = 'Umidade baixa demais! <br>';
                        alerta_umidade.style.color = 'red';
                    }

                    else{
                        mensagem = 'Umidade estável ideal... <br>';
                        alerta_umidade.style.color = 'green';
                    }
                            
                    alerta_umidade.innerHTML = mensagem;
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
                      
                        dados.labels.push(registro.momento_grafico);
                        dado_temp.innerHTML = `Média: ${registro.temperatura}`
                        dados.datasets[0].data.push(registro.temperatura);
                      
                        var limites = { 
                            max_temperatura: 24,
                            emergencia_alta: 22,
                            alerta_alto: 20,
                            alerta_baixo: 12,
                            emergencia_baixa: 10,
                            min_temperatura: 8,  
                        };
                
                        var mensagem;
                        if (registro.temperatura > limites.max_temperatura) {
                            mensagem = 'Temperatura alta demais! <br>';
                            alerta_temp.style.color = 'red';
                        }
    
                        else if (registro.temperatura > limites.emergencia_alta){
                            mensagem = 'Temperatura alta! <br>';
                            alerta_temp.style.color = 'orange';
                        }
    
                        else if (registro.temperatura > limites.alerta_alto){
                            mensagem = 'Temperatura ficando alta! <br>';
                            alerta_temp.style.color = 'yellow';
                        }
    
                        else if (registro.temperatura < limites.emergencia_baixa){
                            mensagem = 'Temperatura baixa! <br>';
                            alerta_temp.style.color = 'orange';
                        }
                       
                        else if (registro.temperatura < limites.alerta_baixo){
                            mensagem = 'Temperatura ficando baixa! <br>';
                            alerta_temp.style.color = 'yellow';
                        }
    
                        else if (registro.temperatura < limites.min_temperatura) {
                            mensagem = 'Temperatura baixa demais! <br>';
                            alerta_temp.style.color = 'red';
                        }
    
                        else{
                            mensagem = 'Temperatura estável ideal... <br>';
                            alerta_temp.style.color = 'green';
                        }
                    
                                
                        alerta_temp.innerHTML = mensagem;
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

