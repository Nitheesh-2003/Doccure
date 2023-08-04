import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13 } from '../imagepath';

const ReviewsTable = () => {
    const data = [
		{
            ID:"#4546",
			Patient: "Bess Twishes",
			img_url: avatar07,
      		Doctor:"Dr. Rayan",
            img_url2:avatar02,
            Department:"Gyanoclogist",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		{
            ID:"#4546",
			Patient: "Bess Twishes",
			img_url: avatar12,
      		Doctor:"Dr. Monroe",
            img_url2:avatar05,
            Department:"Hair Specialities",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		{
            ID:"#4546",
			Patient: "Abdul Aziz Lazis",
			img_url: avatar02,
      		Doctor:"Dr. Lester",
            img_url2:avatar05,
            Department:"Orthopaedics",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		{
            ID:"#4546",
			Patient: "Alex Siauw",
			img_url: avatar05,
      		Doctor:"Dr. Clint",
            img_url2: avatar02,
            Department:"Neurology",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		{
            ID:"#4546",
			Patient: "Dr. Sofia Brient",
			img_url: avatar04,
      		Doctor:"Dr. Lester",
            img_url2:avatar05,
            Department:"Orthopaedics",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		{
            ID:"#4546",
			Patient: "Deborah",
			img_url: avatar11,
      		Doctor:"Dr. Clint",
            img_url2: avatar05,
            Department:"Neurology",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
        {
            ID:"#4546",
			Patient: "Sofia",
			img_url: avatar03,
      		Doctor:"Dr. Richard",
            img_url2:avatar10,
            Department:"Orthopaedics",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
        {
            ID:"#4546",
			Patient: "Paul",
			img_url: avatar13,
      		Doctor:"Dr.John",
            img_url2:avatar05,
            Department:"Gyanoclogiest",
            Ratings:"", 
            Description:<span>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.</span>,
			Date: "26 November 2022",
			time:"12/20/2022",		   		
		},
		
	]
	const columns = [
        {
			name: 'Id',
			selector: row=><Link to="#" className="text-black" data-bs-toggle="modal" data-bs-target="#Ratings">{row.ID}</Link>,
			sortable: true,	
			width:"150px",			
		},
					{
			name: 'Patient',			
			sortable: true,
			cell: row => <Media ><Media.Body className="table-avatar"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url} className="avatar avatar-img" /></Link><Link to="/admin/profile"><span className="user-name">{row.Patient}</span></Link>
           </Media.Body></Media>,
			width:"250px",
     
		},		
        {
			name: 'Doctor',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2} className="avatar avatar-img" /></Link><Link to="/admin/profile" className="user-name"><span className="text-muted">{row.Doctor}<br/></span> <span className="tab-subtext">{row.Department}</span></Link></Media.Body></Media>,
			width:"250px",
     
		},	
        {
			name: 'Date & Time',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><span className="user-name">{row.Date}<br/><span className="d-block">{row.time}</span> </span>
            </Media.Body></Media>,
			width:"250px",
		},																				
		
		{
			name: 'Ratings',
			selector:() => <div className="ratings">
            <i className="far fa-star filled me-1 "></i>
            <i className="far fa-star filled me-1"></i>
            <i className="far fa-star filled me-1"></i>
            <i className="far fa-star filled me-1"></i>
            <i className="far fa-star me-1"></i>
        </div>,
			sortable: true,	
			width:"150px",			
		},
        {
			name: 'Description',
			selector: row=><span className="desc-info">{row.Description}</span>,
			sortable: true,
			width:"400px",
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
			<i><FeatherIcon icon="trash-2"/></i>
              Delete
            </Link>
          </div>,
		 width:"200px",
													 
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

export default ReviewsTable