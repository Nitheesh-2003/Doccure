import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar03, avatar04, avatar05, avatar07, avatar11, avatar13 } from '../../imagepath';


const InvoiceReportList = () => {
    const data = [
		{
            ID:"#4546",
            InvoiceNumber:"INV 0001",
			Patient: "Bess Twishes",	
			img_url: avatar07,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
      		
		},
		{
			ID:"#4546",
            InvoiceNumber:"INV 0003",
			Patient: "Abdul Aziz Lazis",	
			img_url: avatar04,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
		{
			ID:"#4546",
            InvoiceNumber:"INV 0004",
			Patient: "Alex Siauw",	
			img_url: avatar02,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
		{
			ID:"#4546",
            InvoiceNumber:"INV 0005",
			Patient: "Gobbs Siauw",	
			img_url: avatar05,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
		{
			ID:"#4546",
            InvoiceNumber:"INV 0006",
			Patient: "Deborah",	
			img_url: avatar13,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
		{
			ID:"#4546",
            InvoiceNumber:"INV 0007",
			Patient: "Sofia",	
			img_url: avatar11,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
        {
			ID:"#4546",
            InvoiceNumber:"INV 0008",
			Patient: "paul",	
			img_url: avatar03,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
        {
			ID:"#8774",
            InvoiceNumber:"INV 0002",
			Patient: "Bess Twishes",	
			img_url: avatar13,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Paid"
		},
		
	]
	const columns = [
        {
			name: 'Id',
			selector: row=>row.ID,
			sortable: true,	
           
			width:"200px",			
		},
        {
			name: 'Invoice Number',
			selector: row=>row.InvoiceNumber,
			sortable: true,	
            cell: row =><Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#transaction">
          
            <span className="text-primary user-name">
              {row.InvoiceNumber}
            </span>
          </Link>,
			width:"250px",			
		},
					{
			name: 'Patient',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url} className="avatar avatar-img" /></Link><Link to="/admin/profile"><span className="user-name">{row.Patient}</span>
                </Link></Media.Body></Media>,
			width:"250px",
     
		},		
       														
                
		{
			name: 'Date',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><div className="text-secondary">{row.Date}<br/>
            <span className="d-block text-muted">{row.time}</span></div></Media.Body></Media>,
			width:"250px",
		},
	
    
    {
			name: 'Total Amount',
			selector: row=>row.Amount,
			sortable: true,
			width:"300px",
		},
        {
			name: 'status',
			selector: row=>row.status,
			sortable: true,			
			cell: row => <span className="badge bg-badge-grey text-success">
            <i className="fas fa-circle me-1" /> {row.status}
          </span>,
			width:"250px",
		},
        {
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () => <div className="actions">
            
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

export default InvoiceReportList;