import React, { useState,useEffect  } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from 'feather-icons-react';
import config from "config";
import { doctor_img,logo,banner_check,shapes_10,shapes_7,shapes_8,shapes_6,logo_one,banner_img,appoinment_img,phone_call,services_01,services_02,services_03,services_04,features_01,features_02,features_03,features_04,book_doctor_01,book_doctor_02,book_doctor_03,book_doctor_04,doctor_check,news_img,blog_11,blog_12,blog_13,footer_logo,icon6,icon3,icon2,icon4,icon1 } from "./image.jsx";

const Home10 = (props) => {

 //Aos

 useEffect(() => {
  AOS.init({duration: 1200,
    once: true});  
  
}, []);
   //mobile
 const [isSideMenu, setSideMenu] = useState("")
 const [isSideMenuone,setSideMenuone] =useState("")
 const [isSideMenutwo,setSideMenutwo] =useState("")
 const toggleSidebar = (value) => {
   console.log (value);
   setSideMenu(value)
   
 }
 const toggleSidebarone = (value) => {
   console.log (value);
   setSideMenuone(value)
   
 }
 const toggleSidebartwo = (value) => {
   console.log (value);
   setSideMenutwo(value)
   
 }
 console.log("Working", isSideMenu)
 
  const settings = {
    width:400,
    dots:false,
    autoplay:false,
    infinite: true,
     speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '10px',
     arrows: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              
            }
        }
    ]

  };
  const doctors = {
    width:400,
    dots:false,
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '10px',
    arrows: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              
            }
        }
    ]

  };
  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };


          
      return(
        <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Home Banner */}
    <div className="home-one-banner">
      <div className="bg-shapes">
        <img
          src={shapes_10}
          className="shape-01 aos"
          alt="img"
          data-aos="fade-right"
        />
        <img
          src={shapes_7}
          className="shape-03 aos"
          alt="img"
          data-aos="zoom-out"
        />
        <img
          src={shapes_8}
          className="shape-04 aos"
          alt="img"
          data-aos="fade-left"
        />
        <img
          src={shapes_6}
          className="shape-02 aos"
          alt="img"
          data-aos="fade-down"
        />
      </div>
      <div className="container">
    
          <header className="header">
            <div className="nav-bg">
          <nav className={`navbar navbar-expand-lg header-nav nav-transparent header-nav-one ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <Link to="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo_one} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo_one} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  to="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
           
              <ul className="main-nav black-font">
                {/* <li className={`${pathnames === "/home" ? "active" : ""}`}>
                <Link to="/home" to="/home">
                Home
                  </Link>
                </li> */}
                     <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home2") || pathnames.includes("home3") || pathnames.includes("home5")|| pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") && !pathnames.includes("home10") || pathnames.includes("home11") || pathnames.includes("home12") || pathnames.includes("home13") || pathnames.includes("home14") || pathnames.includes("home8") ? "active" : ""}`}>
                 <a  className={isSideMenu == "home" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="home" ? "": "home")} >Home <i className="fas fa-chevron-down" /></a>
                  { isSideMenu == "home" ? 
                  <ul className="submenu">
                  <li className={pathnames.includes("home")  && !pathnames.includes("home2") && !pathnames.includes("home3") && !pathnames.includes("home5")&& !pathnames.includes("homeslider1") && !pathnames.includes("home4") && !pathnames.includes("homeslider2") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home10") && !pathnames.includes("home11") && !pathnames.includes("home12") && !pathnames.includes("home13")  && !pathnames.includes("home14") && !pathnames.includes("home8")  ? "active" : ""}><Link to="/home">Home</Link></li>     
                    <li className={pathnames.includes("home2") ? "active" : ""}><Link to="/home2">Home 2</Link></li>
                    <li className={pathnames.includes("home3") ? "active" : ""}><Link to="/home3">Home 3</Link></li>                   
                    <li className={pathnames.includes("homeslider1") ? "active" : ""}><Link to="/homeslider1">Home 4</Link></li>

                    <li className={pathnames.includes("home5") ? "active" : ""}><Link to="/home5">Home 5</Link></li>
                    <li className={pathnames.includes("homeslider2") ? "active" : ""}><Link to="/homeslider2">Home 6</Link></li>  
                    
                    <li className={pathnames.includes("/home7") ? "active" : ""}><Link to="/home7">Home 7</Link></li>  
                   
                    <li className={pathnames.includes("/home8") ? "active" : ""}><Link to="/home8">Home 8</Link></li> 
                    <li className={pathnames.includes("home9") ? "active" : ""}><Link to="/home9">Home 9</Link></li>  
                    <li className={pathnames.includes("home10") ? "active" : ""}><Link to="/home10">Home 10</Link></li>
                    <li className={pathnames.includes("/home11") ? "active" : ""}><Link to="/home11">Home 11</Link></li>   
                    <li className={pathnames.includes("/home12") ? "active" : ""}><Link to="/home12">Home 12</Link></li>  
                    <li className={pathnames.includes("/home13") ? "active" : ""}><Link to="/home13">Home 13</Link></li> 
                    <li className={pathnames.includes("/home14") ? "active" : ""}><Link to="/home14">Home 14</Link></li>   
                   
                  </ul>
                  :""}

                </li>
                <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
                <a  className={isSideMenu == "doctors" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="doctors" ? "": "doctors")} >Doctors <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "doctors" ?  
                  <ul className={`submenu`}>
                    <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                      <Link to="/doctor/doctor-dashboard" onClick={()=>onhandleCloseMenu()}>Doctor Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("appointments") ? "active" : ""}>
                      <Link to="/doctor/appointments" onClick={()=>onhandleCloseMenu()}>Appointments</Link>
                    </li>
                    <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                      <Link to="/doctor/schedule-timing" onClick={()=>onhandleCloseMenu()}>Schedule Timing</Link>
                    </li>
                    <li className={pathnames.includes("my-patients") ? "active" : ""}>
                      <Link to="/doctor/my-patients" onClick={()=>onhandleCloseMenu()}>Patients List</Link>
                    </li>
                    <li className={pathnames.includes("patient-profile") ? "active" : ""}>
                      <Link to="/doctor/patient-profile" onClick={()=>onhandleCloseMenu()}>Patients Profile</Link>
                    </li>
                    <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                      <Link to="/doctor/chat-doctor" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("invoice") ? "active" : ""}>
                      <Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link>
                    </li>
                    <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                      <Link to="/doctor/profile-setting" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("review") ? "active" : ""}>
                      <Link to="/doctor/review" onClick={()=>onhandleCloseMenu()}>Reviews</Link>
                    </li>
                    <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                      <Link to="/doctor/doctor-register" onClick={()=>onhandleCloseMenu()}>Doctor Register</Link>
                    </li>
                    <li className={`has-submenu ${pathnames.includes("doctor-blog") ? "active" : ""}`}>
										<Link to="/doctor-blog" onClick={()=>onhandleCloseMenu()}>Blog</Link>
										<ul className="submenu"> 
											<li><Link to="/doctor-blog" onClick={()=>onhandleCloseMenu()}>Blog</Link></li>
											<li><Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog view</Link></li>
											<li><Link to="/blog/doctor-add-blog" onClick={()=>onhandleCloseMenu()}>Add Blog</Link></li>
										</ul>
									</li>
                  </ul>
                  :""
              }
                </li>
                <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                <a  className={isSideMenu == "patients" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="patients" ? "": "patients")} >Patients <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "patients" ? 
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") ? "active" : ""}`}>
                    <a  className={isSideMenutwo == "doctor" ? "subdrop" : ""} onClick={()=> toggleSidebartwo(isSideMenutwo =="doctor" ? "": "doctor")} >Doctors </a>              
                  { isSideMenutwo == "doctor" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                      <Link to="/patient/doctor-grid" onClick={()=>onhandleCloseMenu()}>Map Grid</Link>
                    </li>
                    <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                      <Link to="/patient/doctor-list" onClick={()=>onhandleCloseMenu()}>Map List</Link>
                    </li>
                    <li className={pathnames.includes("map-list") ? "active" : ""}>
                      <Link to="/patient/map-list" onClick={()=>onhandleCloseMenu()}>Map List 1</Link>
                      </li>
                  </ul>:""
                  }
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
                    <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/doctor-profile" onClick={()=>onhandleCloseMenu()}>Doctor Profile</Link>
                    </li>
                    <li className={pathnames.includes("booking") ? "active" : ""}>
                      <Link to="/patient/booking" onClick={()=>onhandleCloseMenu()}>Booking</Link>
                    </li>
                    <li className={pathnames.includes("checkout") ? "active" : ""}>
                      <Link to="/patient/checkout" onClick={()=>onhandleCloseMenu()}>Checkout</Link>
                    </li>
                    <li className={pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking-success" onClick={()=>onhandleCloseMenu()}>Booking Success</Link>
                    </li>
                    <li className={pathnames.includes("dashboard") ? "active" : ""}>
                      <Link to="/patient/dashboard" onClick={()=>onhandleCloseMenu()}>Patient Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("favourites") ? "active" : ""}>
                      <Link to="/patient/favourites" onClick={()=>onhandleCloseMenu()}>Favourites</Link>
                    </li>
                    <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                      <Link to="/patient/patient-chat" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>
                  :""
                }
                </li>            
                <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
                <a  className={isSideMenu == "pages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pages" ? "": "pages")} >Pages <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "pages" ? 
                  <ul className={`submenu`}>
                    <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                      <Link to="/pages/voice-call" onClick={()=>onhandleCloseMenu()}>Voice Call</Link>
                    </li>
                    <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                      <Link to="/pages/video-call" onClick={()=>onhandleCloseMenu()}>Video Call</Link>
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                    </li>

    
                    <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                      <Link to="/pages/calendar" onClick={()=>onhandleCloseMenu()}>Calendar</Link>
                    </li>
                    <li className={`${(pathnames).includes("/onboarding-email") ? "active" : ""}`}>
                      <Link to="/pages/onboarding-email">Doctor Onboarding</Link>
                    </li>
									<li className={`${(pathnames).includes("/patient-email") ? "active" : ""}`}>
                    <Link to="/pages/patient-email">Patient Onboarding</Link>
                  </li>
                    <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                      <Link to="/pages/component" onClick={()=>onhandleCloseMenu()}>Components</Link>
                    </li>
                   
    
                    <li className={`has-submenu ${(pathnames).includes("/invoice-view") ? "active" : ""}`}>
                <a  className={isSideMenuone == "invoices" ? "subdrop" : ""} onClick={()=> toggleSidebarone(isSideMenuone =="invoices" ? "": "invoices")} >Invoices </a>              
                  { isSideMenuone == "invoices" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                    <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                  </ul>:""
                  }
                </li>
                    <li className={`${(pathnames).includes("/blank-page") ? "active" : ""}`}>
                      <Link to="/pages/blank-page" onClick={()=>onhandleCloseMenu()}>Starter Page</Link>
                    </li>
                    <li className={pathnames.includes("/aboutus") ? "active" : ""}><Link to="/aboutus" onClick={()=>onhandleCloseMenu()}>About Us</Link></li>
                    <li className={pathnames.includes("/contactus") ? "active" : ""}><Link to="/contactus" onClick={()=>onhandleCloseMenu()}>Contact Us</Link></li>

                    <li className={pathnames.includes("login") ? "active" : ""}>
                      <Link to="/login" onClick={()=>onhandleCloseMenu()}>Login</Link>
                    </li>
                    <li className={pathnames.includes("/register") ? "active" : ""}>
                      <Link to="/register"onClick={()=>onhandleCloseMenu()}>Register</Link>
                    </li>
                    <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                      <Link to="/forgot-password" onClick={()=>onhandleCloseMenu()}>Forgot Password</Link>
                    </li>
                  </ul>
                  :""
              }
                </li>
                <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
                <a  className={isSideMenu == "blog" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="blog" ? "": "blog")} >Blog <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "blog" ? 
                  <ul className="submenu">
                    <li className={pathnames.includes("blog-list") ? "active" : ""}>
                      <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                    </li>
                    <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                      <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                    </li>
                    <li className={pathnames.includes("blog-details") ? "active" : ""}>
                      <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                    </li>
                  </ul>
                  :""
                   }
                </li>

                <li className="has-submenu">
                <a target="_blank" className={isSideMenu == "admin" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="admin" ? "": "admin")} >Admin<i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "admin" ? 
                 
                  <ul className="submenu">
                    <li><a href={`${config.publicPath}admin/login`} target="_blank" >Admin</a></li>
                    <li><a href={`${config.publicPath}pharmacyadmin`} target="_blank">Pharmacy Admin</a></li>
                  </ul>:""
                  }
                </li>
                
                <li className="login-link" onClick={()=>onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
            
            <ul className="nav header-navbar-rht right-menu">
									<li className="nav-item">
										<Link className="nav-link login-blue-bg" to="/login">Sign In</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link signup-white-bg" to="/register">Sign Up</Link>
									</li>
								</ul>
              </div>   
           </nav>
          </div>
        </header>
    
        <div className="row">
          <div
            className="col-lg-6 col-md-12 banner-left aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link className="smooth-menu" to="#appointments">
              <div className="scroll-down">
                <div className="scroll-text">
                  <p>scroll down</p>
                </div>
                <div className="scroll-center">
                  <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                  </div>
                  <div>
                    <span className="scroll-arrow-one" />
                  </div>
                  <div>
                    <span className="scroll-arrow-two" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="banner-info">
              <h2>Search Doctor,</h2>
              <h2>
                <span>Make an Appointment</span>
              </h2>
            </div>
            <div className="banner-details">
              <h4>
                <img
                  src={banner_check}
                  className="me-2"
                  alt=""
                />{" "}
                Instant Operation &amp; Appointment
              </h4>
              <h4>
                <img
                  src={banner_check}
                  className="me-2"
                  alt=""
                />{" "}
                100% Expert Doctors
              </h4>
              <p>
                Discover the best doctors, clinic &amp; hospital the city
                nearest to you.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 aos aos-init aos-animate" data-aos="fade-up">
            <img
              src={banner_img}
              className="img-fluid dr-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    {/* /Home Banner */}
    {/* Appoinment */}
    <section className="appoinment-section" id="appointments">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="appoinment-wrapper">
              <div className="appoinment-box aos" data-aos="fade-up">
                <form action="/patient/search-doctor">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group appoinment-location">
                       <i><FeatherIcon icon="search" /></i>  
                       {" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Doctors, Clinics, Etc ..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="appoinment-right">
                        <div className="form-group appoinment-location">
                          <i><FeatherIcon icon="map-pin" />  </i>{" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search location"
                          />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn appoinment-btn">
                          <i><FeatherIcon icon="search" /></i>                        
                          </button>
                          <button
                            type="submit"
                            className="btn appoinment-search-btn"
                          >
                            <i className="me-2" ><FeatherIcon icon="sliders" /></i> Advanced
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-bg">
        <div className="custom-contain">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-12 aos" data-aos="fade-up">
              <div className="appointment-left">
                <img
                  src={appoinment_img}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-12">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="appointment-grid w-100">
                    <div className="appointment-icon icon-primary">
                      <i className="fas fa-bed" />
                    </div>
                    <div className="appointment-info">
                      <Link to="/patient/search-doctor" className="appointment-link">
                        Visit a Doctor
                      </Link>
                      <p>
                        We hire the best specialists to deliver top-notch
                        diagnostic services for you.
                      </p>
                      <Link
                        to="/patient/search-doctor"
                        className="btn appointment-read-btn"
                      >
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="appointment-grid w-100">
                    <div className="appointment-icon icon-green">
                      <i className="fas fa-tablets" />
                    </div>
                    <div className="appointment-info">
                      <Link
                        to="pharmacy-/patient/search-doctor"
                        className="appointment-link"
                      >
                        Find a Pharmacy
                      </Link>
                      <p>
                        We provide the a wide range of medical services, so
                        every person could have the opportunity.
                      </p>
                      <Link
                        to="pharmacy-/patient/search-doctor"
                        className="btn appointment-read-btn"
                      >
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="appointment-grid w-100">
                    <div className="appointment-icon icon-red">
                      <i className="fas fa-vial" />
                    </div>
                    <div className="appointment-info">
                      <Link to="#" className="appointment-link">
                        Find a Lab
                      </Link>
                      <p>
                        We use the first-class medical equipment for timely
                        diagnostics of various diseases.
                      </p>
                      <Link to="#" className="btn appointment-read-btn">
                        Coming Soon <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-4 col-md-4 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="appointment-schedule w-100">
                    <h2 className="schedule-title">Schedule</h2>
                    <ul>
                      <li>
                        <span>Monday – Friday</span> 8.00 – 13.00
                      </li>
                      <li>
                        <span>Saturday</span> 8.00 – 15.00
                      </li>
                      <li>
                        <span>Sunday</span> 8.00 – 18.00
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-8 col-md-8 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="appointment-request w-100">
                    <h2 className="schedule-title text-white">
                      REQUEST AN APPOINTMENT
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="appointment-img-holder">
                        <img src={phone_call} alt="" />
                      </div>
                      <div className="appointment-info-holder">
                        <p>Call us on</p>
                        <h2>+1 (208) 567 0707</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Appoinment */}
    {/* Service Section */}
    <section className="service-section">
      <div className="container aos" data-aos="fade-up">
        <div className="section-header text-center aos" data-aos="fade-up">
          <h2 className="color-primary">High Quality Service for you</h2>
          <p className="sub-title color-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="service-grid">
              <div className="effect-oscar">
                <img
                  src={services_01}
                  className="img-fluid services-img"
                  alt=""
                />
                <div className="services-caption">
                  <div className="services-inner">
                    <div className="service-grid-icon">
                      <img
                        src={icon6}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>Orthopedic</p>
                    <Link to="/patient/doctor-profile" className="service-link">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="service-grid">
              <div className="effect-oscar">
                <img
                  src={services_02}
                  className="img-fluid services-img"
                  alt=""
                />
                <div className="services-caption">
                  <div className="services-inner">
                    <div className="service-grid-icon">
                      <img
                        src={icon3}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>Cardiologist</p>
                    <Link to="/patient/doctor-profile" className="service-link">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="service-grid">
              <div className="effect-oscar">
                <img
                  src={services_03}
                  className="img-fluid services-img"
                  alt=""
                />
                <div className="services-caption">
                  <div className="services-inner">
                    <div className="service-grid-icon">
                      <img
                        src={icon4}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>Dentist</p>
                    <Link to="/patient/doctor-profile" className="service-link">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <div className="service-grid">
              <div className="effect-oscar">
                <img
                  src={services_02}
                  className="img-fluid services-img"
                  alt=""
                />
                <div className="services-caption">
                  <div className="services-inner">
                    <div className="service-grid-icon">
                      <img
                        src={icon2}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>Neurology</p>
                    <Link to="/patient/doctor-profile" className="service-link">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Service Section */}
    {/* Doctor Section */}
    <section className="doctor-section">
      <div className="doctor-right-img aos" data-aos="fade-up">
        <img
          src={doctor_img}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="container">
        <div className="section-header text-center aos" data-aos="fade-up">
          <h2 className="color-primary">Book Our Doctor</h2>
          <p className="sub-title color-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 aos" data-aos="fade-up">
            <div className="doctor-book-slider slider">
             <Slider {...doctors}>
              <div className="doctor-profile-widget">
                <Link to="/patient/doctor-profile">
                  <img
                    src={book_doctor_01}
                    className="img-fluid book-doctor"
                    alt=""
                  />
                </Link>
                <div className="pro-content">
                  <div className="provider-info">
                    <div className="pro-icon">
                      <img
                        src={icon2}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-1">
                      <Link to="/patient/doctor-profile" tabIndex={0}>
                        Edward Willey
                        <img src={doctor_check} alt="" />
                      </Link>
                    </h3>
                    <p>Neurologist Specialist</p>
                    <div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          4.9 ( 82 )
                        </span>
                      </div>
                    </div>
                    <div className="content-info">
                      <div className="social-info">
                        <Link to="" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                      <div className="booking-btn">
                        <Link to="/patient/booking" className="btn book-btn">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doctor-profile-widget">
                <Link to="/patient/doctor-profile">
                  <img
                    src={book_doctor_02}
                    className="img-fluid book-doctor"
                    alt=""
                  />
                </Link>
                <div className="pro-content">
                  <div className="provider-info">
                    <div className="pro-icon">
                      <img
                        src={icon3}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-1">
                      <Link to="/patient/doctor-profile" tabIndex={0}>
                        Deborah Angel
                        <img src={doctor_check} alt="" />
                      </Link>
                    </h3>
                    <p>Cardiology Specialist</p>
                    <div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          4.9 ( 82 )
                        </span>
                      </div>
                    </div>
                    <div className="content-info">
                      <div className="social-info">
                        <Link to="" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                      <div className="booking-btn">
                        <Link to="/patient/booking" className="btn book-btn">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doctor-profile-widget">
                <Link to="/patient/doctor-profile">
                  <img
                    src={book_doctor_03}
                    className="img-fluid book-doctor"
                    alt=""
                  />
                </Link>
                <div className="pro-content">
                  <div className="provider-info">
                    <div className="pro-icon">
                      <img
                        src={icon1}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-1">
                      <Link to="/patient/doctor-profile" tabIndex={0}>
                        Merry Anderson
                        <img src={doctor_check} alt="" />
                      </Link>
                    </h3>
                    <p>Gastrologic Specialist</p>
                    <div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          4.9 ( 82 )
                        </span>
                      </div>
                    </div>
                    <div className="content-info">
                      <div className="social-info">
                        <Link to="" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                      <div className="booking-btn">
                        <Link to="/patient/booking" className="btn book-btn">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doctor-profile-widget">
                <Link to="/patient/doctor-profile">
                  <img
                    src={book_doctor_04}
                    className="img-fluid book-doctor"
                    alt=""
                  />
                </Link>
                <div className="pro-content">
                  <div className="provider-info">
                    <div className="pro-icon">
                      <img
                        src={icon4}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-1">
                      <Link to="/patient/doctor-profile" tabIndex={0}>
                        David Blackwell
                        <img src={doctor_check} alt="" />
                      </Link>
                    </h3>
                    <p>Dental Specialist</p>
                    <div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          4.9 ( 82 )
                        </span>
                      </div>
                    </div>
                    <div className="content-info">
                      <div className="social-info">
                        <Link to="" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                      <div className="booking-btn">
                        <Link to="/patient/booking" className="btn book-btn">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doctor-profile-widget">
                <Link to="/patient/doctor-profile">
                  <img
                    src={book_doctor_01}
                    className="img-fluid book-doctor"
                    alt=""
                  />
                </Link>
                <div className="pro-content">
                  <div className="provider-info">
                    <div className="pro-icon">
                      <img
                        src={icon2}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-1">
                      <Link to="/patient/doctor-profile" tabIndex={0}>
                        Edward Willey
                        <img src={doctor_check} alt="" />
                      </Link>
                    </h3>
                    <p>Dermatologist</p>
                    <div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          4.9 ( 82 )
                        </span>
                      </div>
                    </div>
                    <div className="content-info">
                      <div className="social-info">
                        <Link to="" target="_blank">
                          <i className="fab fa-facebook hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-linkedin hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-instagram hi-icon" />
                        </Link>
                        <Link to="" target="_blank">
                          <i className="fab fa-twitter hi-icon" />
                        </Link>
                      </div>
                      <div className="booking-btn">
                        <Link to="/patient/booking" className="btn book-btn">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-end">
          </div>
        </div>
      </div>
    </section>
    {/* /Doctor Section */}
    {/* Features Section */}
    <section className="features-section">
      <div className="container">
        <div className="section-header text-center aos" data-aos="fade-up">
          <h2 className="color-primary">Availabe Features in Our Clinic</h2>
          <p className="sub-title color-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 aos" data-aos="fade-up">
            <div className="features-section-slider slider">
              <Slider {...settings}>
              <div className="features-grid hvr-bounce-to-bottom">
                <div className="features-cricle">
                  <div className="features-round">
                    <img
                      src={features_01}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Operation</h4>
              </div>
              <div className="features-grid hvr-bounce-to-bottom">
                <div className="features-cricle">
                  <div className="features-round">
                    <img
                      src={features_02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Medical</h4>
              </div>
              <div className="features-grid hvr-bounce-to-bottom">
                <div className="features-cricle">
                  <div className="features-round">
                    <img
                      src={features_03}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Patient Ward</h4>
              </div>
              <div className="features-grid hvr-bounce-to-bottom">
                <div className="features-cricle">
                  <div className="features-round">
                    <img
                      src={features_04}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Laboratory</h4>
              </div>
              <div className="features-grid hvr-bounce-to-bottom">
                <div className="features-cricle">
                  <div className="features-round">
                    <img
                      src={features_01}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Operation</h4>
              </div>
             </ Slider>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-end">
          
          </div>
        </div>
      </div>
    </section>
    {/* /Features Section */}
    {/* News Section */}
    <section className="news-letter-bg">
      <div className="container">
        <div className="news-bg">
          <div className="row">
            <div
              className="col-lg-8 col-md-12 news-left aos"
              data-aos="fade-up"
            >
              <div>
                <h2>Grab Our Newsletter</h2>
                <p>To receive latest offers and discounts from the shop.</p>
              </div>
              <div>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control me-2"
                      placeholder="Enter Your Email Address"
                    />
                    <button type="submit" className="btn">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 aos" data-aos="fade-up">
              <div className="news-img">
                <img
                  src={news_img}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /News Section */}
    {/* News Section */}
    <section className="news-section">
      <div className="container">
        <div className="section-header text-center aos" data-aos="fade-up">
          <h2 className="color-primary">Let’s See Our Latest News</h2>
          <p className="sub-title color-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
            <div className="grid-news w-100">
              <div className="news-image">
                <Link to="/blog/blog-details">
                  <img
                    className="img-fluid"
                    src={blog_11}
                    alt="News Image"
                  />
                </Link>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <div className="news-date">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>4 Dec 2021</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="news-date">
                      <Link to="#" className="news-light-btn">
                        <i className="feather-tag me-2" />
                        <span>Heath Care</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="news-title">
                  <Link to="/blog/blog-details">
                    How to handle patient body in MRI
                  </Link>
                </h3>
                <p>
                  <Link to="/blog/blog-details">Read News</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
            <div className="grid-news w-100">
              <div className="news-image">
                <Link to="/blog/blog-details">
                  <img
                    className="img-fluid"
                    src={blog_12}
                    alt="News Image"
                  />
                </Link>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <div className="news-date">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>10 Dec 2021</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="news-date">
                      <Link to="#" className="news-light-btn">
                        <i className="feather-tag me-2" />
                        <span>Surgery</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="news-title">
                  <Link to="/blog/blog-details">
                    Doccure – Making your clinic painless visit?
                  </Link>
                </h3>
                <p>
                  <Link to="/blog/blog-details">Read News</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
            <div className="grid-news w-100">
              <div className="news-image">
                <Link to="/blog/blog-details">
                  <img
                    className="img-fluid"
                    src={blog_13}
                    alt="News Image"
                  />
                </Link>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <div className="news-date">
                      <Link to="#">
                        <i className="feather-calendar me-2" />
                        <span>15 Dec 2021</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="news-date">
                      <Link to="#" className="news-light-btn">
                        <i className="feather-tag me-2" />
                        <span>General</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="news-title">
                  <Link to="/blog/blog-details">
                    Benefits of consulting with an Online Doctor
                  </Link>
                </h3>
                <p>
                  <Link to="/blog/blog-details">Read News</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-btn text-center">
          <Link to="/blog/blog-details" className="btn view-more">
            View More <i className="fas fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
    {/* /News Section */}
    {/* Footer One */}
    <footer className="footer footer-one">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={footer_logo} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <Link to="/patient/search-doctor">Search for Doctors</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking">Booking</Link>
                  </li>
                  <li>
                    <Link to="/patient/dashboard">Patient Dashboard</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <Link to="/doctor/appointments">Appointments</Link>
                  </li>
                  <li>
                    <Link to="/patient/patient-chat">Chat</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="doctor-/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="feather-map-pin" />
                    </span>
                    <p>
                      3556 Beech Street, San Francisco,
                      <br />
                      California, CA <br />
                      94108
                    </p>
                  </div>
                  <p>
                    <i className="feather-phone" />
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="feather-mail" />
                    doccure@example.com
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2022 Doccure. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <Link to="/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Policy</Link>
                    </li>
                  </ul>
                </div>
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
    {/* /Footer One*/}
  </div>
  {/* /Main Wrapper */}
</>

      );
    
}

export default Home10;