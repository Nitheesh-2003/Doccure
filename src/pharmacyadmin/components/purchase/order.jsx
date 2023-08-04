import React, {useEffect, useState} from 'react';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const Orders =()=>{
  
  const data = [
		{
        ID:"1",
        SupplierID:256, 
      SupplierName :"Douglas Meyer",
        Orderby:"Trinity General Hospital",
		    Addorder:"10-5-2020", 	
      	Orderlist:"Dolo 650(CIpla)  0",	
      		
		},
		{
      ID:"7",
      SupplierID:205, 
      SupplierName :"Kurt Wooten",
      Orderby:"Mercy Vale Clinic",
      Addorder:"10-5-2020", 	
      Orderlist:"Dolo 650(CIpla)  0",	
    
    
},
{
  ID:"4",
  SupplierID:156, 
  SupplierName :"Joanne Fry",
    Orderby:"Hope Haven Hospital",
    Addorder:"10-5-2020", 	
    Orderlist:"Dolo 650(CIpla)  0",	
  


},
{
  ID:"6",
  SupplierID:35, 
  SupplierName :"Vickie Pritchett",
  Orderby:"Kindred Soul Clinic",
  Addorder:"10-5-2020", 	
  Orderlist:"Dolo 650(CIpla)  0",	
  


},
{
  ID:"5",
  SupplierID:23, 
  SupplierName :"Christopher Johnson",
  Orderby:"Hill Crest Clinic",
  Addorder:"10-5-2020", 	
  Orderlist:"Dolo 650(CIpla)  0",	


},
{
  ID:"2",
  SupplierID:20, 
  SupplierName :"Tyler Robinson",
  Orderby:"Grand Valley Clinic",
  Addorder:"10-5-2020", 	
  Orderlist:"Dolo 650(CIpla)  0",	


},
{
  ID:"3",
  SupplierID:15, 
  SupplierName :"Kurt Wooten",
  Orderby:"Mercy Vale Clinic",
  Addorder:"10-5-2020", 	
  Orderlist:"Tektonik(None)  2",	
  


},
			
		
	]

  
	const columns = [
    {
			name: '#',
			selector: row=>row.ID,
			sortable: true,	
			width:"300px",			
		},
    {
			name: 'Supplier ID',
			selector: row=>row.SupplierID,
			sortable: true,	
			width:"300px",			
		},						
    {
			name: 'Supplier Name',			
			sortable: true,
			selector: row=>row.SupplierName,			
			width:"300px",     
		},																									
    {
			name: 'Orderby',
			selector: row=>row.Orderby,
			sortable: true,	
			width:"300px",			
		},
    {
			name: 'Add Order',
			selector: row=>row.Addorder,
			sortable: true,	
			width:"300px",			
		},
    {
			name: 'Order list',
			selector: row=>row.Orderlist,
			sortable: true,	
			width:"300px",			
		},
    {
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () =>
      <div className="actions">
          <a
              data-bs-toggle="modal"
              href="#delete_modal"
              className="text-danger"
              >
          <i className="me-1"><FeatherIcon icon="trash-2"/></i> Delete
          </a>
        </div>,
		 width:"300px",
													 
		},
		
		
        
		
	];
	

	
	const tableData = {
		columns,
		data,
     
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
              <div className="row">
                  <div className="col-12">
                    <h3 className="page-title">Order</h3>
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
                              <h5 className="card-title">Order List</h5>
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
            {/* <!-- Delete Modal --> */}
            <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content doctor-profile">
                  <div className="modal-header border-bottom-0 justify-content-end">
                    <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i><FeatherIcon icon="x-circle"/></i></button>
                  </div>
                  <div className="modal-body">
                    <div className="delete-wrap text-center">
                    <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
                      <h2>Sure you Want to delete</h2>
                      <p>“Order”</p>
                      <div className="submit-section">
                        <Link to="/pharmacyadmin/categories" className="btn btn-success me-2">Yes</Link>
                        <a href="#" className="btn btn-danger" data-bs-dismiss="modal">No</a>
                      </div>								
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Delete Modal --> */}
            </>
             </>
        );
     };
  
  
 export default Orders; 