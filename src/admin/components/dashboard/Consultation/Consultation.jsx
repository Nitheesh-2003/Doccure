import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Select from "react-select";

const Consultation = () => {
	
  const options = [
    { value: "This Week", label: "This Week" },
    { value: "This Month", label: "This Month" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const salesChartData = {
    colors: ["#0CE0FF", "#1B5A90", "#EEF1FE"],
    series: [
      {
        name: "Scheduled Appointment",
        data: [1.6, 1.6, 1.5],
      },
      {
        name: "Doctors Available Now",
        data: [4, 2, 1.8],
      },
      {
        name: "Home Visits",
        data: [9, 4, 6],
      },
    ],
    options: {
      colors: ["#0CE0FF", "#1B5A90", "#EEF1FE"],
      chart: {
        height: 165,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30px",
        },
      },
      grid: {
        padding: {
          left: -15,
          right: 0,
        },
        show: false,
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["09:00", "10:00", "11:00"],
        axisBorder: {
          show: true,
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
        labels: {
          offsetX: 0,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "€ " + val + "k";
          },
        },
      },
    },
  };

  const statusChartData = {
    series: [650, 250],

    options: {
      colors: ["#0CE0FF", "#1B5A90"],
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            labels: {
              show: true,
              total: {
                show: false,
              },
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      chart: {
        fontFamily: "Poppins, sans-serif",
        height: 194,
        type: "donut",
      },
      labels: ["Completed", "Cancelled"],
      legend: { show: true, position: "bottom", horizontalAlign: "left" },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="col-xl-4 col-md-6">
      <div className="row">
        <div className="col-md-6 pe-md-0">
          <div className="card cons-card mb-3">
            <h6>Consultaion Today</h6>
            {/* <div id="income-month" /> */}
            <div id="income-month">
              <ReactApexChart
                options={salesChartData.options}
                series={salesChartData.series}
                type="bar"
                height={165}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card pat-card mb-1">
            <div className="card-body">
              <p>New Patients</p>
              <h3>45</h3>
              <p className="trade-level mb-0">
                <span className="text-danger me-1">
                  <i className="fas fa-caret-down me-1" />
                  1.15%
                </span>{" "}
                last week
              </p>
            </div>
          </div>
          <div className="card pat-card mb-3">
            <div className="card-body">
              <p>Old Patients</p>
              <h3>45</h3>
              <p className="trade-level mb-0">
                <span className="text-success me-1">
                  <i className="fas fa-caret-up me-1" />
                  9.5%
                </span>{" "}
                last week
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Appointment Status</h5>
                </div>
                <div className="col-auto select-option">
                  <Select
                    className="select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={"This Week"}
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  {/* <div id="status_chart" /> */}
                  <div id="status_chart">
                    <ReactApexChart
                      options={statusChartData.options}
                      series={statusChartData.series}
                      type="donut"
                      height={194}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="app-status">
                    <p>Completed Appointment</p>
                    <h6 className="text-primary">650</h6>
                    <p>Cancelled Appointment</p>
                    <h6>250</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
