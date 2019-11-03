    var context2 = document.getElementById("chart2").getContext("2d");
    context2.canvas.width = 1000;
    context2.canvas.height = 300;
    
    var configuration2 = {
        type: 'line',
        data: {
            datasets: [{
                label: "Humidity x Time",
                type: 'line',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    //type: 'value',
                    distribution: 'series',
                    ticks: {
                        beginAtZero:true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Humidity'
                    },
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    };
    
    var chart2 = new Chart(context2, configuration2);

    //Função para obter os dados de temperatura do server
    //Seria mais interessante fazer isso com WebSocket, porém para fins academicos, os dados serão atualizados via HTTP
    
    //Esse atributo dentro do contexto serve para saber qual foi o último índice processado, assim eliminado os outros elementos na
    //hora de montar/atualizar o gráfico
    this.lastIndexTemp2 = 0;
    this.time2 = 0;

    function get_data2(){

        var http2 = new XMLHttpRequest();
        http2.open('GET', 'http://localhost:3000/api/humidity', false);
        http2.send(null);        
        
        var obj2 = JSON.parse(http2.responseText);

        if (obj2.data.length == 0){
            return;
        }

        var _lastIndexTemp2 = this.lastIndexTemp2;
        this.lastIndexTemp2 = obj2.data.length;
        listTemp2 = obj2.data.slice(_lastIndexTemp2);

        listTemp2.forEach(data => {
            //Máximo de 60 itens exibidos no gráfico
            if (chart2.data.labels.length == 10 && chart2.data.datasets[0].data.length == 10){
                chart2.data.labels.shift();
                chart2.data.datasets[0].data.shift();
            }

            chart2.data.labels.push(this.time2++);
            chart2.data.datasets[0].data.push(parseFloat(data));
            chart2.update();
        });
        
        document.getElementById('average2').textContent = obj2.average2
    } 
    
    

    get_data2();

    setInterval(() => {
    get_data2();
    }, 1000);