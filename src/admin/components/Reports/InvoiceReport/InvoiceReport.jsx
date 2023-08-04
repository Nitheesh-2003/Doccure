import React, {useEffect, useState} from 'react';
import SidebarNav from "../../sidebar";
import { Link } from "react-router-dom";
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13, sort } from '../../imagepath';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import ReactApexChart from "react-apexcharts";
import FeatherIcon from 'feather-icons-react';
import InvoiceReportList from './InvoiceReportList';

const InvoiceReport = () => {
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
    
    
        const [show1, setShow1] =useState(false);
        const toggleFilterMenu1 = () =>{
            console.log(show1)
            setShow1(!show1)
        }

     

        const salesChartData ={ 
            
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3]
				}
			],
              options: {
                colors: ['#0CE0FF'],
                chart: {
                    type: 'bar',
                    fontFamily: 'Poppins, sans-serif',
                    height: 360,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
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
                    categories: ['22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '25/11/2021', '25/11/2021', '27/11/2021', '28/11/2021'],
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
      {/* Total Invoice */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Invoice Report</h5>
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
                               <i className='me-1'><FeatherIcon icon="calendar"/></i>                     
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
              <div className="income-rev float-none mb-0">
                Todays Total Invoice : <span>45</span>
              </div>
              {/* <div id="totsales_chart" /> */}
              <div id="chart">
               <ReactApexChart options={salesChartData.options} series={salesChartData.series} type="bar" height={350} />
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Total Invoice */}
      {/* Invoice Report */}
      <div className="row">
        <div className="col-sm-12">
          <div className="app-listing">
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
                  <form action="/admin/invoicereport">
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
                <i ><FeatherIcon icon="download"/></i>
               Import
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Ratings</h5>
                </div>
                <div className="col-auto d-flex">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                </div>
              </div>
            </div>
            <InvoiceReportList />
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Invoice Report */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="transaction" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header border-bottom-0 justify-content-end pb-0">
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">	<i><FeatherIcon icon="x-circle"/></i></button>
						</div>
						<div className="modal-body pt-0">
							<div className="rating-wrapper">
								<h4 className="text-center mb-4">Transaction Details</h4>
								<div className="row">
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Consultation ID </h6>
											<p>#454445</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Paid On </h6>
											<p>14 Nov 2022 05:30 PM</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Payment Mode</h6>
											<p>Online</p>
										</div>
									</div>  
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Consultation Fees</h6>
											<p>$300.00</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Tax Fees</h6>
											<p>$30.00</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Total Fees</h6>
											<p>$300.00</p>
										</div>
									</div>  									
								</div> 
								<div className="submit-section">
									<a href="#" className="btn btn-primary btn-download">Download Invoice</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Modal --> */}
			
			{/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="deleteModal" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header border-bottom-0 justify-content-end">
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">	<div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
						</div>
						<div className="modal-body">
							<div className="delete-wrap text-center">
              <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
								<h2>Sure you Want to delete</h2>
								<p>“Transaction”</p>
								<div className="submit-section">
									<Link to="/admin/transactions-list" className="btn btn-success me-2">Yes</Link>
									<a href="#" className="btn btn-danger" data-bs-dismiss="modal">No</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Modal --> */}
</>

  )
}

export default InvoiceReport