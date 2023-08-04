import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';
// import {MedicineNamess,MedicineName1,MedicineName2} from "./image"
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {  product1, product2, product3, product4, product5, product6 } from '../imagepath';
import FeatherIcon from 'feather-icons-react';

const Purchase=()=>{
 
       
             const data = [
              {
                PurchaseDate:"10-5-2020",
                MedicineName :"Abilify",
                img_url2:product4,
                Medicinecategory:"Aripiprazole",
                PurchasePrice:"$336", 
                Supplier:"Bradley",
                ExpireDate: "13-06-20",
                Quantity:"50",                                        
              },
              {
                PurchaseDate:"11-5-2020",
                MedicineName :"Adderall",
                img_url2:product3,
                Medicinecategory:"Phytopathology",
                PurchasePrice:"$58", 
                Supplier:"Douglas",
                ExpireDate: "20-06-20",
                Quantity:"33",                                        
              },
              {
                  PurchaseDate:"12-5-2020",
                  MedicineName :"Actamin",
                  img_url2:product2,
                  Medicinecategory:"Phytopathology",
                  PurchasePrice:"$30", 
                  Supplier:"Douglas",
                  ExpireDate: "13-06-20",
                  Quantity:"20",                                        
              },
              {
                  PurchaseDate:"13-5-2020",
                  MedicineName :"Abilify",
                  img_url2:product1,
                  Medicinecategory:"Aripiprazole",
                  PurchasePrice:"$220",
                  Supplier:"Bradley", 
                  ExpireDate: "20-06-20",
                  Quantity:"60",                                        
              },
              {
                  PurchaseDate:"8-5-2020",
                  MedicineName :"Adderall",
                  img_url2:product3,
                  Medicinecategory:"Phytopathology",
                  PurchasePrice:"$15", 
                  Supplier:"Douglas",
                  ExpireDate: "13-06-20",
                  Quantity:"160",                                        
              },
              {
                  PurchaseDate:"9-5-2020",
                  MedicineName :"Actamin",
                  img_url2:product6,
                  Medicinecategory:"Phytopathology",
                  PurchasePrice:"$10", 
                  Supplier:"Douglas",
                  ExpireDate: "13-06-20",
                  Quantity:"605",                                        
              },
              
              
            ]
            const columns = [
                  {
                name: 'Purchase Date',
                selector: row=>row.PurchaseDate,
                sortable: true,	
                width:"250px",			
              },
                      
                  {
                name: 'Medicine Name',			
                sortable: true,
                cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#editModal" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link></h2><span
                className="user-name">{row.MedicineName}<br/>
                     </span></Media.Body></Media>,
                width:"400px",
               
              },																					
              
              {
                name: 'Purchase Price',
                selector: row=>row.PurchasePrice,
                sortable: true,	
                width:"250px",			
              },
              {
                name: 'Expire Date',
                selector: row=>row.ExpireDate,
                sortable: true,	
                width:"250px",			
              },
                  
                  
              
                
              
              {
                name: 'Quantity',
                selector: row=>row.Quantity,
                sortable: true,
                width:"250px",
              },
              {
                name: 'Action',
                selector: row=>row.action,
                sortable: true,	
                cell: () => <div className="actions">
                  <Link to="/pharmacyadmin/edit-purchase" className="text-black">
                    <i className='me-1'><FeatherIcon icon="edit-3"/></i>
                    Edit
                  </Link>
                     
                      <Link
                        className="text-danger"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                        
                      >
                        <i className='me-1'><FeatherIcon icon="trash-2"/></i>
                         Delete
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
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title mb-0">Purchase</h3>
          </div>
          <div className="col-sm-5 col">
            <Link to="/pharmacyadmin/add-purchase" className="btn btn-primary float-end d-flex justify-content-between align-items-center">
              <i className='me-1'><FeatherIcon icon="plus-square"/></i>
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
                  <h5 className="card-title">Purchase</h5>
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
            <p>“Purchase”</p>
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
            )
           
     }
  
  
 export default Purchase; 