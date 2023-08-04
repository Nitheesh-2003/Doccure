import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";
import { Modal, Button } from 'react-bootstrap';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13, doctor09, sort } from '../imagepath';
import TransactionTable from './TransactionTable';

const Transaction = () => {
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
              Total Transactions <span className="ms-1">48</span>
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
                  <i className="feather-chevron-down" />
                </span>
              </div>
              <div id="checkBox" style={{ display: show1 ? "block" : "none" }}>
                <form action="/admin/transactions-list">
                  <p className="lab-title">Order By </p>
                  <label className="custom_radio w-100">
                    <input type="radio" name="sort" />
                    <span className="checkmark" /> Invoice Number
                  </label>
                  <label className="custom_radio w-100">
                    <input type="radio" name="sort" />
                    <span className="checkmark" /> Total Amount
                  </label>
                  <label className="custom_radio w-100 mb-4">
                    <input type="radio" name="sort" />
                    <span className="checkmark" /> ID
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
      {/* Transaction List */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Transaction</h5>
                </div>
                <div className="col-auto d-flex">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                </div>
              </div>
            </div>
            <TransactionTable/>
           
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Transaction List */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* <!-- Modal --> */}
			<div className="modal fade contentmodal" id="transaction" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content doctor-profile">
						<div className="modal-header border-bottom-0 justify-content-end pb-0">
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="feather-x-circle"></i></button>
						</div>
						<div className="modal-body pt-0">
							<div className="rating-wrapper">
								<form action="/admin/transactions-list">
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
										<button type="submit" className="btn btn-primary btn-download">Download Invoice</button>
									</div>		
								</form>
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
							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="feather-x-circle"></i></button>
						</div>
						<div className="modal-body">
							<div className="delete-wrap text-center">
								<div className="del-icon"><i className="feather-x-circle"></i></div>
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

export default Transaction;