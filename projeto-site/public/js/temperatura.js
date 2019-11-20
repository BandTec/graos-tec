    	var context = document.getElementById("chart").getContext("2d");
		context.canvas.width = 1000;
		context.canvas.height = 300;
        
        var configuration = {
			type: 'line',
			data: {
				datasets: [{
					label: "Temperature x Time",
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
							labelString: 'Temperature'
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
        

        
		var chart = new Chart(context, configuration);

        this.lastIndexTemp = 0;
        this.time = 0;

        function get_data(){

            var http = new XMLHttpRequest();
            http.open('GET', 'http://localhost:3000/api/temperature', false);
            http.send(null);        
			
            var obj = JSON.parse(http.responseText);

            if (obj.data.length == 0){
                return;
            }

            var _lastIndexTemp = this.lastIndexTemp;
            this.lastIndexTemp = obj.data.length;
            listTemp = obj.data.slice(_lastIndexTemp);

            listTemp.forEach(data => {
                if (chart.data.labels.length == 10 && chart.data.datasets[0].data.length == 10){
                    chart.data.labels.shift();
                    chart.data.datasets[0].data.shift();
                }

                chart.data.labels.push(this.time++);
                chart.data.datasets[0].data.push(parseFloat(data));
                chart.update();
			});
			
			document.getElementById('average').textContent = obj.average
		} 
		
		get_data();

        setInterval(() => {
            get_data();
        }, 1000);