import React, {useEffect,useState } from 'react';
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import {Link} from "react-router-dom";
import {drslider,IMG01, logo,spec,FooterLogo,Shape3,Shape2,Shape1,Doctor5,Doctor4,Doctor3,Doctor2,Doctor1,consult,exper,alarm,mapplus,bro5,bro4,bro3,bro2,bro1,spec7,spec6,spec5,spec4,spec3,spec2,spec1 } from './image.jsx';
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../header";
import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";

const Home1 =()=> {

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

  //nav transparent
  const [click, setClick] =useState (false);
  const [button, setButton] =useState (true);
  const [navbar,setNavbar] =useState (false);

  const handleClick =()=> setClick (!click);
  const closeMobileMenu =()=> setClick (false);

 

  const showButton =()=> {
    if (window.innerWidth <= 960) {
      setButton (false);
    }else {
      setButton(true);
    }
  };

  useEffect ( ()=>{
    showButton();
  }, []);
window.addEventListener('resize',showButton);

const changeBackground =()=> {
  if (window.scrollY >=95) {
    setNavbar (true);
  } else {
    setNavbar (false);
  }
}
window.addEventListener('scroll',changeBackground);

 

const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
   
      let pathnames = window.location.pathname
      const url = pathnames.split("/").slice(0, -1).join("/");

        return(
    <div className="main-wrapper multi-optn">
      {/* Home Banner */}
      <header className={`header header-trans ${navbar? 'header-trans-custom-active': 'header-trans custom'} `} style={{background: "transparent"}}  >
      {/* <header className="header header-trans custom" style={{background: "transparent"}}> */}
          <nav className="navbar navbar-expand-lg header-nav no-border">
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav white-font">
              
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
            </div>
            <ul className="nav header-navbar-rht right-menu">
                <li className="nav-item contact-item">
                    <div className="header-contact-img">
                        <i className="fas fa-phone-alt"></i>					
                    </div>
                    <div className="header-contact-detail">
                        <p className="contact-info-header">+1 315 369 5943</p>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link header-login white-bg" to="/login"><i className="fas fa-user-circle me-2"></i><span></span>login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link header-login" to="/login"><i className="fas fa-lock me-2"></i>Sign up</Link>
                </li>
            </ul>
          </nav>
        </header>
        
        {/* Home Banner */}
        <section className="section-search-3">
        <div className="container">
            <div className="banner-info">
            <div className="row align-items-center">
                <div className="col-lg-4">
                <div className="header-banner aos" data-aos="fade-up">
                    <h2>Search Doctor, <br /> <span className="header-highlight">Make an Appointment</span></h2>
                    <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="doctor-search aos" data-aos="fade-up">
                    <div className="doctor-form">
                    <form action="#" className="doctor-search-form trans">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Search Location" />
                                <i className="far fa-compass" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Gender" />
                                <i className="far fa-smile" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Department" />
                                <i className="fas fa-user-check" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <Link to="/patient/search-doctor" className="btn banner-btn">MAKE APPOINTMENT</Link>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* category select*/}
        <section className="doctor-category">
        <div className="container">
            <div className="row">
            <div className="col-md-4 aos" data-aos="fade-up">
                <div className="pop-box">
                <div className="top-section">
                    <div className="cat-icon">
                    <i className="fas fa-procedures" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Visit a Doctor</h3>
                    <p>250 +  Doctors</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4 aos" data-aos="fade-up">
                <div className="pop-box">
                <div className="top-section two">
                    <div className="cat-icon">
                    <i className="fas fa-plus-square" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Find a Pharmacy</h3>
                    <p>2560 +  Pharmacy</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4 aos" data-aos="fade-up">
                <div className="pop-box">
                <div className="top-section three">
                    <div className="cat-icon">
                    <i className="fas fa-city" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Find a Lab</h3>
                    <p>250 +  Testing Labs</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /category select*/}
        {/* Clinic Section */}
        <section className="clinic-specialities">
        <div className="container">
            <div className="section-header-three text-center aos" data-aos="fade-up">
            <h2>Clinic &amp; Specialities</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec} alt="" />
                    <h4>Orthopedic</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec1}  />
                    <h4>Laboratry</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec2} />
                    <h4>Neurology</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec3} />
                    <h4>Cardiology</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center aos" data-aos="fade-up">
                <div className="special-body">
                    <img src={spec4}  />
                    <h4>MRI Scans</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec5}  />
                    <h4>Primary Checkup</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec6} />
                    <h4>Testing</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec7}/>
                    <h4>Dentist</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="view-all-more text-center aos" data-aos="fade-up">	
            <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
            </div>
        </div>
        </section>
        {/* /Clinic Section */}
        {/* browse speciality*/}
        <section className="browse-section">
          <div className="container">
            <div className="section-header-three text-center aos" data-aos="fade-up">
              <h2>Browse by Specialities</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro1} alt="" />
                    </div>
                    <h4>Urology</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro2} alt=""/>
                    </div>
                    <h4>Neurology</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro3} alt="" />
                    </div>
                    <h4>Orthopedic</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro4} alt="" />
                    </div>
                    <h4>Cardiologist</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro1} alt="" />
                    </div>
                    <h4>Dentist</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro5} alt="" />
                    </div>
                    <h4>Heart surgery</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro1} alt="" />
                    </div>
                    <h4>Urology</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro2}alt="" />
                    </div>
                    <h4>Neurology</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro3} alt="" />
                    </div>
                    <h4>Orthopedic</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro4} alt="" />
                    </div>
                    <h4>Cardiologist</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro1} alt="" />
                    </div>
                    <h4>Dentist</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
                <div className="brower-box">
                  <div>
                    <div className="brower-img">
                      <img src={bro5} alt="" />
                    </div>
                    <h4>Heart surgery</h4>
                    <p>124 <span>Doctors</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-all-more text-center aos" data-aos="fade-up">	
              <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
            </div>
          </div>
        </section>
        {/* /browse speciality*/}
        {/* Doctor Section*/}
        <section className="doctor-divison">
          <div className="d-flex">
            <div className="doc-background aos" data-aos="fade-up">
              <h3>ARE YOU A DOCTOR?</h3>
              <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
              <Link to="/patient/doctor-profile" className="doc-bok-btn">Book Now</Link>
            </div>
            <div className="pat-background">
              <h3>ARE YOU A PATIENT?</h3>
              <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
              <Link to="/patient/booking" className="doc-bok-btn">Book Now</Link>
            </div>
          </div>
        </section>
        {/* /Doctor Section*/}

        {/* Book Doctors*/}
        <section className="book-section">
          <div className="container">
            <div className="section-header-three text-center">
              <h2>Book Our Best Doctor</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="book-best-doctors">
                  <div className="book-header">
                    <Link to="/patient/doctor-profile"><img src={Doctor1} alt="" className="img-fluid" /></Link>
                    <div className="img-overlay">
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="doctors-body">
                    <div className="inner-section">
                      <span className="float-left">PSICOLOGIST</span>
                      <div className="rating text-right">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-ratings">3.5</span>
                      </div>
                      <Link to="/patient/doctor-profile"><h4>Dr. Ruby Perrin</h4></Link>
                      <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                    </div>
                    <div className="row row-sm loc-details">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={mapplus} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Location</span>
                            <span className="data-info">Newyork, USA</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={alarm} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Available on</span>
                            <span className="data-info">Fri, 22 March</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={consult} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Consulting</span>
                            <span className="data-info">500+ Patients</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={exper} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">EXPERIENCE</span>
                            <span className="data-info">25+ Years</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center p-3">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="book-best-doctors">
                  <div className="book-header">
                    <Link to="/patient/doctor-profile"><img src={Doctor2} alt="" className="img-fluid" /></Link>
                    <div className="img-overlay">
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="doctors-body">
                    <div className="inner-section">
                      <span className="float-left">PSICOLOGIST</span>
                      <div className="rating text-right">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-ratings">3.5</span>
                      </div>
                      <Link to="/patient/doctor-profile"><h4>Dr. Darren Elder</h4></Link>
                      <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                    </div>
                    <div className="row row-sm loc-details">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={mapplus} />
                          </a> 
                          <a href="#">
                            <span className="available-info">Location</span>
                            <span className="data-info">Newyork, USA</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={alarm}  />
                          </a> 
                          <a href="#">
                            <span className="available-info">Available on</span>
                            <span className="data-info">Fri, 22 March</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={consult}  />
                          </a> 
                          <a href="#">
                            <span className="available-info">Consulting</span>
                            <span className="data-info">500+ Patients</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={exper} />
                          </a> 
                          <a href="#">
                            <span className="available-info">EXPERIENCE</span>
                            <span className="data-info">25+ Years</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center p-3">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="book-best-doctors">
                  <div className="book-header">
                    <Link to="/patient/doctor-profile"><img src={Doctor3} alt="" className="img-fluid" /></Link>
                    <div className="img-overlay">
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="doctors-body">
                    <div className="inner-section">
                      <span className="float-left">PSICOLOGIST</span>
                      <div className="rating text-right">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-ratings">3.5</span>
                      </div>
                      <Link to="/patient/doctor-profile"><h4>Dr. Deborah Angel</h4></Link>
                      <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                    </div>
                    <div className="row row-sm loc-details">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={mapplus} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Location</span>
                            <span className="data-info">Newyork, USA</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={alarm} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Available on</span>
                            <span className="data-info">Fri, 22 March</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={consult} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Consulting</span>
                            <span className="data-info">500+ Patients</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={exper} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">EXPERIENCE</span>
                            <span className="data-info">25+ Years</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center p-3">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                <div className="book-best-doctors">
                  <div className="book-header">
                    <Link to="/patient/doctor-profile"><img src={Doctor4} alt="" className="img-fluid" /></Link>
                    <div className="img-overlay">
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="doctors-body">
                    <div className="inner-section">
                      <span className="float-left">PSICOLOGIST</span>
                      <div className="rating text-right">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-ratings">3.5</span>
                      </div>
                      <Link to="/patient/doctor-profile"><h4>Dr. Sofia Brient</h4></Link>
                      <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
                    </div>
                    <div className="row row-sm loc-details">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={mapplus} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Location</span>
                            <span className="data-info">Newyork, USA</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={alarm} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Available on</span>
                            <span className="data-info">Fri, 22 March</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={consult} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">Consulting</span>
                            <span className="data-info">500+ Patients</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <a href="#">
                            <img src={exper} alt="" />
                          </a> 
                          <a href="#">
                            <span className="available-info">EXPERIENCE</span>
                            <span className="data-info">25+ Years</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm align-items-center p-3">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-all-more text-center aos" data-aos="fade-up">	
              <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
            </div>
          </div>
        </section>
        {/* /Book Doctors*/}
        {/* Blogs */}
        <section className="latest-blog">
          <div className="container">
            <div className="section-header-three text-center">
              <h2>Our Latest Blogs</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div className="blog-wrap">
                  <div className="image-holder">
                    <Link to="/blog/blog-details">
                      <img className="img-fluid" src={Shape1} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-wrap-body">
                    <h3><Link to="/blog/blog-details">In this hospital there are special surgeons</Link></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                      ut labore et..</p>
                    <div className="blog-footer">
                      <div className="row row-sm align-items-center">
                        <div className="col-6 text-left">
                          <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                        </div>
                        <div className="col-6 text-right">
                          <a href="#" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div className="blog-wrap">
                  <div className="image-holder">
                    <Link to="/blog/blog-details">
                      <img className="img-fluid" src={Shape2} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-wrap-body">
                    <h3><Link to="/blog/blog-details">World AIDS Day, designated on 1 December</Link></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                      ut labore et..</p>
                    <div className="blog-footer">
                      <div className="row row-sm align-items-center">
                        <div className="col-6 text-left">
                          <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                        </div>
                        <div className="col-6 text-right">
                          <a href="#" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
                <div className="blog-wrap">
                  <div className="image-holder">
                    <Link to="/blog/blog-details">
                      <img className="img-fluid" src={Shape3} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-wrap-body">
                    <h3><Link to="/blog/blog-details">More then 80 clinical trials launch to test coronavirus</Link></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                      ut labore et..</p>
                    <div className="blog-footer">
                      <div className="row row-sm align-items-center">
                        <div className="col-6 text-left">
                          <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                        </div>
                        <div className="col-6 text-right">
                          <a href="#" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Blogs */}
        {/* Footer */}
        <footer className="footer footer-2 custom-footer">
            {/* Footer Top */}
            <div className="footer-top">
              <div className="container-fluid">
                <div className="row aos" data-aos="fade-up">
                  <div className="col-lg-2 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Quick Links</h2>
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Mission</a></li>
                        <li><a href="#">Our Approach</a></li>
                        <li><a href="#">Our History</a></li>
                        <li><a href="#">Awards And Achievements</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Appointment</a></li>
                        <li><a href="#">Facilities</a></li>
                        <li><a href="#">Pricing Plans</a></li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-about">
                      <div className="footer-logo">
                        <img src={FooterLogo} alt="logo" />
                      </div>
                      <div className="footer-about-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                      <div className="footer-widget footer-contact mt-4">
                        <h2 className="footer-title">Our Location</h2>
                        <div className="footer-contact-info">
                          <div className="footer-address">
                            <span><i className="fas fa-map-marker-alt" /></span>
                            <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                          </div>
                          <p>
                            <i className="fas fa-phone-alt" />
                            +1 315 369 5943
                          </p>
                          <p className="mb-0">
                            <i className="fas fa-envelope" />
                            doccure@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Services</h2>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Diabetes</a></li>
                            <li><a href="#">Plastic Surgery</a></li>
                            <li><a href="#">Gastroenterology</a></li>
                            <li><a href="#">Gynecology</a></li>
                            <li><a href="#">Hepatology</a></li>
                            <li><a href="#">Neurology</a></li>
                            <li><a href="#">Radiology</a></li>
                            <li><a href="#">Rhinology</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li><a href="#">Obstetrics</a></li>
                            <li><a href="#">Ophthalmology</a></li>
                            <li><a href="#">Oral Health</a></li>
                            <li><a href="#">Orthopedics</a></li>
                            <li><a href="#">Osteology</a></li>
                            <li><a href="#">Otology</a></li>
                            <li><a href="#">Pediatrics</a></li>
                            <li><a href="#">Psychiatry</a></li>
                            <li><a href="#">Pulmonology</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-2 col-md-6">
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
                  <div className="col-lg-2 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Doctors</h2>
                      <ul>
                        <li>
                            <Link to="/doctor/appointments">Appointments</Link>
                        </li>
                        <li>
                            <Link to="/doctor/chat-doctor">Chat</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/doctor/doctor-register">Register</Link>
                        </li>
                        <li>
                            <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                </div>
              </div>
            </div>
            {/* /Footer Top */}
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="container-fluid">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">© 2020 <span>Doccure</span>. All rights reserved.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {/* Copyright Menu */}
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          <li><Link to="/terms">Terms and Conditions</Link></li>
                          <li><Link to="/privacy-policy">Policy</Link></li>
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
          {/* /Footer */}
    </div>
        );
    }

export default Home1;