import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";
import { Modal, Button } from 'react-bootstrap';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13, doctor09, sort } from '../imagepath';
import DoctorsTable from './DoctorsTable';
import config from "config";

const Doctors = () => {
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
              Doctors <span className="ms-1">48</span>
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
                <i className=''><FeatherIcon icon="chevron-down"/></i>

                </span>
              </div>
              <div id="checkBox" style={{ display: show1 ? "block" : "none" }}>
                <form action={`${config.publicPath}patient/doctor-list`}>
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
      {/* Doctor List */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Doctors</h5>
                </div>
                <div className="col-auto d-flex flex-wrap">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                  <div className="multipleSelection">
                    <div className="selectBox">
                      <p className="mb-0 me-2" onClick={(value)=>toggleFilterMenu2()}>
                      <i className='me-1'><FeatherIcon icon="filter"/></i> Filter By
                        Speciality{" "}
                      </p>
                      <span className="down-icon">
                      <i className='me-1'><FeatherIcon icon="chevron-down"/></i>
                 
                      </span>
                    </div>
                    <div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
                      <form action="/admin/doctor-list">
                        <p className="lab-title">Specialities</p>
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input
                              type="checkbox"
                              name="year"
                              defaultChecked=""
                            />
                            <span className="checkmark" /> Urology
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Neurology
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Orthopedic
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Cardiologist
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Dentist
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Gynacologist
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Pediatrist
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="year" />
                            <span className="checkmark" /> Orthopedic
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
            <DoctorsTable/>
           
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Doctor List */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="doctorlist" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header justify-content-center border-bottom-0">
							<h4 className="modal-title">Doctor Details</h4>
							<button type="button" className="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><i className=''><FeatherIcon icon="x-circle"/></i></button>
						</div>
						<div className="modal-body">
							<div className="media d-flex align-items-center justify-content-between">
								<div className="flex-shrink-0 d-flex align-items-center">
									<img src={doctor09} alt="" className="doctor"/>
									<div className="doc-info">											
										<div className="docs-id"> #454445</div>
										<h3>Dr. Rayan miller</h3>
										<p>BDS, MDS - Oral & Maxillofacial Surgery</p>
									</div>	
								</div>
								<div className="media-body">								
									<div className="ratings">
										<p><i className="fas fa-star filled mr-1"></i>4.5</p>
									</div>
								</div>
							</div>
							<div className="member-wrapper">
								<h5>Details</h5>
								<div className="row">
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Member Since</h6>
											<p>Nov 21, 2022</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Speciality</h6>
											<p>Dentist</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Consultation Fees</h6>
											<p>$100 / Consultation</p>
										</div>
									</div>
								</div>                            
							</div>
							<div className="member-wrapper">
								<h5>Personal Information</h5>
								<div className="row">
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Gender</h6>
											<p>Male</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Date of Birth</h6>
											<p>21, Dec 2022</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="mem-info">
											<h6>Location</h6>
											<p>Newyork, USA</p>
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
							<h3 className="mb-0">Edit Doctor</h3>
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"> <i className=''><FeatherIcon icon="x-circle"/></i></button>
						</div>
						<div className="modal-body">
							<form action={`${config.publicPath}patient/doctor-list`}>
								<div className="add-wrap">
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="Dr. Rayan miller"/>
										<label className="focus-label">Doctor Name <span className="text-danger">*</span></label>
									</div>
									<label className="mb-1">Doctor Image</label>
									<div className="change-photo-btn">
										<div><i className=''><FeatherIcon icon="upload"/></i>
										<p>Upload File</p></div>
										<input type="file" className="upload"/>
										<span className="file-upload-text"></span>
									</div>
									<p className="file-name text-success">Successfully Product image.jpg uploaded <a href="#" className="text-danger"><i className=''><FeatherIcon icon="x"/></i></a></p>
									<div className="form-group">
										<select className="select">
											<option>Select Speciality</option>
											<option>Dentist</option>
											<option defaultValue>Neurology</option>
										</select>
									</div>
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
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i className=''><FeatherIcon icon="x-circle"/></i></button>
						</div>
						<div className="modal-body">
							<div className="delete-wrap text-center">
								<form action={`${config.publicPath}patient/doctor-list`}>
									<div className="del-icon"><i className=''><FeatherIcon icon="x-circle"/></i></div>
									<h2>Sure you Want to delete</h2>
									<p>“Doctor”</p>
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

export default Doctors