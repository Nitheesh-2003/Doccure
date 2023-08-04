import React, { useEffect,useState} from 'react';
import DashboardSidebar from '../dashboard/sidebar/sidebar.jsx';
import StickyBox from "react-sticky-box";
import {Link} from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";
import DoctorThumb01 from "../../../assets/images/doctors/doctor-thumb-01.jpg";
import DoctorThumb02 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import DoctorThumb03 from "../../../assets/images/doctors/doctor-thumb-03.jpg";
import DoctorThumb04 from "../../../assets/images/doctors/doctor-thumb-04.jpg";
import DoctorThumb05 from "../../../assets/images/doctors/doctor-thumb-05.jpg";
import DoctorThumb06 from "../../../assets/images/doctors/doctor-thumb-06.jpg";
import UploadIcon from "../../../assets/images/upload-icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../header"
import Footer from "../../footer"


const MedicalRecords =(props)=>{

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const handleChange = (date) => {
        setDate(date)
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
                                    <li className="breadcrumb-item">
                                        <Link to="/patient/dashboard">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Medical Records</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Medical Records</h2> </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                < DashboardSidebar /> </StickyBox>
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <Tabs className="tab-view tab-nav" id="controlled-tab-example">
                                            <Tab className="nav-item tab-navigation" eventKey={1} title="Medical Records">
                                                <div>
                                                    <div className="text-end"> <a href="#" className="add-new-btn" data-bs-toggle="modal" onClick={()=> setShow(true)} data-bs-target="#add_medical_records_modal">Add Medical Records</a> </div>
                                                    <div className="card card-table mb-0">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table className="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Date</th>
                                                                            <th>Description</th>
                                                                            <th>Attachment</th>
                                                                            <th>Orderd By</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Richard Wilson</td>
                                                                            <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                                            <td>Benzaxapine Croplex</td>
                                                                            <td>
                                                                                <a href="#" title="Download attachment" className="btn btn-primary btn-sm"> <i className="fa fa-download" /></a>
                                                                            </td>
                                                                            <td>Your Self</td>
                                                                            <td>
                                                                                <a href="#" className="btn btn-sm bg-danger-light"> <i className="far fa-trash-alt" /> </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>Vena</td>
                                                                            <td>3 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                                                                            <td>Rapalac Neuronium</td>
                                                                            <td>
                                                                                <a href="#" title="Download attachment" className="btn btn-primary btn-sm"> <i className="fa fa-download" /></a>
                                                                            </td>
                                                                            <td>Your Self</td>
                                                                            <td>
                                                                                <a href="#" className="btn btn-sm bg-danger-light"> <i className="far fa-trash-alt" /> </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>Tressie</td>
                                                                            <td>1 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                                                                            <td>Ombinazol Bonibamol</td>
                                                                            <td>
                                                                                <a href="#" title="Download attachment" className="btn btn-primary btn-sm"> <i className="fa fa-download" /></a>
                                                                            </td>
                                                                            <td>Your Self</td>
                                                                            <td>
                                                                                <a href="#" className="btn btn-sm bg-danger-light"> <i className="far fa-trash-alt" /> </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>Richard Wilson</td>
                                                                            <td>30 Oct 2019 <span className="d-block text-info">9.00 AM</span></td>
                                                                            <td>Dantotate Dantodazole</td>
                                                                            <td>
                                                                                <a href="#" title="Download attachment" className="btn btn-primary btn-sm"> <i className="fa fa-download" /></a>
                                                                            </td>
                                                                            <td>Your Self</td>
                                                                            <td>
                                                                                <a href="#" className="btn btn-sm bg-danger-light"> <i className="far fa-trash-alt" /> </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>Christopher</td>
                                                                            <td>28 Oct 2019 <span className="d-block text-info">6.00 PM</span></td>
                                                                            <td>Acetrace Amionel</td>
                                                                            <td>
                                                                                <a href="#" title="Download attachment" className="btn btn-primary btn-sm"> <i className="fa fa-download" /></a>
                                                                            </td>
                                                                            <td>Your Self</td>
                                                                            <td>
                                                                                <a href="#" className="btn btn-sm bg-danger-light"> <i className="far fa-trash-alt" /> </a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab className="nav-item tab-navigation" eventKey={2} title="Prescription">
                                                <div className="card card-table mb-0">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Date</th>
                                                                        <th>Name</th>
                                                                        <th>Doctor</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                            <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                                <img className="avatar-img rounded-circle" src={DoctorThumb01} alt="User Image" />
                                                            </Link>
                                                            <Link to="/patient/doctor-profile">Dr. Ruby Perrin <span>Dental</span></Link>
                                                            </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>3 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                            <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                                <img className="avatar-img rounded-circle" src={DoctorThumb02} alt="User Image" />
                                                            </Link>
                                                            <Link to="/patient/doctor-profile">Dr. Darren Elder <span>Dental</span></Link>
                                                            </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>1 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                            <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                                <img className="avatar-img rounded-circle" src={DoctorThumb03} alt="User Image" />
                                                            </Link>
                                                            <Link to="/patient/doctor-profile">Dr. Deborah Angel <span>Cardiology</span></Link>
                                                            </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4</td>
                                                                        <td>30 Oct 2019 <span className="d-block text-info">9.00 AM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                                    <img className="avatar-img rounded-circle" src={DoctorThumb04} alt="User Image" />
                                                                </Link>
                                                                <Link to="/patient/doctor-profile">Dr. Sofia Brient <span>Urology</span></Link>
                                                            </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5</td>
                                                                        <td>28 Oct 2019 <span className="d-block text-info">6.00 PM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                        <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                            <img className="avatar-img rounded-circle" src={DoctorThumb05} alt="User Image" />
                                                        </Link>
                                                        <Link to="/patient/doctor-profile">Dr. Marvin Campbell <span>Ophthalmology</span></Link>
                                                        </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>6</td>
                                                                        <td>27 Oct 2019 <span className="d-block text-info">8.00 AM</span></td>
                                                                        <td>Prescription</td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                            <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                                                <img className="avatar-img rounded-circle" src={DoctorThumb06} alt="User Image" />
                                                            </Link>
                                                            <Link to="/patient/doctor-profile">Dr. Katharine Berthold <span>Orthopaedics</span></Link>
                                                            </h2> </td>
                                                                        <td>
                                                                            <div className="table-action">
                                                                                <a href="#" className="btn btn-sm bg-success-light"> <i className="fas fa-print" /> Print </a>
                                                                                <a href="#" className="btn btn-sm bg-info-light"> <i className="far fa-eye" /> View </a>
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
            <Modal size="lg" show={show} onHide={()=> setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className="modal-title">Add Medical Records</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <form id="medical_records_form">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Title Name</label>
                                            <input type="text" name="description" className="form-control" placeholder="Enter Title Name" /> </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Patient</label>
                                            <select className="form-select form-control">
                                                <option>Myself</option>
                                                <option>Child_1</option>
                                                <option>Self</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Hospital Name</label>
                                            <input type="text" name="hospital" className="form-control" placeholder="Enter name here.." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Upload</label>
                                            <div className="upload-medical-records">
                                                <input className="form-control" type="file" name="user_file" id="user_files_mr" />
                                                <div className="upload-content dropzone">
                                                    <div className="text-center">
                                                        <div className="upload-icon mb-2"><img src={UploadIcon} alt /></div>
                                                        <h5>Drag &amp; Drop</h5>
                                                        <h6>or <span className="text-danger">Browse</span></h6> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Symptoms</label>
                                            <input type="text" data-role="tagsinput" className="input-tags form-control" defaultValue="Fever, Fatigue" name="services" id="services" /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <div className="form-group">
                                                <DatePicker selected={date} onChange={handleChange} className="form-control date-icon" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <div className="submit-section text-center">
                                        <button type="submit" id="medical_btn" className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            <Footer {...props}/> 
         </div>
        );
   }

export default MedicalRecords;   
        

