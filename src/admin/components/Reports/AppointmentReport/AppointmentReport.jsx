import React, {useEffect, useState} from 'react';
import SidebarNav from "../../sidebar";
import { Link } from "react-router-dom";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import { sort } from '../../imagepath';
import ReactApexChart from "react-apexcharts";
import AppointmentReportList from './AppointmentReportList';
import FeatherIcon from 'feather-icons-react';

const AppointmentReport = () => {
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

        const [show1, setShow1] =useState(false);
        const toggleFilterMenu1 = () =>{
            console.log(show1)
            setShow1(!show1)
        }

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
                  <h5 className="card-title">Appointment Report</h5>
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
            {/* <div className="card-body">
              <div id="sales_chart" />
            </div> */}
            <div id="sales_chart">
               <ReactApexChart options={salesChartData.options} series={salesChartData.series} type="bar" height={350} />
            </div>
          </div>
        </div>
      </div>
      {/* /Appointments Report */}
      {/* Upcoming Appointments */}
      <div className="row">
        <div className="col-sm-12">
          <div className="app-listing">
            <div className="multipleSelection">
              <div className="selectBox">
                <p className="mb-0" onClick={(value)=>toggleFilterMenu()}>
                  <i className="me-1"><FeatherIcon icon="filter"/></i> Filter
                </p>
                <span className="down-icon">
                  <i><FeatherIcon icon="chevron-down"/></i>
                </span>
              </div>
              <div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
                <form action="/admin/appointmentreport">
                  <div className="form-custom">
                    <input
                      type="text"
                      className="form-control bg-grey"
                      placeholder="Search by Patient"
                    />
                    <i className="fas fa-search" />
                  </div>
                  <div className="form-custom">
                    <input
                      type="text"
                      className="form-control bg-grey"
                      placeholder="Search by Doctor"
                    />
                    <i className="fas fa-search" />
                  </div>
                  <p className="lab-title">Consultation Type</p>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="year" />
                    <span className="checkmark" /> Video Call
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="year" />
                    <span className="checkmark" /> Audio Call
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="year" />
                    <span className="checkmark" /> Chat
                  </label>
                  <button type="submit" className="btn w-100 btn-primary">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="custom-list">
              <div className="SortBy">
                <div className="selectBoxes order-by">
                  <p className="mb-0" onClick={(value)=>toggleFilterMenu1()}>
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
                <div id="checkBox" style={{ display: show1 ? "block" : "none" }}>
                  <form action="/admin/appointmentreport">
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
              <i><FeatherIcon icon="download"/></i> Import
              </Link>
            </div>
          </div>
          <AppointmentReportList/>
        </div>
      </div>
      <div id="tablepagination" className="dataTables_wrapper" />
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default AppointmentReport