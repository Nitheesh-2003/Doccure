import React, {Component } from 'react'
import {Link} from "react-router-dom";
import Header from '../../header';
import Footer from '../../footer';
import FeatherIcon from 'feather-icons-react';

const Contactus =(props)=> {

        return(
					<>
		<Header {...props}/>
		{/* Breadcrumb */}
		<div className="breadcrumb-bar">
			<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-md-12 col-12">
				<nav aria-label="breadcrumb" className="page-breadcrumb">
					<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/home">Home</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Contact Us
					</li>
					</ol>
				</nav>
				<h2 className="breadcrumb-title">Contact Us</h2>
				</div>
			</div>
			</div>
		</div>
		{/* /Breadcrumb */}
		{/* Page Content */}
		<section className="contact-section">
			<div className="container">
			<div className="row mb-5">
				<div className="col-md-12 text-center">
				<h3 className="mb-4">Contact Us</h3>
				<p>
					Great doctor if you need your family member to get effective
					immediate assistance, emergency treatment or a simple consultation.
				</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 d-flex">
				<div className="contact-box flex-fill">
					<div className="infor-img">
					<div className="image-circle">
					<i><FeatherIcon icon="phone" /></i>						
					</div>
					</div>
					<div className="infor-details text-center">
					<label>Phone Number</label>
					<p>+152 534-468-854</p>
					</div>
				</div>
				</div>
				<div className="col-md-4 d-flex">
				<div className="contact-box flex-fill">
					<div className="infor-img">
					<div className="image-circle bg-primary">
						<FeatherIcon icon="mail" />					
					</div>
					</div>
					<div className="infor-details text-center">
					<label>Email</label>
					<p>contact@example.com</p>
					</div>
				</div>
				</div>
				<div className="col-md-4 d-flex">
				<div className="contact-box flex-fill">
					<div className="infor-img">
					<div className="image-circle">
						<FeatherIcon icon="map-pin" />						
					</div>
					</div>
					<div className="infor-details text-center">
					<label>Location</label>
					<p>C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
					</div>
				</div>
				</div>
			</div>
			</div>
		</section>
		{/* Contact Form */}
		<section className="contact-form">
			<div className="container">
			<div className="section-header text-center">
				<h2>Get in touch!</h2>
			</div>
			<div className="row">
				<div className="col-md-12">
				<form action="">
					<div className="row">
					<div className="col-md-6">
						<div className="form-group">
						<label>
							Your Name <span>*</span>
						</label>
						<input type="text" className="form-control" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
						<label>
							Your Email <span>*</span>
						</label>
						<input type="text" className="form-control" />
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
						<label>Subject</label>
						<input type="text" className="form-control" />
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
						<label>
							Comments <span>*</span>
						</label>
						<textarea
							className="form-control"
							defaultValue={"\n\t\t\t\t\t\t\t\t\t\t\t"}
						/>
						</div>
					</div>
					</div>
					<button className="btn bg-primary">Send Message</button>
				</form>
				</div>
			</div>
			</div>
		</section>
		{/* /Contact Form */}
		{/* Contact Map */}
		<section className="contact-map d-flex">
			<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.716346058072!2d-95.5565430855612!3d29.872453233633234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cfe4516785ed%3A0x774974592a609121!2s54%20Northwest%20Fwy%20%23558%2C%20Houston%2C%20TX%2077040%2C%20USA!5e0!3m2!1sen!2sin!4v1631855334452!5m2!1sen!2sin"
			allowFullScreen=""
			loading="lazy"
			/>
		</section>
		{/* /Contact Map */}
		<Footer {...props}/>
		</>

        )
    }


export default Contactus;