import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import { Modal } from 'react-bootstrap';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import SidebarNav from "../sidebar";
import {Productss,Product1,Product3,Product4,Product5,Product6} from "./image"
import FeatherIcon from 'feather-icons-react';

const TransactionList=(props)=> {
 
 const data=[
        {
          id: "#IN001",
          ProductID: "#01",
          ProductName: "Abilify",
          img_url2: Productss,
          TotalAmount: "$100.00",
          status: "paid",
        },
        {
          id: "#IN002",
          ProductID: "#02",
          ProductName: "ITONE eye drops 10ml",
          img_url2: Product3,
          TotalAmount: "$200.00",
          status: "paid",
        },
        {
          id: "#IN003",
          ProductID: "#03",
          ProductName: "Safi Natural Blood Purifie",
          img_url2: Product4,
          TotalAmount: "$250.00",
          status: "paid",
        },
        {
          id: "#IN004",
          ProductID: "#04",
          ProductName: "Moisturization & Nourishment",
          img_url2: Product5,
          TotalAmount: "$150.00",
          status: "paid",
        },
        {
          id: "#IN005",
          ProductID: "#05",
          ProductName: "Blackhead Removal",
          img_url2: Product6,
          TotalAmount: "$350.00",
          status: "paid",
        },
        {
          id: "#06",
          ProductID: "#PT006",
          ProductName: "Abilify",
          img_url2: Product1,
          TotalAmount: "$300.00",
          status: "paid",
        },
        {
            id: "#07",
            ProductID: "#PT007",
            ProductName: "Blackhead Removal",
            img_url2: Product6,
            TotalAmount: "$250.00",
            status: "paid",
          },
          {
            id: "#08",
            ProductID: "#PT007",
            ProductName: "ITONE eye drops 10ml",
            img_url2: Product6,
            TotalAmount: "$150.00",
            status: "paid",
          },
          {
            id: "#09",
            ProductID: "#PT007",
            ProductName: "Whitening & Fairness",
            img_url2: Product6,
            TotalAmount: "$100.00",
            status: "paid",
          },
          {
            id: "#10",
            ProductID: "#PT007",
            ProductName: "Adderall",
            img_url2: Product6,
            TotalAmount: "$120.00",
            status: "paid",
          },
      ]
      const columns = [
        {
			name: 'Invoice No',
			selector: row=><Media><Link to="/pharmacyadmin/reportinvoice">{row.id}</Link></Media>,
			sortable: true,	           
			width:"200px",			
		},
        {
			name: 'Product ID',
			selector: row=>row.ProductID,
			sortable: true,	
            cell: row =>
            
            <span>
              {row.ProductID}
            </span>,
			width:"250px",			
		},
					{
			name: 'Product Name',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><Link to="#" className="avatar avatar-sm me-2 user-dt" ><img src={row.img_url2} className="avatar avatar-img" /></Link><Link to="/admin/profile">
                </Link><span className="user-name">{row.ProductName}</span></Media.Body></Media>,
			width:"250px",
     
		},		       														                    
    {
			name: 'Total Amount',
			selector: row=>row.TotalAmount,
			sortable: true,
			width:"300px",
		},
        {
			name: 'status',
			selector: row=>row.status,
			sortable: true,			
			cell: row => <span className="badge rounded-pill bg-success inv-badge">
            {row.status}
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
              data-bs-target="#delete_modal"
              
            >
              <i className="me-1"><FeatherIcon icon="trash-2" /></i> Delete
            </Link>
          </div>,
		 width:"250px",
													 
		},
		
		
        
		
	];
	
	const customStyles = {
        rows: {
          style: {
            minHeight: "80px", // override the row height
            borderBottomColor: "#e6e9f4",
            fontWeight: 500,
          },
        },
        headCells: {
          style: {
            paddingLeft: "1.5rem", // override the cell padding for head cells
            paddingRight: "12px",
            fontWeight: 500,
            fontSize: "14px",
            color: "#333333",
            minHeight: "30px",
            backgroundColor: "#E5E7F8",
            borderRadious: "9px",
            "&&:hover": {
              color: "#333333",
            },
          },
        },
        cells: {
          style: {
            paddingLeft: "1.5rem", // override the cell padding for data cells
            paddingRight: "12px",
            paddingBottom: "10px",
          },
        },
      };
      
	
	const tableData = {
		columns,
		data,
    customStyles,
	};


    return (
      <>
        <SidebarNav />      
              <>
                   
            <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title mb-0">Transactions</h3>
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
                  <h5 className="card-title">Transactions List</h5>
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
                  customStyles={customStyles}
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
           <div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div>
          </button>
        </div>
        <div className="modal-body">
          <div className="delete-wrap text-center">
            <div className="del-icon">
              <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
            </div>
            <h2>Sure you Want to delete</h2>
            <p>“Transactions List”</p>
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

</>


      </>
    );
  }


export default TransactionList;
