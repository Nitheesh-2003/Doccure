import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13 } from '../../imagepath';

const IncomeReportList = () => {
    const data = [
		{
            ID:"#3456",
      		Doctor:"Dr.John",
            img_url2:avatar05,
            Specialities:"Neurologist", 
            NoofAppointments:"545",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status1"
      		
		},
		{
			ID:"#4546",
      		Doctor:"Dr.Rayan",
            img_url2:avatar02,
            Specialities:"Gyanoclogist", 
            NoofAppointments:"545",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status2"
		},
		{
			ID:"#4546",
      		Doctor:"Dr.Lester",
            img_url2:avatar07,
            Specialities:"Orthopaedics", 
            NoofAppointments:"545",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status3"
		},
		{
			ID:"#4546",
      		Doctor:"Dr.Clint",
            img_url2:avatar05,
            Specialities:"Orthopaedics", 
            NoofAppointments:"787",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status4"
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
			name: 'Doctor',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#doctorlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#doctorlist"
			data-bs-toggle="modal"
			className="user-name">{row.Doctor}
           </Link></Media.Body></Media>,
			width:"250px",
     
		},																					
		
		{
			name: 'Specialities',
			selector: row=>row.Specialities,
			sortable: true,	
			width:"250px",			
		},
        
        
		{
			name: 'MemberSince',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><div className="user-name">{row.Date}<br/>
            <span className="d-block">{row.time}</span></div></Media.Body></Media>,
			width:"250px",
		},
        {
			name: 'Number Of Appointments',
			selector: row=>row.NoofAppointments,
			sortable: true,	
			width:"250px",			
		},
	
    
    {
			name: 'TotalIncome',
			selector: row=>row.TotalIncome,
			sortable: true,
			width:"250px",
		},
        {
			name: 'Account status',
			selector: row=>row.status,
			sortable: true,			
			cell: row => <label className="toggle-switch" htmlFor={row.status}>
			<input
			  type="checkbox"
			  className="toggle-switch-input"
			  id={row.status}
			  defaultChecked=""
			/>
			<span className="toggle-switch-label">
			  <span className="toggle-switch-indicator" />
			</span>
		  </label>,
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

export default IncomeReportList;