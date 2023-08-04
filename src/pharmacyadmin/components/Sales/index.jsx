import React, { Component } from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import {Productss,Product1,Product2,Product3,Product4,Product5,Product6} from "../transaction/image"
import FeatherIcon from 'feather-icons-react';

const Sales =(props)=>{
    
  const data=[
    {
      id: "20170001",
      MedicineName: "Abilify,Actamin,Actamin",       
      TotalPrice: "$220",
      Date: "12-5-2020",
    },
    {
      id: "20169999",
      MedicineName: "Abilify,Actamin",     
      TotalPrice: "$100",
      Date: "13-5-2020",
    },
    {
      id: "20169998",
      MedicineName: "Abilify",      
      TotalPrice: "$150",
      Date: "14-5-2020",
    },
    {
      id: "20170002",
      MedicineName: "Abilify,Actamin,Actamin",    
      TotalPrice: "$220",
      Date: "15-5-2020",
    },
   
  ]
  const columns = [
    {
  name: 'Invoice No',
  selector: row=><Media><Link to="/pharmacyadmin/reportinvoice"></Link>{row.id}</Media>,
  sortable: true,	           
  width:"200px",			
},
    {
  name: 'Medicine Name',
  selector: row=>row.MedicineName,
  sortable: true,	
        cell: row =>
        
        <span>
          {row.MedicineName}
        </span>,
  width:"250px",			
},
    		       														                    
{
  name: 'Total Price',
  selector: row=>row.TotalPrice,
  sortable: true,
  width:"300px",
},
{
  name: 'Date',
  selector: row=>row.Date,
  sortable: true,
  width:"300px",
},
    {
  name: 'Action',
  selector: row=>row.action,
  sortable: true,	
  cell: () => <div className="actions">
        <a className="text-black" data-bs-toggle="modal" href="#edit_invoice_report">
          <i className="me-1"><FeatherIcon icon="edit-3" /></i>
        </a>
        <Link className="text-black" to="/pharmacyadmin/reportinvoice">
          <i className="fas fa-file-alt me-1"></i> Invoice
        </Link>
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


     
  

const tableData = {
columns,
data,
   
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
        <div className="col-sm-12 col-auto">
          <h3 className="page-title">Sales</h3>
        </div>
    </div>
  </div>
  {/* /Page Header */}
  <div className="row">
    <div className="col-md-12">
        {/* Recent Orders */}
        <div className="card">
          <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                    <h5 className="card-title">Sales List</h5>
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
              {/* /Recent Orders */}
          </div>
        </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* /Main Wrapper */}
  {/* Edit Details Modal */}
  <div
    className="modal fade"
    id="edit_invoice_report"
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
              <i className="feather-x-circle" />
              </button>
          </div>
          <div className="modal-body">
              <form>
                <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Invoice Number</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={20169998}
                            />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Medicine Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Abilify"
                            />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Total Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$150.00"
                            />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Created Date</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="14-5-2020"
                            />
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
                <p>“Sales”</p>
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

  
 export default Sales; 