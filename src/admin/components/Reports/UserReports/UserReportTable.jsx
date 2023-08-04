import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar03, avatar04, avatar05, avatar07, avatar11, avatar13 } from '../../imagepath';



const UserReportTable = () => {
    const data = [
		{
            ID:"#2345",
			PatientName: "Deborah",	
			img_url: avatar07,
            Appointments:"45",
            Amount:"$3430.00",
            Action:"",
      		
		},
		{
			ID:"#4534",
			PatientName: "Gobbd Siauw",	
			img_url: avatar04,
            Appointments:"34",
            Amount:"$3430.00",
            Action:"",
		},
		{
			ID:"#4544",
			PatientName: "paul",	
			img_url: avatar02,
            Appointments:"67",
            Amount:"$3430.00",
            Action:"",
		},
		{
			ID:"#4546",
			PatientName: "Bess Twishes",	
			img_url: avatar05,
            Appointments:"54",
            Amount:"$330.00",
            Action:"",
			
		},
		{
			ID:"#4546",
			PatientName: "Abdul Aziz Lazis",	
			img_url: avatar13,
            Appointments:"54",
            Amount:"$3430.00",
            Action:"",
		},
		{
			ID:"#4546",
			PatientName: "Alex Siauw",	
			img_url: avatar11,
            Appointments:"54",
            Amount:"$9330.00",
            Action:"",
		},
        {
			ID:"#5567",
			PatientName: "Sofia",	
			img_url: avatar03,
            Appointments:"45",
            Amount:"$3430.00",
            Action:"",
		},
        {
			ID:"#8774",
			PatientName: "Bess Twishes",	
			img_url: avatar13,
            Appointments:"45",
            Amount:"$330.00",
            Action:"",
		},
		
	]
	const columns = [
        {
			name: 'ID',
			selector: row=>row.ID,
			sortable: true,	
			width:"250px",			
		},
					{
			name: 'PatientName',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="spl-img" ><img src={row.img_url} className="avatar avatar-img" /></Link><Link to="/admin/profile"> <span className="user-name">{row.PatientName}</span>
            </Link></Media.Body></Media>,
			width:"500px",
     
		},	
        {
			name: 'Number of Appointment',
			selector: row=>row.Appointments,
			sortable: true,	
			width:"500px",			
		},
        {
			name: 'Total Amount',
			selector: row=>row.Amount,
			sortable: true,	
			width:"500px",			
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

export default UserReportTable;