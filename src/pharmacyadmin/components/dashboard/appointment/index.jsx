import React from 'react';
import ReactApexChart from "react-apexcharts";

const Appointments =()=>  {
  const salesChartData ={ 
    
    series: [{
        name: 'Video Call',
        type: "column",
        data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3, 2, 3.5, 5, 2]
      }, {
        name: "Audio call",
        type: "column",
        data: [3, 3, 2, 3, 1.5, 1, 3, 2, 3, 1.5, 2, 3]
      }, {
        
        name: "Chat",
        type: "column",
        data: [4.5, 3.8, 2.5, 3, 4.5, 3, 4.5, 3, 4, 5, 1.5, 2]

      }],
      options: {
        colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
        chart: {
            type: 'bar',
            fontFamily: 'Poppins, sans-serif',
            height: 350,
            toolbar: {
                show: false
            }
        },
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
            },
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
         },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + "k"
                }
            },
            axisBorder: {
                show: true,
            },
        },
        fill: {
          opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "k"
                }
            }
        }
      },
}
    
  
    return (
      
             <div className="col-xl-7 d-flex">
								<div className="card flex-fill">
								<div className="card-header">
									<div className="row align-items-center">
									<div className="col">
										<h5 className="card-title">Revenue</h5>
									</div>
								
									</div>
								</div>
								<div className="card-body">
                <div id="sales_chart">
               <ReactApexChart options={salesChartData.options} series={salesChartData.series} type="bar" height={350} />
            </div>
								</div>
								</div>
							</div>
    )
  
};

export default Appointments;