import React, {useState, useEffect} from 'react';
import DashboardSidebar from '../dashboard/sidebar/sidebar.jsx';
import StickyBox from "react-sticky-box";
import son from "../../../assets/images/son.jpg"
import mother from "../../../assets/images/mother.jpg"
import father from "../../../assets/images/father.jpg"
import daughter from "../../../assets/images/daughter.jpg"
import {Link} from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";
import DoctorThumb01 from "../../../assets/images/doctors/doctor-thumb-01.jpg";
import DoctorThumb02 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import DoctorThumb03 from "../../../assets/images/doctors/doctor-thumb-03.jpg";
import DoctorThumb04 from "../../../assets/images/doctors/doctor-thumb-04.jpg";
import DoctorThumb05 from "../../../assets/images/doctors/doctor-thumb-05.jpg";
import DoctorThumb06 from "../../../assets/images/doctors/doctor-thumb-06.jpg";
import Header from '../../header';
import Footer from '../../footer'

const PatientAccounts =(props)=> {
  
    const [show, setShow] = useState(true);


   const handleClose=()=>{
    setShow(false)
       
    }


  
        return(
            <div>
              <Header {...props}/>
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/patient/dashboard">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="content">
				<div className="container-fluid">
					<div className="row">
					    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<StickyBox offsetTop={20} offsetBottom={20}>
                       		 < DashboardSidebar />
						</StickyBox>
                       </div>

                       <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="row">
                          <div className="col-lg-5 d-flex">
                            <div className="card flex-fill">
                              <div className="card-header">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h3 className="card-title">Account</h3>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="text-end">
                                    <a title="Edit Profile" class="btn btn-primary btn-sm" href="#account_modal" data-bs-toggle="modal" onClick={() => setShow((s) => !s)}><i class="fas fa-pencil"></i> Edit Details</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="profile-view-bottom">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="info-list">
                                        <div className="title">Bank Name</div>
                                        <div className="text" id="bank_name">Wells Fargo &amp; Co</div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="info-list">
                                        <div className="title">Branch Name</div>
                                        <div className="text" id="branch_name">Lenexa</div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="info-list">
                                        <div className="title">Account Number</div>
                                        <div className="text" id="account_no">5396 5250 1908 3838</div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="info-list">
                                        <div className="title">Account Name</div>
                                        <div className="text" id="account_name">Dr. Darren Elder</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7 d-flex">
                            <div className="card flex-fill">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="account-card bg-success-light">
                                      <span>$90.48</span> Received
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="account-card bg-warning-light">
                                      <span>$0.00</span> Requested
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="account-card bg-purple-light">
                                      <span>$90.48</span> Balance
                                    </div>
                                  </div>
                                  <div className="col-md-12 text-center">
                                  <a href="#payment_request_modal" class="btn btn-primary request_btn" data-bs-toggle="modal">Refund Request</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="card">
                            <Tabs
                                className="tab-view"
                                // activeKey={state.key}
                                // onSelect={handleSelect}
                                id="controlled-tab-example"
                              >
                                    <Tab
                                      className="nav-item tab-navigation"
                                      eventKey={1}
                                      title="Accounts"
                                    >
                                      <div className="card card-table mb-0">
                                        <div className="card-body">
                                          <div className="table-responsive">
                                          <table className="table table-hover table-center mb-0">
                                              <thead>
                                                  <tr>
                                                      <th>Date</th>
                                                      <th>Doctor Name</th>
                                                      <th className="text-center">Amount</th>
                                                      <th>Status</th>
                                                      <th />
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                              <img className="avatar-img rounded-circle" src={DoctorThumb01} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Ruby Perrin <span>Dental</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$150</td>
                                                      <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                                                      <td className="text-end">
                                                      <div className="table-action">
                                                          <a href="#" className="btn btn-sm bg-info-light">
                                                          <i className="far fa-eye" /> View
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-success-light">
                                                          <i className="fas fa-check" /> Accept
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-danger-light">
                                                          <i className="fas fa-times" /> Cancel
                                                          </a>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>3 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                          <img className="avatar-img rounded-circle" src={DoctorThumb02} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Darren Elder <span>Dental</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$200</td>
                                                      <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                                                      <td className="text-end">
                                                      <div className="table-action">
                                                          <a href="#" className="btn btn-sm bg-info-light">
                                                          <i className="far fa-eye" /> View
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-success-light">
                                                          <i className="fas fa-check" /> Accept
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-danger-light">
                                                          <i className="fas fa-times" /> Cancel
                                                          </a>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>1 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                              <img className="avatar-img rounded-circle" src={DoctorThumb03} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Sofia Brient <span>Urology</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$75</td>
                                                      <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                                                      <td className="text-end">
                                                      <div className="table-action">
                                                          <a href="#" className="btn btn-sm bg-info-light">
                                                          <i className="far fa-eye" /> View
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-success-light">
                                                          <i className="fas fa-check" /> Accept
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-danger-light">
                                                          <i className="fas fa-times" /> Cancel
                                                          </a>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>30 Oct 2019 <span className="d-block text-info">9.00 AM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                              <img className="avatar-img rounded-circle" src={DoctorThumb04} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Sofia Brient <span>Urology</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$100</td>
                                                      <td><span className="badge rounded-pill bg-warning-light">Pending</span></td>
                                                      <td className="text-end">
                                                      <div className="table-action">
                                                          <a href="#" className="btn btn-sm bg-info-light">
                                                          <i className="far fa-eye" /> View
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-success-light">
                                                          <i className="fas fa-check" /> Accept
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-danger-light">
                                                          <i className="fas fa-times" /> Cancel
                                                          </a>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>28 Oct 2019 <span className="d-block text-info">6.00 PM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                              <img className="avatar-img rounded-circle" src={DoctorThumb05} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Marvin Campbell <span>Ophthalmology</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$350</td>
                                                      <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                                                      <td className="text-end">
                                                      <div className="table-action">
                                                          <a href="#" className="btn btn-sm bg-info-light">
                                                          <i className="far fa-eye" /> View
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-success-light">
                                                          <i className="fas fa-check" /> Accept
                                                          </a>
                                                          <a href="#" className="btn btn-sm bg-danger-light">
                                                          <i className="fas fa-times" /> Cancel
                                                          </a>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>27 Oct 2019 <span className="d-block text-info">8.00 AM</span></td>
                                                      <td>
                                                      <h2 className="table-avatar">
                                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                          <img className="avatar-img rounded-circle" src={DoctorThumb06} alt="User Image" />
                                                          </Link>
                                                          <Link to="/patient/doctor-profile">Dr. Katharine Berthold <span>Orthopaedics</span></Link>
                                                      </h2>
                                                      </td>
                                                      <td className="text-center">$250</td>
                                                      <td><span className="badge rounded-pill bg-danger-light">Refunded</span></td>
                                                      <td className="text-end">
                                                          <div className="table-action">
                                                              <a href="#" className="btn btn-sm bg-info-light">
                                                              <i className="far fa-eye" /> View
                                                              </a>
                                                              <a href="#" className="btn btn-sm bg-success-light">
                                                              <i className="fas fa-check" /> Accept
                                                              </a>
                                                              <a href="#" className="btn btn-sm bg-danger-light">
                                                              <i className="fas fa-times" /> Cancel
                                                              </a>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab>
                                    <Tab
                                      className="nav-item tab-navigation"
                                      eventKey={2}
                                      title="Doctor Request"
                                    >
                                    
                                      <div className="card card-table mb-0">
                                        <div className="card-body">
                                          <div className="table-responsive">
                                          <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Doctor Name</th>
                            <th className="text-center">Amount</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb01} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Ruby Perrin <span>Dental</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$150</td>
                            <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>3 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb02} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Darren Elder <span>Dental</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$200</td>
                            <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>1 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb03} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Deborah Angel <span>Cardiology</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$75</td>
                            <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>30 Oct 2019 <span className="d-block text-info">9.00 AM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb04} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Sofia Brient <span>Urology</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$100</td>
                            <td><span className="badge rounded-pill bg-warning-light">Pending</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>28 Oct 2019 <span className="d-block text-info">6.00 PM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb05} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Marvin Campbell <span>Ophthalmology</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$350</td>
                            <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>27 Oct 2019 <span className="d-block text-info">8.00 AM</span></td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                  <img className="avatar-img rounded-circle" src={DoctorThumb06} alt="User Image" />
                                </Link>
                                <Link to="/patient/doctor-profile">Dr. Katharine Berthold <span>Orthopaedics</span></Link>
                              </h2>
                            </td>
                            <td className="text-center">$250</td>
                            <td><span className="badge rounded-pill bg-danger-light">Refunded</span></td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="#" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="#" className="btn btn-sm bg-success-light">
                                  <i className="fas fa-check" /> Accept
                                </a>
                                <a href="#" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" /> Cancel
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                                                  </div>
                                                </div>
                                              </div>
                                            </Tab>
                                          </Tabs>
                            </div>
                          </div>
                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div> 
                            <Modal style={{ display: show ? "block" : "none" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h5 className="modal-title">Account Details</h5></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="modal-body">
                                    <form id="accounts_form" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="control-label">Bank Name</label>
                                                <input type="text" name="bank_name" className="form-control bank_name" defaultValue="Goldman Sachs" />
                                                <span className="help-block" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="control-label">Branch Name</label>
                                                <input type="text" name="branch_name" className="form-control branch_name" defaultValue="Alpharetta" />
                                                <span className="help-block" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="control-label">Account Number</label>
                                                <input type="text" name="account_no" className="form-control account_no" defaultValue="4916 0606 4635 5064" />
                                                <span className="help-block" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="control-label">Account Name</label>
                                                <input type="text" name="account_name" className="form-control acc_name" defaultValue="Richard Wilson" />
                                                <span className="help-block" />
                                            </div>
                                            </div> 
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer text-center">
                                        <button type="submit" id="acc_btn" className="btn btn-primary">Save</button>
                                </div>
                                </Modal.Body>
                            </Modal>
                            <Modal show={show=="refund_request"} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h5 className="modal-title">Payment Request</h5></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="modal-body">
                                    <form id="payment_request_form" method="post">
                                        <input type="hidden" name="payment_type" id="payment_type" />
                                        <div className="form-group">
                                            <label>Request Amount</label>
                                            <input type="text" name="request_amount" id="request_amount" className="form-control" maxLength={6} />
                                            <span className="help-block" />
                                        </div>
                                        <div className="form-group">
                                            <label>Description (Optional)</label>
                                            <textarea className="form-control" name="description" id="description" defaultValue={""} />
                                            <span className="help-block" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer text-center">
                                        <button type="submit" id="acc_btn" className="btn btn-primary">Save</button>
                                </div>
                                </Modal.Body>
                            </Modal>
                            <Footer {...props}/>
            </div>
        );
   }

export default PatientAccounts;   
        

