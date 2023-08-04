import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";
import { Modal, Button } from 'react-bootstrap';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13, doctor09, sort } from '../imagepath';
import ReviewsTable from './ReviewsTable';

const Reviews = () => {
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
              Total Ratings <span className="ms-1">48</span>
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
                <form action="/admin/reviews">
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
      {/* Ratings */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Ratings</h5>
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
                      <form action="/admin/reviews">
                        <p className="lab-title">Ratings</p>
                        <label className="custom_check w-100">
                          <input
                            type="checkbox"
                            name="year"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> 5
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> 4
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> 3
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> 2
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> 1
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
            <ReviewsTable/>
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Ratings */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Modal */}
  <div
    className="modal fade contentmodal"
    id="Ratings"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header justify-content-center border-bottom-0">
          <div>
            <h4 className="modal-title">Rating Details</h4>
            <button
              type="button"
              className="close-btn pos-top"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div>
            </button>
          </div>
        </div>
        <div className="modal-body">
          <div className="rating-wrapper mb-2">
            <h5>Consultation ID</h5>
            <p>#454445</p>
            <h5>Reviews</h5>
            <div className="ratings mb-3">
              <i className="far fa-star filled" />
              <i className="far fa-star filled" />
              <i className="far fa-star filled" />
              <i className="far fa-star filled" />
              <i className="far fa-star" />
            </div>
            <h5>Description</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* /Modal */}
  {/* Modal */}
  <div
    className="modal fade contentmodal"
    id="deleteModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header border-bottom-0 justify-content-end">
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="delete-wrap text-center">
              <div className="del-icon">
              <i className='delete-icon'><FeatherIcon icon="x-circle"/></i>
                <i className="feather-x-circle" />
              </div>
              <h2>Sure you Want to delete</h2>
              <p>“Rating”</p>
              <div className="submit-section">
                <button type="submit" className="btn btn-success me-2">
                  Yes
                </button>
                <Link to="#" className="btn btn-danger" data-bs-dismiss="modal" >
                  No
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  {/* /Modal */}
</>

  )
}

export default Reviews;