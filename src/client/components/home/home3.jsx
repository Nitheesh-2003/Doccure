import React, { useState,useEffect  } from "react";
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import Select2 from 'react-select2-wrapper';
import Header from "../header";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";

import { banner1 } from "./image.jsx";

const Home3 = (props) => {

    //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);
  
    let pathnames = window.location.pathname

    const [gender, setGender] = useState([
        { id: 1, text: 'male' },
        { id: 2, text: 'female' },
        
    ]);
      return(
        <div className="main-wrapper">

            <Header {...props}/>
          {/* Home Banner */}
            <section className="section section-search-2">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={banner1} className="img-fluid search-img" alt="" />
                    </div>
                    <div className="col-md-6 search-doctor">
                    <div className="search-area bg-white">
                        <h2 className="text-center">Search Doctor, Make an Appointment</h2>
                        <form className="search-input">
                        <div className="row">
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" defaultValue />
                            </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Gender</label>
                          
                                <select className="form-select form-control">
                                <option>Male</option>
                                <option>Fe Male</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Department</label>
                                <select className="form-select form-control">
                                <option>Surgen</option>
                                <option>Cardiologist</option>
                                <option>Gynacologist</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="btn btn-primary search-btn submit-btn">Search</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* /Home Banner */}
          {/* Clinic and Specialities */}  
              <HomeClinic />
          {/* Clinic and Specialities */}
          {/* Category Section */}
          <BrowsebySpecialities/>
          {/* Category Section */}
          {/* Popular Section */}
          <BookourBestDoctor/>
          {/* /Popular Section */}                
          <HomeFeatures />
          <HomeBlog/>
          <Footer {...props}/>
        </div>
      );
}

export default Home3;