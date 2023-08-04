import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import FeatherIcon from 'feather-icons-react';

import { Modal } from 'react-bootstrap';
import { icon01, icon02, icon03, product1, product2, product3, product4, product5, sort } from "../imagepath";

import SidebarNav from '../sidebar';


const Categories=(props)=>{
   
   const [show1, setShow1] =useState(false);
	const toggleFilterMenu1 = () =>{
		console.log(show1)
		setShow1(!show1)
	}

   const data = [
      {
        ID:"01",      		  
        Name:"Phytopathology",
        Createddate: "01-May-2020-12:00",     		      		
       },
      {
      ID:"02",      		  
      Name:"Family care",
      Createddate: "03-May-2020-08:00",     		      		
      },
      {
      ID:"03",      		  
      Name:"Cancer",
      Createddate: "05-May-2020-06:00",     		      		
      },
      {
      ID:"04",      		  
      Name:"Hair care",
      Createddate: "05-May-2020-01:00",     		      		
      },
      {
      ID:"05",      		  
      Name:"Skin care",
      Createddate: "05-May-2020-02:00",     		      		
      },
      {
      ID:"06",      		  
      Name:"Rare diseases",
      Createddate: "06-May-2020-06:00",     		      		
      }, 
      {
      ID:"07",      		  
      Name:"Baby care",
      Createddate: "07-May-2020-12:00",     		      		
      },  
      {
      ID:"08",      		  
      Name:"Inflammations",
      Createddate: "07-May-2020-05:00",     		      		
      },
      {
      ID:"09",      		  
      Name:"Sleep disorders",
      Createddate: "07-May-2020-08:00",     		      		
      }, 
      {
      ID:"10",      		  
      Name:"Infectious diseases",
      Createddate: "08-May-2020-02:00",     		      		
      }, 
     ]
     const columns = [
          {
           name: '#',
           selector: row=>row.ID,
           sortable: true,	
           width:"400px",			
        },
        {
         name: 'Name',
         selector: row=>row.Name,
         sortable: true,	
         width:"400px",			
      },           
    																					
      {
         name: 'Created date',
         selector: row=>row.Createddate,
         sortable: true,	
         width:"400px",			
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
       
     };
        return(
           
             
             <>
             <SidebarNav />
             {/* Page Wrapper */}
             <div className="page-wrapper">
             <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
                <div className="row">
                   <div className="col-sm-7 col-auto">
                      <h3 className="page-title">Categories</h3>
                   </div>
                   <div className="col-sm-5 col">
                      <a
                         href="#Add_Specialities_details"
                         data-bs-toggle="modal"
                         className="btn btn-primary float-end d-flex justify-content-between align-items-center"
                         >
                        {/* <FeatherIcon icon="plus-square" /> */}
                      <i className="me-1"><FeatherIcon icon="plus-square" /> </i>Add New
                      </a>
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
                               <h5 className="card-title">Categories List</h5>
                            </div>
                            <div className="col-auto custom-list d-flex">
                               <div className="form-custom me-2">
                                  <div id="tableSearch" className="dataTables_wrapper" />
                                  </div>
                                  <div className="SortBy">
                                     <div className="selectBoxes order-by">
                                     <p className="mb-0" onClick={(value)=>toggleFilterMenu1()}><img src={sort} className="me-2" alt="icon"/> Order by </p>
                                        
                                        <span className="down-icon">
                                        <FeatherIcon icon="chevron-down" />
                                        {/* <i className="feather-chevron-down" /> */}
                                        </span>
                                     </div>
                                     <div id="checkBox" style={{ display: show1 ? "block" : "none" }}>
                                        <form action="/pharmacyadmin/categories">
                                           <p className="lab-title">Order By </p>
                                           <label className="custom_radio w-100">
                                           <input type="radio" name="sort" />
                                           <span className="checkmark" /> ID
                                           </label>
                                           <label className="custom_radio w-100">
                                           <input type="radio" name="sort" />
                                           <span className="checkmark" /> Amount
                                           </label>
                                           <label className="custom_radio w-100">
                                           <input type="radio" name="sort" />
                                           <span className="checkmark" /> Date Created
                                           </label>
                                           <p className="lab-title">Sort By</p>
                                           <label className="custom_radio w-100">
                                           <input type="radio" name="sort" />
                                           <span className="checkmark" /> Ascending
                                           </label>
                                           <label className="custom_radio w-100">
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
                      </div>
                   </div>
                </div>
             </div>
             {/* /Page Wrapper */}
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
	                     <div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div>                       
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
                         <h5 className="modal-title">Edit Category</h5>
                         <button
                            type="button"
                            className="close-btn"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            >
                       <i className=''><FeatherIcon icon="x-circle"/></i>
                         </button>
                      </div>
                      <div className="modal-body">
                         <form>
                            <div className="row form-row">
                               <div className="col-12">
                                  <div className="form-group">
                                     <label>Category</label>
                                     <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Cardiology"
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
                         <i className='del-icon'><FeatherIcon icon="x-circle"/></i>
                         </button>
                      </div>
                      <div className="modal-body">
                         <div className="delete-wrap text-center">
                            <div className="del-icon">
                            <i className='delete-icon'><FeatherIcon icon="x-circle"/></i>
                            </div>
                            <h2>Sure you Want to delete</h2>
                            <p>“Category”</p>
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
  
  
 export default Categories; 