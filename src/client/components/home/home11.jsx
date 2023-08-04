import React, { useState,useEffect  } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import FeatherIcon from 'feather-icons-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "config";
import {banner6, book_doctor_05,book_doctor_06,book_doctor_07,book_doctor_08,blog_01,blog_02,blog_04,best_doctor_check,doctor_img,logo,banner_check,shapes_10,shapes_7,shapes_8,shapes_6,logo_one,banner_img,appoinment_img,phone_call,services_01,services_02,services_03,services_04,features_01,features_02,features_03,features_04,features_05,features_06,book_doctor_01,book_doctor_02,book_doctor_03,book_doctor_04,doctor_check,news_img,blog_11,blog_12,blog_13,footer_logo,icon6,icon3,icon2,icon4,icon1,icon5 } from "./image.jsx";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Select2 from 'react-select2-wrapper';

const Home11 = (props) => {

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

  const [gender, setGender] = useState([
    { text: 'male' },
    { text: 'female' },
    
]);

  const[currentSlide,setCurrentSlide] =useState(1)
    
  useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

  const settings = {
    width:400,
    dots:false,
  
    infinite: true,
    speed: 500,
    slidesToShow:4,
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

 

      const pageForslide = {
      customPaging: function(i) {
        return (
         <button>{i+1}</button>
        );
      },
      afterChange: function (newIndex) {
        console.log(newIndex,"oldnew")
        setCurrentSlide(newIndex+1)
      },
      autoplay :true,
      autoplaySpeed : 2000 ,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      // infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
      return(
        <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Header */}
          <header className="header header-trans header-trans-two" style={{background: "rgb(255, 255, 255)"}}>
            <div className="nav-bg-two">
              <nav className="navbar navbar-expand-lg header-nav no-border">
                <div className="navbar-header">
                <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                    <span className="bar-icon blue-bar">
                      <span />
                      <span />
                      <span />
                    </span>
                  </a>
                  <Link to="/home" className="navbar-brand logo">
                <img src={logo_one} className="img-fluid" alt="Logo" />
              </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/home" className="menu-logo">
                      <img src={logo} className="img-fluid" alt="Logo" />
                    </Link>
                    <Link to="#0" id="menu_close" className="menu-close" onClick={() => onhandleCloseMenu()}>
                      <i className="fas fa-times"></i>
                    </Link>
                   </div>
                   <ul className="main-nav black-font grey-font">
             
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
                  </ul>
                  :""
                  }
                </li>
                <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                <a  className={isSideMenu == "patients" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="patients" ? "": "patients")} >Patients <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "patients" ? 
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("doctor-profile") && !pathnames.includes("search-doctor") ? "active" : ""}`}>
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
                    <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
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
                    <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>:""
                  }
                </li>
                <li className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}>
                <a  className={isSideMenu == "pharmacy" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pharmacy" ? "": "pharmacy")} >Pharmacy </a>              
                  { isSideMenu == "pharmacy" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("Pharmacy-index") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link></li>
                    <li className={pathnames.includes("Pharmacy-details") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link></li>
                    <li className={pathnames.includes("pharmacy-search") ? "active" : ""}><Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link></li>
                    <li className={pathnames.includes("product-all") ? "active" : ""}><Link to="/Pharmacy/product-all">Product</Link></li>
                    <li className={pathnames.includes("product-description") ? "active" : ""}><Link to="/Pharmacy/product-description">Product Description</Link></li>
                    <li className={pathnames.includes("cart") ? "active" : ""}><Link to="/Pharmacy/cart">Cart</Link></li>
                    <li className={pathnames.includes("product-checkout") ? "active" : ""}><Link to="/Pharmacy/product-checkout">Product Checkout</Link></li>
                    <li className={pathnames.includes("payment-success") ? "active" : ""}><Link to="/Pharmacy/payment-success">Payment Success</Link></li>
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
    
                    <li className={pathnames.includes("login") ? "active" : ""}>
                      <Link to="/login" onClick={()=>onhandleCloseMenu()}>Login</Link>
                    </li>
                    <li className={pathnames.includes("/register") ? "active" : ""}>
                      <Link to="/register"onClick={()=>onhandleCloseMenu()}>Register</Link>
                    </li>
                    <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                      <Link to="/forgot-password" onClick={()=>onhandleCloseMenu()}>Forgot Password</Link>
                    </li>
                  </ul>:""
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
                { ((pathnames.includes("/") || pathnames.includes("/home") ||  pathnames.includes("/home5")) &&  (!pathnames.includes("/home2")) && (!pathnames.includes("/home3")) && (!pathnames.includes("/homeslider1")) ) ?
                     <li className="has-submenu">
                     <a  className={isSideMenu == "admin" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="admin" ? "": "admin")} >Admin <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "admin" ?
                     <ul className="submenu">
                       <li><Link  target="_blank" to="/admin/login">Admin</Link></li>
                       <li><Link  target="_blank" to="/pharmacyadmin">Pharmacy Admin</Link></li>
                     </ul>:""
                    }
                   </li> :
                    <li>
                    <Link href={`${config.publicPath}/admin/login`} target="_blank" to="/admin/login">
                      Admin
                    </Link>
                  </li> 
                }
                <li className="login-link" onClick={()=>onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
                </div>
                <ul className="nav header-navbar-rht right-menu">
                  <li className="nav-item">
                    <Link className="nav-link btn-two rounded-pill" to="/login">
                    <FeatherIcon icon="user" size ="17"/> Sign In / Sign Up
                      {/* <i className="feather-user me-1" />  */}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* /Header */}
          {/* Banner Two */}
          <div className="home-banner-two">
            <span className="slider-counter-three">{currentSlide}/4
            </span>
              <div className="home-banner-three-slider">   
              <Slider {...pageForslide}>
                <div className="profile-widget slider-img-one" />

                <div className="profile-widget slider-img-two"/>

                    
                <div className="profile-widget slider-img-three" />

                    
                <div className="profile-widget slider-img-four" />              
              </Slider>   
                 
                  
              </div>
         
            <div className="container">
              <div className="banner-two-form">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-12">
                  <div className="">
                    <div className="app-form aos" data-aos="fade-up">
                      <div className="search-doctor">
                        <div className="search-area">
                          <h2 className="text-center">
                            Search Doctor, Make an Appointment
                          </h2>
                          <form className="search-input">
                            <div className="row">
                              <div className="col-12 col-md-12">
                                <div className="form-group">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-md-12">
                                <div className="form-group">
                                  <label>Gender</label>
                                  {/* <Select2  className="select form-control "
                                  data={gender}
                                  options={{
                                placeholder: ' '  }} /> */}
                                  <select className="select form-control form-select ">
                                    <option>Male</option>
                                    <option>Female</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12 col-md-12">
                                <div className="form-group">
                                  <label>Department</label>
                                  <select className="select form-control form-select ">
                                    <option>Surgen</option>
                                    <option>Cardiologist</option>
                                    <option>Gynacologist</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="submit-section">
                              <button
                                type="submit"
                                className="btn search-btn btn-two"
                              >
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* /Banner Two */}
          {/* Looking Section */}
          <section className="looking-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header aos" data-aos="fade-up">
                    <h2 className="color-primary">What are you looking for?</h2>
                    <p className="color-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="looking-grid w-100 hvr-bounce-to-right">
                    <div className="looking-small-icon">
                      <i className="fas fa-user-md" />
                    </div>
                    <div className="looking-info">
                      <Link to="/patient/search-doctor" className="looking-link">
                        Visit a Doctor
                      </Link>
                      <p>
                        We hire the best specialists to deliver top-notch diagnostic
                        services for you.
                      </p>
                    </div>
                    <div className="looking-big-icon">
                      <i className="fas fa-user-md" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="looking-grid w-100 hvr-bounce-to-right">
                    <div className="looking-small-icon">
                      <i className="fas fa-tablets" />
                    </div>
                    <div className="looking-info">
                      <Link to="pharmacy-/patient/search-doctor" className="looking-link">
                        Find a Pharmacy
                      </Link>
                      <p>
                        We provide the a wide range of medical services, so every
                        person could have the opportunity.
                      </p>
                    </div>
                    <div className="looking-big-icon">
                      <i className="fas fa-tablets" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="looking-grid w-100 hvr-bounce-to-right">
                    <div className="looking-small-icon">
                      <i className="fas fa-vial" />
                    </div>
                    <div className="looking-info">
                      <Link to="#" className="looking-link">
                        Find a Lab
                      </Link>
                      <p>
                        We use the first-class medical equipment for timely
                        diagnostics of various diseases.
                      </p>
                    </div>
                    <div className="looking-big-icon">
                      <i className="fas fa-vial" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Looking Section */}
          {/* Best Doctor Section */}
          <section className="best-doctor-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header aos" data-aos="fade-up">
                    <h2 className="color-primary">Book Our Best Doctor</h2>
                    <p className="color-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="best-doctor-slider slider aos" data-aos="fade-up">
                    <Slider {...settings}>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_05}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon2} className="img-fluid" alt="" />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Edward Willey
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img src={book_doctor_06} className="img-fluid" alt="" />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon3} className="img-fluid" alt="" />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Deborah Angel
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_07}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img
                              src={icon1}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Merry Anderson
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_08}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon4} className="img-fluid" alt=""/>
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            David Blackwell
                          </Link>
                        </h3>
                        <p>Cosmetic Specialist</p>
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img src={book_doctor_05} className="img-fluid" alt=""/>
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon2} className="img-fluid" alt="" />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Edward Willey
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_06}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img
                              src={icon3}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Deborah Angel
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_07}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon1} className="img-fluid" alt=""/>
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            Merry Anderson
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="best-doctor-widget">
                      <div className="best-doctor-image">
                        <Link to="#">
                          <img
                            src={book_doctor_08}
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                        <div className="overlay">
                          <div className="pro-icon">
                            <img src={icon4} className="img-fluid" alt="" />
                          </div>
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
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="doctor-verify-overlay d-flex">
                          <Link to="#">
                            <span className="doctor-writter">Verified</span>
                            <img src={best_doctor_check} alt="" />
                          </Link>
                        </div>
                        <div className="doctor-fav-btn">
                          <Link
                            to="#"
                            className="fav-icon"
                            tabIndex={0}
                          >
                            <i className="far fa-bookmark" />
                          </Link>
                        </div>
                      </div>
                      <div className="provider-info text-center">
                        <h3 className="mb-1">
                          <Link to="/patient/doctor-profile" tabIndex={0}>
                            David Blackwell
                          </Link>
                        </h3>
                        <p>Cosmetic Specialist</p>
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
                          <div className="doctor-appointment-btn">
                            <Link to="/patient/booking" className="btn btn-two">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Slider> 
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="aos" data-aos="fade-up">
                    <Link to="/patient/booking" className="btn btn-two">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Best Doctor Section */}
          {/* Features Clinic Section */}
          <section className="features-clinic-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header aos" data-aos="fade-up">
                    <h2 className="color-primary">
                      Available Features in Our Clinic
                    </h2>
                    <p className="color-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row clinic-row aos" data-aos="fade-up">
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_01} alt="" />
                    <h4>Operation</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_02} alt="" />
                    <h4>Medical</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_03} alt="" />
                    <h4>Patient Ward</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_04} alt="" />
                    <h4>Test Room</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_05} alt="" />
                    <h4>ICU</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex clinic-main-grid">
                  <div className="clinic-grid w-100 hvr-bounce-to-right">
                    <img src={features_06} alt="" />
                    <h4>Laboratory</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Features Clinic Section */}
          {/* High Service Section */}
          <section className="high-service-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header" data-aos="fade-up">
                    <h2 className="color-primary">High Quality Service for you</h2>
                    <p className="color-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon1} className="img-fluid" alt="" />                       
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                          <img src={icon1} className="img-fluid" alt="" /> 
                        </div>
                        <div className="pro-text">
                          <h4>Urology</h4>
                          <p>124 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Urology</h4>
                      <p className="high-service-text">124 Doctors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon2} className="img-fluid" alt=""/>                           
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                        <img src={icon2} className="img-fluid" alt=""/>
                        </div>
                        <div className="pro-text">
                          <h4>Neurology</h4>
                          <p>21 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Neurology</h4>
                      <p className="high-service-text">21 Doctors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon6} className="img-fluid" alt=""/>
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                          <img src={icon6} className="img-fluid" alt=""/>
                        </div>
                        <div className="pro-text">
                          <h4>Orthopedic</h4>
                          <p>50 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Orthopedic</h4>
                      <p className="high-service-text">50 Doctors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon3} className="img-fluid service-img-small mt-2" alt="" />
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                        <img src={icon3} className="img-fluid service-img-big" alt="" />                         
                        </div>
                        <div className="pro-text">
                          <h4>Cardiologist</h4>
                          <p>140 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Cardiologist</h4>
                      <p className="high-service-text">140 Doctors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon4} className="img-fluid" alt="" />         
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                            <img src={icon4} className="img-fluid" alt="" />
                        </div>
                        <div className="pro-text">
                          <h4>Dentist</h4>
                          <p>80 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Dentist</h4>
                      <p className="high-service-text">80 Doctors</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="high-service-box aos" data-aos="fade-up">
                    <div className="service-box-inner">
                      <div className="high-service-img">
                        <span>
                          <img src={icon5} className="img-fluid" alt="" />                          
                        </span>
                      </div>
                      <div className="overlay">
                        <div className="pro-icon">
                        <img src={icon5} className="img-fluid" alt="" /> 
                        </div>
                        <div className="pro-text">
                          <h4>Ultrasound</h4>
                          <p>56 Doctors</p>
                        </div>
                      </div>
                      <h4 className="high-service-head">Ultrasound</h4>
                      <p className="high-service-text">56 Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="high-btn aos" data-aos="fade-up">
                    <Link to="/patient/doctor-profile" className="btn btn-two">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /High Service Section */}
          {/* Blog News Section */}
          <section className="blog-news-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header aos" data-aos="fade-up">
                    <h2 className="color-primary">Blogs and News</h2>
                    <p className="color-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="blog-news-grid w-100">
                    <div className="blog-news-img">
                      <Link to="/blog/blog-details">
                        <img src={blog_01} className="img-fluid" alt="" />                       
                      </Link>
                      <div className="overlay" />
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="feather-calendar me-2" />
                          <span>10 Dec 2021</span>
                        </Link>
                      </div>
                    </div>
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        How to handle patient body in MRI
                      </Link>
                    </h3>
                    <div>
                      <Link to="/blog/blog-details" className="blog-news-arrows">
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="blog-news-grid w-100">
                    <div className="blog-news-img">
                      <Link to="/blog/blog-details">
                        <img src={blog_02} className="img-fluid" alt="" />                  
                      </Link>
                      <div className="overlay" />
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="feather-calendar me-2" />
                          <span>18 Dec 2021</span>
                        </Link>
                      </div>
                    </div>
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        Doccure – Making your clinic painless visit?
                      </Link>
                    </h3>
                    <div>
                      <Link to="/blog/blog-details" className="blog-news-arrows">
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="blog-news-grid w-100">
                    <div className="blog-news-img">
                      <Link to="/blog/blog-details">
                        <img src={blog_04} className="img-fluid" alt="" />                        
                      </Link>
                      <div className="overlay" />
                      <div className="blog-news-date">
                        <Link to="/blog/blog-details">
                          <i className="feather-calendar me-2" />
                          <span>25 Dec 2021</span>
                        </Link>
                      </div>
                    </div>
                    <h3 className="blog-news-title">
                      <Link to="/blog/blog-details">
                        Benefits of consulting with an Online Doctor
                      </Link>
                    </h3>
                    <div>
                      <Link to="/blog/blog-details" className="blog-news-arrows">
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="high-btn aos" data-aos="fade-up">
                    <Link to="/blog/blog-details" className="btn btn-two">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Blog News Section */}
          {/* Footer Two */}
          <footer className="footer footer-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-news">
                    <div className="footer-news-head aos" data-aos="fade-up">
                      <h2>Grab Our Newsletter</h2>
                      <p>
                        Subscribe today for our exclusive offers, latest news and
                        updates about health care programs.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                        <div className="footer-news-form aos" data-aos="fade-up">
                          <form>
                            <div className="form-group mb-0">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email Address"
                              />
                              <button type="submit" className="btn btn-two">
                                Subscribe
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          {/* /Footer Two*/}
        </div>
        {/* /Main Wrapper */}
      </>
      
      );
    
}

export default Home11;