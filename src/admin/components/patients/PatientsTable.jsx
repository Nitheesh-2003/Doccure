import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13 } from '../imagepath';

const PatientsTable = () => {
    const data = [
		{
            ID:"#3456",
      		Patient:"Bess Twishes",
            img_url2:avatar05,
            age:"Male,40 Years old",
            Specialities:"Neurologist", 
            Bloodgroup:"AB+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status1"
      		
		},
		{
			ID:"#4546",
      		Patient:"Abdul Aziz Lazis",
            img_url2:avatar02,
            age:"Male,25 Years old",
            Specialities:"Gyanoclogist", 
            Bloodgroup:"O-",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status2"
		},
		{
			ID:"#4546",
      		Patient:"Alex Siauw",
            img_url2:avatar07,
            age:"Male,29 Years old",
            Specialities:"Orthopaedics", 
            Bloodgroup:"A+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status3"
		},
		{
			ID:"#4546",
      		Patient:"Gobbs Siauw",
            img_url2:avatar05,
            age:"Male,29 Years old",
            Specialities:"Orthopaedics", 
            Bloodgroup:"B+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status4"
		},
		{
			ID:"#4547",
      		Patient:"Deborah",
            img_url2:avatar12,
            age:"Male,29 Years old",
            Specialities:"Gyanoclogist", 
            Bloodgroup:"AB+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status5"
		},
		{
			ID:"#7364",
      		Patient:"Sofia",
            img_url2:avatar06,
            age:"Male,29 Years old",
            Specialities:"Cardiologiest", 
            Bloodgroup:"A+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status6"
		},
		{
			ID:"#8774",
      		Patient:"Paul",
            img_url2:avatar04,
            age:"Male,29 Years old",
            Specialities:"Hair Specialities", 
            Bloodgroup:"O-",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status7"
		},
		{
			ID:"#8775",
      		Patient:"Bess Twishes",
            img_url2:avatar10,
            age:"Male,30 Years old",
            Specialities:"Hair Specialities", 
            Bloodgroup:"B+",
			Date: "26 November 2022",
			time:"12/20/2022",
      		TotalIncome:"$300.00",
            status:"status8"
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
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			><span className="user-name">{row.Patient}</span><br/><span className="d-block text-muted">{row.age}</span>
           </Link></Media.Body></Media>,
			width:"300px",
     
		},	
        {
			name: 'Last Visit',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><div><span className="user-name">{row.Date}</span><br/>
            <span className="d-block">{row.time}</span></div></Media.Body></Media>,
			width:"300px",
		},																				
		
		
        
        
		
        {
			name: 'Blood group',
			selector: row=>row.Bloodgroup,
			sortable: true,	
			width:"300px",			
		},
	
    
    {
			name: 'TotalIncome',
			selector: row=>row.TotalIncome,
			sortable: true,
			width:"300px",
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
			width:"300px",
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
				<DataTable className="datatable table table-borderless hover-table"
                  id="data-table"
               
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

export default PatientsTable;