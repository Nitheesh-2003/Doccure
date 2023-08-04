import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { cardio, dental, neurology, ortho, sort, urology } from '../imagepath';
import { Modal, Button } from 'react-bootstrap';
import SidebarNav from "../sidebar";
import SpecialitiesTable from './SpecialitiesTable';

const Specialities = () => {
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
              Specialities <span className="ms-1">48</span>
            </div>
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
              className="btn btn-primary btn-add"
              // onClick={()=>handleShow('addModal')}
            >
               <i className='me-1'><FeatherIcon icon="plus-square"/></i>
               Add New
            </Link>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Specialities */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Specialities</h5>
                </div>
                <div className="col-auto d-flex flex-wrap">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                  <div className="SortBy">
                    <div className="selectBoxes order-by">
                      <p className="mb-0" onClick={(defaultValue)=>toggleFilterMenu1()}>
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
                      <form action="/admin/specialities">
                        <p className="lab-title">Order By </p>
                        <label className="custom_radio w-100">
                          <input type="radio" name="order" />
                          <span className="checkmark" /> ID
                        </label>
                        <label className="custom_radio w-100 mb-4">
                          <input type="radio" name="order" />
                          <span className="checkmark" /> Date Modified
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
            <SpecialitiesTable/>
            
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Specialities */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Modal */}
  
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="addModal" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header">
							<h3 className="mb-0">Add Speciality</h3>
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
						</div>
						<div className="modal-body">
							<form action="/admin/specialities">
								<div className="add-wrap">
									<div className="form-group form-focus">
										<input type="text" className="form-control floating"/>
										<label className="focus-label">Speciality Name<span className="text-danger">*</span></label>
									</div>
									<div className="change-photo-btn">
										<div><i className=''><FeatherIcon icon="upload"/></i>
										<p>Upload File</p></div>
										<input type="file" className="upload"/>
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
		
  
  {/* Modal */}

  
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="editModal" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header">
							<h3 className="mb-0">Edit Speciality</h3>
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i className=''><FeatherIcon icon="x-circle"/></i></button>
						</div>
						<div className="modal-body">
							<form action="/admin/specialities">
								<div className="add-wrap">
									<div className="form-group form-focus">
										<input type="text" className="form-control floating" defaultValue="Cardiology"/>
										<label className="focus-label">Speciality Name<span className="text-danger">*</span></label>
									</div>
									<div className="change-photo-btn">
										<div><i className=''><FeatherIcon icon="upload"/></i>
										<p>Upload File</p></div>
										<input type="file" className="upload"/>
										<span className="file-upload-text"></span>
									</div>
									<p className="file-name text-success">specialityimage.jpg <a href="#" className="text-danger"><i className=''><FeatherIcon icon="x"/></i></a></p>
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
							<form action="/admin/specialities">
								<div className="delete-wrap text-center">
									<div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
									<h2>Sure you Want to delete</h2>
									<p>“Cardiolody”</p>
									<div className="submit-section">
										<button type="submit" className="btn btn-success me-2">Yes</button>
										<a href="#" className="btn btn-danger" data-bs-dismiss="modal">No</a>
									</div>								
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Modal --> */}
</>

  )
}

export default Specialities