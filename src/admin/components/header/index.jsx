import React, { useEffect,useState,useContext} from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import { avatar01, avatar02, avatar03, avatar05, avatar06, logo, logoSmall } from '../imagepath'
import {Appcontext} from '../../../approuter'

const Header=(props)=> {

  let pathname = props.location.pathname;
	const { isAuth, setIsAuth } = useContext(Appcontext);
  const[task,settask]=useState(true);
  const[task1,settask1]=useState(true);
  const[dropdown,setdropdown]=useState(false);
  const[dropdown1,setdropdown1]=useState(false);

  const handletheme=()=>{
		document.body.classList.toggle('darkmode');
    settask(!task)
    settask1(!task1)
	}
  const handledropdown=()=>{
    setdropdown(!dropdown)
    setdropdown1(false)
	}
  const handledropdown1=()=>{
    setdropdown1(!dropdown1)
    setdropdown(false)
	}
  const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
  const handlesidebarmobilemenu=()=>{
		document.body.classList.toggle('slide-nav');
	}

 
    if(props.location.pathname.split("/")[1] === 'admin') {
      require('../../assets/css/feathericon.min.css')
      require('../../assets/js/feather.min.js')
      require('../../assets/plugins/fontawesome/css/fontawesome.min.css')
      require('../../assets/plugins/fontawesome/css/all.min.css')
      require('../../assets/plugins/fontawesome/js/fontawesome.min.js')
      require('../../assets/css/font-awesome.min.css')
      require('../../assets/css/style.css')
    }
    

    return (
      <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admin" className="logo logo-small">
            <img
              src={logoSmall}
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link to="#" id="toggle_btn" onClick={handlesidebar}>
            <FeatherIcon icon="chevrons-left" />
          </Link>
        </div>
        {/* /Logo */}
        {/* Search */}
        <div className="top-nav-search">
          <div className="main">
            <form className="search" method="post" action="/admin">
              <div className="s-icon">
                <i className="fas fa-search" />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Start typing your Search..."
              />
              <ul className="results">
                <li>
                  <h6>
                 <i className="me-1"> <FeatherIcon icon="calendar" /></i>
                  Appointments
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/appointment-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                  <i className="me-1"> <FeatherIcon icon="calendar" /></i> Specialities
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/specialities">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                  <i className="me-1"> <FeatherIcon icon="user" /></i> Doctors
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/doctor-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="me-1"> <FeatherIcon icon="user" /></i>Patients
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/patient-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* /Search */}
        {/* Mobile Menu Toggle */}
        <Link to="#" className="mobile_btn" id="mobile_btn" onClick={() => handlesidebarmobilemenu()}>
          <i className="fas fa-bars" />
        </Link>
        {/* /Mobile Menu Toggle */}
        {/* Header Menu */}
        <ul className="nav nav-tabs user-menu">
          {/* Flag */}
          <li className="nav-item">
            <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
              <i onClick={handletheme}  className={` light-mode ${task ? "active" : "" }`}> <FeatherIcon icon="sun" /></i>
              <i onClick={handletheme}  className={`dark-mode ${task1 ? "" : "active" }`}> <FeatherIcon icon="moon" /></i>
            </Link>
          </li>
          {/* /Flag */}
          {/* Notifications */}         
          <li className="nav-item dropdown noti-nav">
            <Link
              to="#"
               className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <FeatherIcon icon="bell" /> <span className="badge" />
            </Link>
            <div  className= "dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link to="#" className="clear-noti">
                  <FeatherIcon icon="more-vertical" />
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img
                            className="avatar-img"
                            alt=""
                            src={avatar02}
                          />
                        </span>
                        <div className="media-body">
                          <h6>
                            Travis Tremble{" "}
                            <span className="notification-time">18.30 PM</span>
                          </h6>
                          <p className="noti-details">
                            Sent a amount of $210 for his Appointment{" "}
                            <span className="noti-title">Dr.Ruby perin </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img
                            className="avatar-img"
                            alt=""
                            src={avatar05}
                          />
                        </span>
                        <div className="media-body">
                          <h6>
                            Travis Tremble{" "}
                            <span className="notification-time">12 Min Ago</span>
                          </h6>
                          <p className="noti-details">
                            {" "}
                            has booked her appointment to{" "}
                            <span className="noti-title">Dr. Hendry Watt</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <div className="avatar">
                          <img
                            className="avatar-img"
                            alt=""
                            src={avatar03}
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            Travis Tremble{" "}
                            <span className="notification-time">6 Min Ago</span>
                          </h6>
                          <p className="noti-details">
                            {" "}
                            Sent a amount $210 for his Appointment{" "}
                            <span className="noti-title">Dr.Maria Dyen</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <div className="avatar avatar-sm">
                          <img
                            className="avatar-img"
                            alt=""
                            src={avatar06}
                          />
                        </div>
                        <div className="media-body">
                          <h6>
                            Travis Tremble{" "}
                            <span className="notification-time">8.30 AM</span>
                          </h6>
                          <p className="noti-details">
                            {" "}
                            Send a message to his doctor
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown main-drop">
            <Link
              to="#"
               className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img src={avatar01} alt="" />
                <span className="status online" />
              </span>
            </Link>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={avatar01}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Robert Haddin</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <Link className="dropdown-item" to="/admin/profile">
                <i className="me-1"><FeatherIcon icon="user"/></i>My Profile
              </Link>
              <Link className="dropdown-item" to="/admin/profile">
              <i className="me-1"><FeatherIcon icon="edit"/></i> Edit Profile
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
              <i className="me-1"><FeatherIcon icon="sliders"/></i> Account Settings
              </Link>
              <hr className="my-0 ms-2 me-2" />
              <Link className="dropdown-item" to="/admin/login" onClick={()=>setIsAuth('admin')}>
              <i className="me-1"><FeatherIcon icon="log-out"/></i>
                Logout
              </Link>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Menu */}
      </div>
      {/* /Header */}
    </>
      );
  }


export default Header;
