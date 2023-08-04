import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";
import { Modal, Button } from 'react-bootstrap';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13, doctor09, sort } from '../imagepath';
import PatientsTable from './PatientsTable';

const Patients = () => {
  const [show2, setShow2] =useState(false);
	const toggleFilterMenu2 = () =>{
		console.log(show2)
		setShow2(!show2)
	}

  const [show1, setShow1] =useState(false);
	const toggleFilterMenu1 = () =>{
		console.log(show1)
		setShow1(!show1)
	}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);
  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-md-12 d-flex justify-content-end">
            <div className="doc-badge me-3">
              Total Patients <span className="ms-1">48</span>
            </div>
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
                <form action="/admin/patient-list">
                  <p className="lab-title">Specialities</p>
                  <label className="custom_radio w-100">
                    <input type="radio" name="year" />
                    <span className="checkmark" /> Number of Appointment
                  </label>
                  <label className="custom_radio w-100">
                    <input type="radio" name="year" />
                    <span className="checkmark" /> Total Income
                  </label>
                  <label className="custom_radio w-100 mb-4">
                    <input type="radio" name="year" />
                    <span className="checkmark" /> Ratings
                  </label>
                  <p className="lab-title">Sort By</p>
                  <label className="custom_radio w-100">
                    <input type="radio" name="sort" />
                    <span className="checkmark" /> Ascending
                  </label>
                  <label className="custom_radio w-100 mb-4">
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
        </div>
      </div>
      {/* /Page Header */}
      {/* Patients List */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Patients</h5>
                </div>
                <div className="col-auto custom-list d-flex">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                  <div className="multipleSelection">
                    <div className="selectBox">
                      <p className="mb-0" onClick={(value)=>toggleFilterMenu2()}>
                        <i className='me-1'><FeatherIcon icon="filter"/></i>                    
                         Filter{" "}
                      </p>
                      <span className="down-icon">
                        <i><FeatherIcon icon="chevron-down"/></i>                
                      </span>
                    </div>
                    <div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
                      <form action="/admin/patient-list">
                        <p className="lab-title">By Account status</p>
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input
                              type="checkbox"
                              name="acc"
                              defaultChecked=""
                            />
                            <span className="checkmark" /> Enabled
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="acc" />
                            <span className="checkmark" /> Disabled
                          </label>
                          <p className="lab-title">By Blood Type</p>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> AB+
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> O-
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> B-
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> A+
                          </label>
                          <label className="custom_check w-100 mb-4">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> B+
                          </label>
                        </div>
                        <button type="submit" className="btn w-100 btn-primary">
                          Apply
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PatientsTable/>
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Patient List */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="patientlist" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header justify-content-center border-bottom-0">
							<h4 className="modal-title">Patient Details</h4>
							<button type="button" className="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
						</div>
						<div className="modal-body">
							<div className="media d-flex align-items-center justify-content-between">
								<div className="flex-shrink-0 d-flex align-items-center">
									<img src={avatar02} alt="patient" className="doctor"/>
									<div>											
										<div className="docs-id"> #454445</div>
										<h3>Harden Mike</h3>
										<p>Male, 45 Years</p>
									</div>	
								</div>
							</div>
							<div className="member-wrapper">
								<h5>Personal Details</h5>
								<div className="row">
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Registered On</h6>
											<p>Nov 21, 2022</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Phone Number</h6>
											<p>+1 5454 2154 4545</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Email ID</h6>
											<p>Doctor@Doccure.com</p>
										</div>
									</div>
									<div className="col-sm-8">
										<div className="mem-info">
											<h6>Location</h6>
											<p>4417 Goosetown Drive, Taylorsville, North Carolina, 28681</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Date of Birth</h6>
											<p>21, Dec 2022</p>
										</div>
									</div>
								</div>                            
							</div>
							<div className="lang-wrap">
								<p>No of Consultation / Cancelled : <span>85/21</span></p>
								<p>Total Income Earned  :  <span>$4,544,784</span></p>
							</div>
							<div className="submit-section">
								<a data-bs-dismiss="modal" data-bs-toggle="modal" href="#editModal" className="btn btn-primary me-2">Edit</a>
								<a data-bs-dismiss="modal" data-bs-toggle="modal" href="#deleteModal" className="btn btn-secondary">Delete Account</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Modal --> */}
			
			{/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="editModal" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header">
							<h3 className="mb-0">Edit Patient</h3>
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
						</div>
						<div className="modal-body">
							<form action="/admin/patient-list">
								<div className="add-wrap">
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="Dr. Rayan miller"/>
										<label className="focus-label">Doctor Name <span className="text-danger">*</span></label>
									</div>
									<label className="mb-1">Patient Image</label>
									<div className="change-photo-btn">
										<div>
                      <i><FeatherIcon icon="upload"/></i>
                      
										<p>Upload File</p></div>
										<input type="file" className="upload"/>
										<span className="file-upload-text"></span>
									</div>
									<p className="file-name text-success">Successfully Product image.jpg uploaded <a href="#" className="text-danger"><div className="del-icon"><i><FeatherIcon icon="x"/></i></div></a></p>
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="$330.00"/>
										<label className="focus-label">Consultation Fees <span className="text-danger">*</span></label>
									</div>
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="Newyork, USA"/>
										<label className="focus-label">Location <span className="text-danger">*</span></label>
									</div>
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="+1 5454 2154 4545"/>
										<label className="focus-label">Phone <span className="text-danger">*</span></label>
									</div>
									<div className="submit-section">
										<button type="submit" className="btn btn-primary btn-save">Save Changes</button>
									</div>								
								</div>
							</form>
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
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
						</div>
						<div className="modal-body">
							<div className="delete-wrap text-center">
								<form action="/admin/patient-list">
									<div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
									<h2>Sure you Want to delete</h2>
									<p>“Patient”</p>
									<div className="submit-section">
										<button type="submit" className="btn btn-success me-2">Yes</button>
										<a href="#" className="btn btn-danger" data-bs-dismiss="modal">No</a>
									</div>	
								</form>								
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Modal --> */}
</>

  )
}

export default Patients;