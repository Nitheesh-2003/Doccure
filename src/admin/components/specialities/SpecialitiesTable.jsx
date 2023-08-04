import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { cardio, dental, neurology, ortho, urology } from '../imagepath';


const SpecialitiesTable = () => {
    const data = [
		{
      SID:"#4546",
			Product: "Urology",	
			img_url: urology,
      Action:"",
      		
		},
		{
			SID:"#4546",
			Product: "Orthopedic",	
			img_url: ortho,
      Action:"",
		},
		{
			SID:"#4546",
			Product: "Cardiologist",	
			img_url: cardio,
      Action:"",
		},
		{
			SID:"#4546",
			Product: "Dentist",	
			img_url: dental,
      Action:"",
			
		},
		{
			SID:"#4546",
			Product: "Neurology",	
			img_url: neurology,
      Action:"",
		},
		
		
	]
	const columns = [
        {
			name: 'SId',
			selector: row=>row.SID,
			sortable: true,	
			width:"150px",			
		},
					{
			name: 'Product',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="#" className="spl-img" ><img src={row.img_url} className="img-fluid" /></Link><span>{row.Product}</span>
             </Media.Body></Media>,
			width:"700px",
     
		},	
        {
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () => <div className="actions">
            <Link
              className="text-black"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              
            >
              <i className='me-1'><FeatherIcon icon="edit-3"/></i> Edit
            </Link>
            <Link
              className="text-danger"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              
            >
              <i className='me-1'><FeatherIcon icon="trash-2" /></i> Delete
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
  )
}

export default SpecialitiesTable;