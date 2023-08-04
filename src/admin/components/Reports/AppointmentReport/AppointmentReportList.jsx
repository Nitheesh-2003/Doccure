import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13 } from '../../imagepath';

const AppointmentReportList = () => {
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
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2} className="avatar avatar-img" /></Link><div className="text-secondary">{row.Doctor}<br/>
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
			name: 'Consultation Type',
			selector: row=> <Media ><Media.Body className="d-flex"><a href="#"  onClick={() => onClik()}></a><div className="text-secondary">{row.Consultationtype}<br/>
            <Link to="#" className="d-block text-primary mt-2">
                          <span className="d-flex align-items-center">
                            {row.call}
                          </span>
                        </Link></div></Media.Body></Media>,
                sortable: true, 
                 width:"250px",
			
		},
        
		{
			name: 'Date & Time',
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
		
		
        
		
	];
	

      
	
	const tableData = {
		columns,
		data,
        
	};
  return (
    <div className="card">
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
  )
}

export default AppointmentReportList