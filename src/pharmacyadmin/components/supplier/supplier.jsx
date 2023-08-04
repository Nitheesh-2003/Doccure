import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import {Productss,Product1,Product2,Product3,Product4,Product5,Product6} from "./image"
import FeatherIcon from 'feather-icons-react';

const Supplier=(props)=>{
  
  const data=[
    {
      id: "1",
      Name: "Discarsa",
      Product: "Abilify",
      img_url2: Productss,      
      Phone: "+51 1542565",
      Email: "Discarsa@gmail.com",
      Address: "Paseo Los Robles",
      Company: "Discarsa Nicaragua",
    },
    {
      id: "2",
      Name: "Proveedor",
      Product: "Actamin",
      img_url2: Product2,
      Phone: "+51 23687541",
      Email: "proveedor@gmail.com",
      Address: "Av circunvalación # 234",
      Company: "mi farmacia",
    
    },
    {
      id: "3",
      Name: "Discarsa",
      Product: "Actamin",
      img_url2: Product3,
      Phone: "+51 96588552",
      Email: "Discarsa@gmail.com",
      Address: "Paseo Los Robles",
      Company: "Discarsa Nicaragua",
    
    },
  
  ]
  const columns = [
    {
  name: 'ID',
  selector: row=><Media>{row.id}</Media>,
  sortable: true,	           
  width:"200px",			
},
 
      {
  name: 'Product',			
  sortable: true,
  cell: row => <Media ><Media.Body className="d-flex"><Link to="#" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2} className="avatar avatar-img" /></Link><Link to="/admin/profile">
            </Link><span className="user-name">{row.Product}</span></Media.Body></Media>,
  width:"250px",
 
},
{
  name: 'Name',
  selector: row=>row.Name,
  sortable: true,	
        cell: row =>
        
        <span>
          {row.Name}
        </span>,
  width:"250px",			
},		       														                    
{
  name: 'Phone',
  selector: row=>row.Phone,
  sortable: true,
  width:"300px",
},
{
  name: 'Email',
  selector: row=>row.Email,
  sortable: true,
  width:"300px",
},   
{
  name: 'Address',
  selector: row=>row.Address,
  sortable: true,
  width:"300px",
},
{
  name: 'Company',
  selector: row=>row.Company,
  sortable: true,
  width:"300px",
},
    {
  name: 'Action',
  selector: row=>row.action,
  sortable: true,	
  cell: () => <div className="actions">
        <Link to="/pharmacyadmin/edit-supplier" className="text-black">
          <i className="me-1"><FeatherIcon icon="edit-3" /></i> Edit
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
        backgroundColor: "#E5E7F8",
        borderRadious: "9px",
        "&&:hover": {
          color: "#333333",
        },
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

        return(
            <>
             <SidebarNav />
             <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-sm-7 col-auto">
                      <h3 className="page-title mb-0">Supplier</h3>
                    </div>
                    <div className="col-sm-5 col">
                      <Link to="/pharmacyadmin/add-supplier" className="btn btn-primary float-end d-flex justify-content-between align-items-center">                        
                        <i className="me-1"><FeatherIcon icon="plus-square" /></i>
                        Add New
                      </Link>
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
                            <h5 className="card-title">Supplier</h5>
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
                    {/* /Recent Orders */}
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Wrapper */}
            {/* /Main Wrapper */}
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
                      <p>“Supplier”</p>
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
        )
     }
  
  
 export default Supplier; 