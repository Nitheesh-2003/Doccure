import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import FeatherIcon from 'feather-icons-react';
import {  product1, product2, product3, product4, product5, product6 } from '../imagepath';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';

const Expired=(props)=>{
   
  const data = [
    {
      ID:"1",      		  
      img_url2:product1,
      Category:"Phytopathology",
      Price: "$22",
      Quantity:"THE ONLY 2",
      Discount:"0%",
      Expire:"THE PRODUCT IS EXPIRED",
      ProductName:"Abilify",       		      		
  },
    {
      ID:"2",      		  
      img_url2:product2,
      Category:"Amphetamine",
      Price: "$45",
      Quantity:"50",
      Discount:"10%",
      Expire:"THE PRODUCT IS EXPIRED",
      ProductName:"Actamin",       		      		
},
        {
            ID:"3",      		  
            img_url2:product3,
            Category:"Aripiprazole",
            Price: "$87",
            Quantity:"THE ONLY 5",
            Discount:"70%",
            Expire:"THE PRODUCT IS EXPIRED",
            ProductName:"Actamin",       		      		
		},
        {
            ID:"4",      		 
            img_url2:product4,
         	 Category:"Aripiprazole",
            img_url2:product5,
            Price: "$85",
            Quantity:"$225",
            Discount:"90%",
            Expire:"THE PRODUCT IS EXPIRED",
            ProductName:"Abilify",           		      		
		},
        {
            ID:"5",
      		 Category:"Amphetamine",
            img_url2:product5,
            Category:"Amphetamine",
            Price: "$105",
            Quantity:"$56",
            Discount:"20%",
            Expire:"THE PRODUCT IS EXPIRED",
            ProductName:"Actamin",                  		      		
		},
        {
            ID:"6",
            Category:"Aripiprazole",
            Price: "$65",
            Quantity:"THERE ONLY 7",
            Discount:"80%",
            Expire:"THE PRODUCT IS EXPIRED",
            img_url2:product6,            
            ProductName:"Actamin", 
      	     		
		},
		
		
	]
	const columns = [
        {
			name: 'Id',
			selector: row=>row.ID,
			sortable: true,	
			width:"250px",			
		},
						
        {
			name: 'Product Name',			
			sortable: true,
			cell: row => <Media ><Media.Body className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#editModal" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link><span
			data-bs-target="#editModal"
			data-bs-toggle="modal"
			className="user-name">{row.ProductName}
           </span></Media.Body></Media>,
			width:"400px",
     
		},																					
    {
			name: 'Category',
			selector: row=>row.Category,
			sortable: true,	
			width:"250px",			
		},
    {
			name: 'Price',
			selector: row=>row.Price,
			sortable: true,	
			width:"250px",			
		},		
    {
			name: 'Quantity',
      cell: row => <Media><span className={`btn btn-sm ${ row.Quantity == "THERE ONLY 7" ? 'bg-danger-light' : row.Quantity == "THE ONLY 5" ? 'bg-danger-light' : row.Quantity == "THE ONLY 2" ? 'bg-danger-light':'' }`} >{row.Quantity}</span> <Media.Body> </Media.Body></Media>,
			sortable: true,	
			width:"250px",			
		},	
    {
			name: 'Discount',
			selector: row=>row.Discount,
			sortable: true,	
			width:"250px",			
		},
    {
			name: 'Expire',
      cell:row=> <Media><span className="btn btn-sm bg-danger-light">{row.Expire}</span></Media>,
			sortable: true,	
			width:"250px",			
		},
      
        		       
    {
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () => <div className="actions">
            <Link
              className="text-black"
              data-bs-toggle="modal"
              to="#edit_specialities_details"             
            >
              <i className='me-1'><FeatherIcon icon="edit-3"/></i> Edit
            </Link>
            <Link
              className="text-danger"
              to="#delete_modal"
              data-bs-toggle="modal"
              data-bs-target="#delete_modal"
              
            >
              <i className='me-1'><FeatherIcon icon="trash-2" /></i> Delete
            </Link>
          </div>,
		 width:"450px",
													 
		},
		
		
        
		
	];
	

	
	const tableData = {
		columns,
		data,
        // customStyles,
	};
        return(
            <>
             <SidebarNav />
             <div className="page-wrapper">
              <div className="content container-fluid">
                  
              {/* <!-- Page Header --> */}
                  <div className="page-header">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="page-title">Expired</h3>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Page Header --> */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card">
                      <div className="card-header border-bottom-0">
                          <div className="row align-items-center">
                            <div className="col">
                              <h5 className="card-title">Expired List</h5>
                            </div>
                            <div className="col-auto custom-list d-flex">
                              <div className="form-custom me-2">
                                <div id="tableSearch"  className="dataTables_wrapper"></div>
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
                                          // customStyles={customStyles}
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
                </div>
              </div>
            </div>
          </div>
                <>
          {/* Add Modal */}
          <div
            className="modal fade"
            id="Add_Specialities_details"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content doctor-profile">
                <div className="modal-header">
                  <h3 className="mb-0">Add Category</h3>
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <FeatherIcon icon="x-circle" />
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row form-row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Category</label>
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
          {/* /ADD Modal */}
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
                  <h5 className="modal-title">Edit Outstock</h5>
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <FeatherIcon icon="x-circle" />
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row form-row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Outstock</label>
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
                    <p>“Outstock”</p>
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
  
  
 export default Expired; 