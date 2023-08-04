import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13 } from '../imagepath';

const PastAppointmentsTable = () => {
    const data = [
		{
            ID:"#2323",
			Patient: "Gobbs Siauw",
            age:"Male,40 Years Old",	
			img_url: avatar07,
      		Doctor:"Dr.John",
            img_url2:avatar05,
            Department:"Gyanoclogiest",
            Disease:"Allergies & Asthma", 
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2"><FeatherIcon icon="video"/> {"Video call"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"cancelled"
      		
		},
		{
			ID:"#4546",
			Patient: "Gobbs Siauw",
      		age:"Male,40 Years Old",	
			img_url: avatar04,
			Doctor:"Dr.Rayan",
            img_url2:avatar05,
            Department:"Gyanoclogiest",
            Disease:"Allergies & Asthma",
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2"><FeatherIcon icon="video"/> {"Video call"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"Completed",
		},
		{
			ID:"#4546",
			Patient: "Gobbs Siauw",
      		age:"Male,25 Years Old",	
			img_url: avatar02,
			Doctor:"Dr.Lester",
            img_url2:avatar05,
            Department:"Orthopaedics",
            Disease:"Tooth pain",
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2" ><FeatherIcon icon="message-square"/> {"chat"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
              status:"Completed",
		},
		{
			ID:"#4546",
			Patient: "Gobbs Siauw",
     		age:"Male,29 Years Old",	
			img_url: avatar05,
			Doctor:"Dr.Clint",
            img_url2: avatar02,
            Department:"Neurology",
            Disease:"pain on Knee",
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2" ><FeatherIcon icon="mic"/>{"Audio call"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
              status:"Completed",
		},
		{
			ID:"#8774",
			Patient: "Gobbs Siauw",
      		age:"Male,30 Years Old",	
			img_url: avatar13,
			Doctor:"Dr.Monroe",
            img_url2:avatar12,
            Department:"Hair Specialities",
            Disease:"Sleep problem",
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2" ><FeatherIcon icon="mic"/>{"Audio call"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
              status:"Completed",
		},
		{
			ID:"#8774",
			Patient: "Gobbs Siauw",
      		age:"Male,30 Years Old",	
			img_url: avatar11,
			Doctor:"Dr.Linda",
            img_url2:avatar06,
            Department:"Hair Specialities",
            Disease:"Sleep problem",
            Consultationtype:"Scheduled Appointment",
            call:<i className="me-2" ><FeatherIcon icon="mic"/>{"Audio call"}</i>,
			Date: "26 November 2022",
			time:"12/20/2022",
      		Amount:"$300.00",
            status:"cancelled"
		},
		
	]
	const columns = [
        {
			name: 'Id',
			selector: row=>row.ID,
			sortable: true,	
			width:"150px",			
		},
					{
			name: 'Patient',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url} className="avatar avatar-img" /></Link><div className="text-secondary">{row.Patient}<br/>
      <span className="d-block text-muted">{row.age}</span></div></Media.Body></Media>,
			width:"250px",
     
		},		
        {
			name: 'Doctor',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2}  className="avatar avatar-img" /></Link><div className="text-secondary">{row.Doctor}<br/>
      <span className="d-block text-muted">{row.Department}</span></div></Media.Body></Media>,
			width:"250px",
     
		},																					
		
		{
			name: 'Disease',
			selector: row=>row.Disease,
			sortable: true,	
			width:"250px",			
		},
        
        
		{
			name: 'Appointment Date&Time',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><div className="text-secondary">{row.Date}<br/>
            <span className="d-block text-muted">{row.time}</span></div></Media.Body></Media>,
			width:"250px",
		},
	
    
    {
			name: 'Amount',
			selector: row=>row.Amount,
			sortable: true,
			width:"250px",
		},
        {
			name: 'status',
			selector: row=>row.status,
			sortable: true,			
			cell: row => <Media ><span className={`badge badge-pill badge ${ row.status == "Completed" ? 'badge bg-badge-grey text-success' : row.status == "cancelled" ? 'badge bg-badge-grey text-danger' : "badge bg-badge-grey text-success" }`} ><i className="fas fa-circle me-1" />{row.status}</span><Media.Body></Media.Body></Media>,
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

export default PastAppointmentsTable;