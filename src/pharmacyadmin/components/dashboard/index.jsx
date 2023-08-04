import React from 'react';
import { Link } from 'react-router-dom';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10, avatar11, avatar12, avatar13, calender, cardio, chart, dental, flag01, flag02, flag03, flag04, flag05, neurology, ortho, urology } from '../imagepath';
import SidebarNav from '../sidebar';
import Appointments from './appointment';
import FeatherIcon from 'feather-icons-react';
import IncomeReport from './IncomeReport/IncomeReport';



const Dashboard =(props) => {




return (
<>

<SidebarNav />
<>
{/* Page Wrapper */}
<div className="page-wrapper">
<div className="content container-fluid pb-0">
   <h4 className="mb-3">Overview</h4>
   <div className="row">
      <div className="col-xl-3 col-sm-6 col-12">
         <div className="card">
            <div className="card-body">
               <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-primary">
                  <FeatherIcon icon="dollar-sign" />
                  </span>
                  <div className="dash-count">
                     <h5 className="dash-title">Sales Today</h5>
                     <div className="dash-counts">
                        <p>$50.00</p>
                     </div>
                  </div>
               </div>
               <p className="trade-level mb-0">
                  <span className="text-danger me-1">
                  <i className="fas fa-caret-down me-1" />
                  2.05%
                  </span>{" "}
                  last week
               </p>
            </div>
         </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
         <div className="card">
            <div className="card-body">
               <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-blue">
                  <FeatherIcon icon="credit-card" />               
                  </span>
                  <div className="dash-count">
                     <h5 className="dash-title">Expense Today</h5>
                     <div className="dash-counts">
                        <p>$5.22</p>
                     </div>
                  </div>
               </div>
               <p className="trade-level mb-0">
                  <span className="text-success me-1">
                  <i className="fas fa-caret-up me-1" />
                  4.5%
                  </span>{" "}
                  last week
               </p>
            </div>
         </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
         <div className="card">
            <div className="card-body">
               <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-warning">
                  <FeatherIcon icon="folder-plus" /> 
                  </span>
                  <div className="dash-count">
                     <h5 className="dash-title">Medicine</h5>
                     <div className="dash-counts">
                        <p>485</p>
                     </div>
                  </div>
               </div>
               <p className="trade-level mb-0">
                  <span className="text-success me-1">
                  <i className="fas fa-caret-up me-1" />
                  9.65%
                  </span>{" "}
                  last week
               </p>
            </div>
         </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
         <div className="card">
            <div className="card-body">
               <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-danger">
                  <FeatherIcon icon="users" /> 
                  </span>
                  <div className="dash-count">
                     <h5 className="dash-title">Staff</h5>
                     <div className="dash-counts">
                        <p>50</p>
                     </div>
                  </div>
               </div>
               <p className="trade-level mb-0">
                  <span className="text-danger me-1">
                  <i className="fas fa-caret-up me-1" />
                  40.5%
                  </span>{" "}
                  last week
               </p>
            </div>
         </div>
      </div>
   </div>
   <div className="row">
      {/* Appointments */}
	  <Appointments/>
      
         {/* /Appointments */}
         {/* Income Report */}
         <IncomeReport/>
            {/* /Income Report */}
         </div>
         <div className="row">
            {/* Recent Activities */}
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-header border-bottom-0">
                     <div className="row align-items-center">
                        <div className="col">
                           <h5 className="card-title">Latest Customers</h5>
                        </div>
                        <div className="col-auto d-flex">
                           <div className="bookingrange btn btn-white btn-sm">
                              <div className="cal-ico">
                                 <span>Select Date</span>
                                 
                                 <i className="ms-1"><FeatherIcon icon="chevron-down" /> </i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card-body p-0">
                     <div className="table-responsive">
                        <table className="table table-borderless hover-table">
                           <thead className="thead-light">
                              <tr>
                                 <th>#</th>
                                 <th>Name</th>
                                 <th>Address</th>
                                 <th>Telephone</th>
                                 <th>Email</th>
                                 <th className="text-end">Date added</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>01</td>
                                 <td>
                                    <Link to="/pharmacyadmin/profile">Ruby Perrin</Link>
                                 </td>
                                 <td>takrakka</td>
                                 <td>+54 1245463984</td>
                                 <td>rubyperring@example.com</td>
                                 <td className="text-end">April 14, 2022</td>
                              </tr>
                              <tr>
                                 <td>02</td>
                                 <td>
                                    <Link to="/pharmacyadmin/profile">Darren Elder</Link>
                                 </td>
                                 <td>339, Terromont Street</td>
                                 <td>+44 874654536</td>
                                 <td>darrenelder@example.com</td>
                                 <td className="text-end">December 15, 2022</td>
                              </tr>
                              <tr>
                                 <td>03</td>
                                 <td>
                                    <Link to="/pharmacyadmin/profile">Deborah Angel</Link>
                                 </td>
                                 <td>339, Terromont Street</td>
                                 <td>+0144 763 351</td>
                                 <td>deborahangel@example.com</td>
                                 <td className="text-end">January 22, 2022</td>
                              </tr>
                              <tr>
                                 <td>04</td>
                                 <td>
                                    <Link to="/pharmacyadmin/profile">Marsha Burke</Link>
                                 </td>
                                 <td>2061 Angus Road</td>
                                 <td>+510-306-7033</td>
                                 <td>marshaburke@example.com</td>
                                 <td className="text-end">August 13, 2022</td>
                              </tr>
                              <tr>
                                 <td>05</td>
                                 <td>
                                    <Link to="/pharmacyadmin/profile">Krystyna Rodriquez</Link>
                                 </td>
                                 <td>takrakka</td>
                                 <td>+54 8965722222</td>
                                 <td>krystynarodriquez@example.com</td>
                                 <td className="text-end">May 01, 2022</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            {/* /Recent Activities */}
         </div>
      </div>
   </div>
   {/* /Page Wrapper */}
   {/* /Main Wrapper */}
   </>

</>
)
}
export default Dashboard;