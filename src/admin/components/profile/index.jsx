import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";

import { avatar02 } from '../imagepath';

const Profile = () => {
  return (
	  <>
	<SidebarNav />

	<div className="page-wrapper">
  <div className="content container-fluid">
    {/* Profile Information */}
    <div className="row">
      <div className="col-md-8 col-lg-8 col-xl-6">
        <div className="profile-info">
          <h4>My Profile</h4>
          <div className="profile-list">
            <div className="profile-detail">
              <label className="avatar profile-cover-avatar">
                <img
                  className="avatar-img"
                  src={avatar02}
                  alt="Profile Image"
                />
              </label>
              <div className="pro-name">
                <p>@ Johnson223</p>
                <h4>Johnson Samuel</h4>
              </div>
              <Link to="#" className="edit-pro">
                <i><FeatherIcon icon="edit"/></i> Edit
              </Link>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h6 className="pro-title">Personal Information</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis adipiscing arcu praesent tellus aliquam quam volutpat.
                  Etiam tincidunt habitant sit maecenas feugiat eget convallis.
                  Aliquam non viverra accumsan vulputate id aliquam et enim
                  vivamus.{" "}
                </p>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Date of Birth</h5>
                <p>15/12/2022</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Gender</h5>
                <p>Male</p>
              </div>
              <div className="col-md-4 mb-3">
                <h5>Age</h5>
                <p>46</p>
              </div>
              <div className="col-md-12">
                <h6 className="pro-title">Address &amp; Location</h6>
              </div>
              <div className="col-md-4">
                <h5>Address</h5>
                <p>4663 Agriculture Lane, Miami,</p>
              </div>
              <div className="col-md-4">
                <h5>Country</h5>
                <p>United States</p>
              </div>
              <div className="col-md-4">
                <h5>State</h5>
                <p>Florida</p>
              </div>
            </div>
          </div>
          <div className="profile-list">
            <div className="row">
              <div className="col-md-12">
                <div className="pro-title d-flex justify-content-between">
                  <h6>Account Information</h6>
                  <Link to="#" className="edit-pro">
                  <i><FeatherIcon icon="edit"/></i> Edit
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <h5>Email Address</h5>
                <p>johsonsamuel2023@gmail.com</p>
              </div>
              <div className="col-md-6 mb-3">
                <h5>Phone Number</h5>
                <p>+1 534883 487843</p>
              </div>
              <div className="col-md-6">
                <h5>Social Links</h5>
                <ul className="social-icon">
                  <li>
                    <Link to="#">
                      <i><FeatherIcon icon="twitter"/></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i><FeatherIcon icon="facebook"/></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i><FeatherIcon icon="linkedin"/></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i><FeatherIcon icon="instagram"/></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i><FeatherIcon icon="youtube"/></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Profile Information */}
  </div>
</div>
</>
  )
}

export default Profile;