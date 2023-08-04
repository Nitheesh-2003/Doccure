import React, {useEffect, useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";


const ConformEmail = () => {
  return (
    <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    <div className="header d-none">
      {/* Header Menu */}
      <ul className="nav nav-tabs user-menu">
        {/* Flag */}
        <li className="nav-item">
          <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
            <i className="light-mode"><FeatherIcon icon="sun"/></i>
            <i className="dark-mode"><FeatherIcon icon="moon"/></i>
          </Link>
        </li>
        {/* /Flag */}
      </ul>
      {/* Header Menu */}
    </div>
    <div className="row">
      <div className="col-md-12 login-wrap-bg">
        {/* Restart Password */}
        <div className="login-wrapper">
          <div className="loginbox email-confirm">
            <div className="success-icon">
              <i><FeatherIcon icon="check-circle"/></i>
            </div>
            <h3>Success !</h3>
            <p className="account-subtitle">
              A email has been send to youremail@domain.com. Please check for an
              email from company and click on the included link to reset your
              password.
            </p>
            <Link to="/admin/login" className="btn btn-primary">
              <i><FeatherIcon icon="home"/></i> Back to Login
            </Link>
          </div>
        </div>
        {/* /Restart Password */}
      </div>
    </div>
  </div>
  {/* /Main Wrapper */}
</>

  )
}

export default ConformEmail