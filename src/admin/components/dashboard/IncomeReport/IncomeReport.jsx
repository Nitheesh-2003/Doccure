import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import Select from 'react-select';

const IncomeReport = () => {

  const options = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Weekly', label: 'Weekly' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const salesChartData = {
    series: [
      {
        name: "Video Call",
        data: [0, 1, 1.5, 3.5, 2],
      },
      {
        name: "Audio Call",
        data: [0, 3, 3.5, 2.5, 3.5],
      },
      {
        name: "Chat",
        data: [0, 4, 4.5, 3.8, 4],
      },
    ],

    options: {
      colors: ["#0CE0FF", "#1B5A90", "#DFE5FC"],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 1,
      },
      markers: {
        size: 3,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + "k";
          },
        },
        axisBorder: {
          show: true,
        },
      },
      xaxis: {
        categories: [
          "",
          "22/11/2021",
          "23/11/2021",
          "24/11/2021",
          "25/11/2021",
        ],
      },
    },
  };
  return (
    <div className="col-xl-5 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="card-title">Income Report</h5>
            </div>
            <div className="col-auto d-flex select-option">
            <Select className="select"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={"monthly"}
              
            />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-end w-100">
            <div className="income-rev">
              Total Revenue : <span>$451254K</span>
            </div>
          </div>
          {/* <div id="income-report" /> */}
          <div id="income-report">
            <ReactApexChart
              options={salesChartData.options}
              series={salesChartData.series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeReport;
