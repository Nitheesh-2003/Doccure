import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import SidebarNav from "../sidebar";
import {Productss,Product1,Product3,Product4,Product5,Product6} from "./image"
import FeatherIcon from 'feather-icons-react';

const InvoiceList=(props)=> {

  const data=[
    {
      id: "#IN001",
      CreatedDate: "9 Sep 2019",
      MedicineName: "Abilify",
      img_url2: Productss,
      TotalAmount: "$100.00",
      status: "paid",
    },
    {
      id: "#IN002",
      CreatedDate: "29 Oct 2019",
      MedicineName: "Actamin",
      img_url2: Product3,
      TotalAmount: "$200.00",
      status: "paid",
    },
    {
      id: "#IN003",
      CreatedDate: "25 Sep 2019",
      MedicineName: "Actamin",
      img_url2: Product4,
      TotalAmount: "$250.00",
      status: "Pending",
    },
    {
      id: "#IN004",
      CreatedDate: "9 Oct 2019",
      MedicineName: "Abilify",
      img_url2: Product5,
      TotalAmount: "$150.00",
      status: "Unpaid",
    },
    {
      id: "#IN005",
      CreatedDate: "19 Nov 2019",
      MedicineName: "Actamin",
      img_url2: Product6,
      TotalAmount: "$350.00",
      status: "paid",
    },
    {
      id: "#IN006",
      CreatedDate: "12 Oct 2019",
      MedicineName: "Actamin",
      img_url2: Product1,
      TotalAmount: "$300.00",
      status: "paid",
    },
  
  ]
  const columns = [
    {
  name: 'Invoice Number',
  selector: row=><Media><Link to="/pharmacyadmin/reportinvoice">{row.id}</Link></Media>,
  sortable: true,	           
  width:"200px",			
},

      {
  name: 'Medicine Name',			
  sortable: true,
  cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2} className="avatar avatar-img" /></Link><Link to="/admin/profile">
            </Link><span className="user-name">{row.MedicineName}</span></Media.Body></Media>,
  width:"250px",
 
},	
{
  name: 'Total Amount',
  selector: row=>row.TotalAmount,
  sortable: true,
  width:"300px",
},
{
  name: 'Created Date',
  selector: row=>row.CreatedDate,
  sortable: true,	
        cell: row =>
        
        <span>
          {row.CreatedDate}
        </span>,
  width:"250px",			
},	       														                    

    {
  name: 'status',
  sortable: true,			
  cell: row =><Media><span className={`badge rounded-pill inv-badge ${ row.status == "paid" ? 'bg-success' : row.status == "Pending" ? 'bg-danger' : row.status == "Unpaid" ? 'bg-warning':'' }`} >{row.status}</span></Media> ,
  width:"250px",
},
    {
  name: 'Action',
  selector: row=>row.action,
  sortable: true,	
  cell: () => <div className="actions">
        <a className="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
          <i className="me-1"><FeatherIcon icon="edit-3" /></i> Edit
        </a>
        <Link
          className="text-danger"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete_modal"
          
        >
          <i className="me-1"><FeatherIcon icon="trash-2" /></i> Delete
        </Link>
      </div>,
 width:"250px",
                       
},


    

];

const customStyles = {
    rows: {
      style: {
        minHeight: "80px", // override the row height
        borderBottomColor: "#e6e9f4",
        fontWeight: 500,
      },
    },
    headCells: {
      style: {
        paddingLeft: "1.5rem", // override the cell padding for head cells
        paddingRight: "12px",
        fontWeight: 500,
        fontSize: "14px",
        color: "#333333",
        minHeight: "30px",
        borderRadious: "9px",
      },
    },
    cells: {
      style: {
        paddingLeft: "1.5rem", // override the cell padding for data cells
        paddingRight: "12px",
        paddingBottom: "10px",
      },
    },
  };
  

const tableData = {
columns,
data,
    customStyles,
};



    return (
      <>
        <SidebarNav />
        <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Reports</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title">Invoice Reports List</h5>
                    </div>
                    <div className="col-auto custom-list d-flex">
                      <div className="form-custom me-2">
                        <div id="tableSearch" className="dataTables_wrapper" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                      <DataTableExtensions
                    {...tableData}
                  >
                    <DataTable
                      customStyles={customStyles}
                      noHeader
                      
                      defaultSortField="id"
                      defaultSortAsc={false}
                      pagination
                      highlightOnHover
                    />
                  </DataTableExtensions>
                  </div>
                </div>
              </div>
              <div id="tablepagination" className="dataTables_wrapper" />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Edit Details Modal */}
      <div
        className="modal fade"
        id="edit_specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content doctor-profile">
            <div className="modal-header">
              <h5 className="modal-title">Edit Invoice Report</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
               <i><FeatherIcon icon="x-circle" /></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Invoice Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Medicine Image</label>
                      <div className="custom-file" id="customFile2">
                        <label className="custom-file-upload">
                          <input type="file" id="site_logo1" name="site_logo1" />
                          <span className="file-upload-text" />
                          <span className="change-user">Choose File</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Medicine Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Total Amount</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>
                        Status <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="category"
                        required=""
                      >
                        <option value={1} defaultValue="selected">
                          Paid
                        </option>
                        <option value={2}>Unpaid</option>
                        <option value={3}>Pending</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Created Date</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Details Modal */}
      {/* Delete Modal */}
      <div
        className="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              <div className="delete-wrap text-center">
                <div className="del-icon">
                  <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
                </div>
                <h2>Sure you Want to delete</h2>
                <p>“Invoice Report”</p>
                <div className="submit-section">
                  <Link to="/pharmacyadmin/categories" className="btn btn-success me-2">
                    Yes
                  </Link>
                  <a href="#" className="btn btn-danger" data-bs-dismiss="modal">
                    No
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>

        
      </>
    );
  }


export default InvoiceList;
