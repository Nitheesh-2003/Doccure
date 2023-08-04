import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Header from "../../header"
import Footer from "../../footer"


const BlankPage =(props)=> {

        return(
            <div>
				<Header {...props}/>
                <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Blank Page</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Blank Page</h2>
						</div>
					</div>
				</div>
			</div>
            
            <div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h5>Blank Page</h5>
						</div>
					</div>
				</div>

			</div>	
			<Footer {...props}/>
      </div>
        )
    }


export default BlankPage;