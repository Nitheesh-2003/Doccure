import React, {useEffect, useState} from 'react';
import SidebarNav from "../../sidebar";
import { Link } from "react-router-dom";
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13, sort } from '../../imagepath';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import ReactApexChart from "react-apexcharts";
import IncomeReportList from './IncomeReportList';
import FeatherIcon from 'feather-icons-react';

const IncomeReport = () => {
    const [state, setState] = useState({
        start: moment().subtract(29, 'days'),
        end: moment(),
      });
      const { start, end } = state;
      const handleCallback = (start, end) => {
        setState({ start, end });
      };
      const label =
        start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
    
    
        const [show, setShow] =useState(false);
        const toggleFilterMenu = () =>{
            console.log(show)
            setShow(!show)
        }

        const salesChartData ={ 
            series: [{
				name: "Video Call",
				data: [0, 2.5, 1, 3, 4, 2, 3, 2, 4]
			},
			{
				name: "Audio Call",
				data: [0, 2, 4, 4.3, 4, 2.5, 3.5, 2.5, 4, 3]
			},
			{
				name: "Chat",
				data: [0, 4, 4.5, 3.8, 4, 2, 3, 3.5, 4, 3]
			}
		],
		
              options: {
                colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
                chart: {
                    height: 300,
                    type: 'area',
                    toolbar: {
                          show: false
                      },
                    zoom: {
                      enabled: false
                    }
                  },
                  markers: {
                      size: 3,
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'straight',
                    width: 1,
                  },
                  legend: {
                      position: 'top',
                      horizontalAlign: 'right',
                   },
                  grid: {
                    show: false,
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
                  xaxis: {
                    categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '26/11/2021', '27/11/2021', '28/11/2021', '25/11/2021', '25/11/2021'],
                      }
              },
        }
  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid content-wrap">
      {/* Appointments Report */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Income Report</h5>
                </div>
                <DateRangePicker
                            initialSettings={{
                            startDate: start.toDate(),
                            endDate: end.toDate(),
                            ranges: {
                                Today: [moment().toDate(), moment().toDate()],
                                Yesterday: [
                                moment().subtract(1, 'days').toDate(),
                                moment().subtract(1, 'days').toDate(),
                                ],
                                'Last 7 Days': [
                                moment().subtract(6, 'days').toDate(),
                                moment().toDate(),
                                ],
                                'Last 30 Days': [
                                moment().subtract(29, 'days').toDate(),
                                moment().toDate(),
                                ],
                                'This Month': [
                                moment().startOf('month').toDate(),
                                moment().endOf('month').toDate(),
                                ],
                                'Last Month': [
                                moment().subtract(1, 'month').startOf('month').toDate(),
                                moment().subtract(1, 'month').endOf('month').toDate(),
                                ],
                            },
                            }}
                            onCallback={handleCallback}
                        >
                            <div className="col-auto">
                                <div className="bookingrange btn btn-white btn-sm">
                                <div className="cal-ico">
                                    <i className="me-1"><FeatherIcon icon="calendar"/></i>
                                    <span>{label}</span>
                                </div>
                                <div className="ico">
                                    <i className="fas fa-chevron-left" />
                                    <i className="fas fa-chevron-right" />
                                </div>
                                </div>
                            </div>
                  </DateRangePicker>
              </div>
            </div>
            <div className="card-body">
              <div className="w-100">
                <div className="income-rev">
                  Total Revenue : <span>$451254K</span>
                </div>
              </div>
              {/* <div id="totincome-report" /> */}
              <div id="chart">
               <ReactApexChart options={salesChartData.options} series={salesChartData.series} type="area" height={350} />
            </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* /Appointments Report */}
      {/* Upcoming Appointments */}
      <div className="row">
        <div className="col-sm-12">
          <div className="app-listing">
            <div className="custom-list">
              <div className="SortBy">
                <div className="selectBoxes order-by">
                  <p className="mb-0" onClick={(value)=>toggleFilterMenu()}>
                    <img
                      src={sort}
                      className="me-2"
                      alt="icon"
                    />{" "}
                    Order by{" "}
                  </p>
                  <span className="down-icon">
                    
                    <i><FeatherIcon icon="chevron-down"/></i>
                  </span>
                </div>
                <div id="checkBox" style={{ display: show ? "block" : "none" }}>
                  <form action="/admin/incomerepot">
                    <p className="lab-title">Order By </p>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> ID
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Amount
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Date
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Number of Appointments
                    </label>
                    <p className="lab-title">Sort By</p>
                    <label className="custom_radio w-100">
                      <input type="radio" name="sort" />
                      <span className="checkmark" /> Ascending
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="sort" />
                      <span className="checkmark" /> Descending
                    </label>
                    <button type="submit" className="btn w-100 btn-primary">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="import-list">
              <Link to="#">
                <i><FeatherIcon icon="download"/></i>
                 Import
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Doctors</h5>
                </div>
              </div>
            </div>
            <IncomeReportList/>
          </div>
        </div>
      </div>
      <div id="tablepagination" className="dataTables_wrapper" />
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
};

export default IncomeReport;