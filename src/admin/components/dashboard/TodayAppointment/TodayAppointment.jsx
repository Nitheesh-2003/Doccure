import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {avatar02,avatar05, avatar06,avatar07,avatar08,} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TodayAppointment = (props) => {

	const settings ={
		loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-3',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1350:{
					items:3
				}
			}
	}
  return (
    <>
      <div className="col-md-6">
        <div className="section-heading">
          <h5 className="mb-0">
            Today’s Appointment <span className="num-circle">12</span>
          </h5>
        </div>
      </div>
      <div className="col-md-6 text-end">
        <div className="owl-nav slide-nav-3 text-end nav-control" />
      </div>

      <div className="col-md-12">
        <hr className="mt-0" />

        <OwlCarousel
          className="owl-carousel appointment-slider owl-theme" {...settings}>
          <div className="item">
            <div className="appointment-item">
              <div className="app-head">
                <p>Consultation ID : #4544478 </p>
                <div className="con-time">50 Min</div>
              </div>
              <div className="app-user">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="app-img">
                      <img src={avatar02} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Dr. Lester </h6>
                        <p>Orthopaedics</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="app-img justify-content-sm-end">
                      <img src={avatar05} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Chris Harris</h6>
                        <p>ID : 781212, M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-info">
                <div>
                  <p>Today</p>
                  <h6>08:00am - 08:50pm</h6>
                </div>
                <div>
                  <p>Booked on</p>
                  <h6 className="fw-normal">12/11/2022, 05:30PM</h6>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-mode">
                  <p>Mode of Consultation</p>
                  <Link to="#" className="mode-box text-danger">
				  	<i><FeatherIcon icon="video" /></i>
                  </Link>
                </div>
                <h6>$30.00K</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="appointment-item">
              <div className="app-head">
                <p>Consultation ID : #9789845 </p>
                <div className="con-time">20 Min</div>
              </div>
              <div className="app-user">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="app-img">
                      <img src={avatar06} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Dr. Monroe</h6>
                        <p>Hair Specialities</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="app-img justify-content-sm-end">
                      <img src={avatar07} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Bess Twishes</h6>
                        <p>ID : 787787, M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-info">
                <div>
                  <p>Today</p>
                  <h6>06:00pm - 06:20pm</h6>
                </div>
                <div>
                  <p>Booked on</p>
                  <h6 className="fw-normal">06/11/2022, 04:30PM</h6>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-mode">
                  <p>Mode of Consultation</p>
                  <Link to="#" className="mode-box text-yellow">
				  	<i><FeatherIcon icon="mic" /></i>
                  </Link>
                </div>
                <h6>$30.00K</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="appointment-item">
              <div className="app-head">
                <p>Consultation ID : #9795754</p>
                <div className="con-time">40 Min</div>
              </div>
              <div className="app-user">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="app-img">
                      <img src={avatar02} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Dr. Clint </h6>
                        <p>Neurology</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="app-img justify-content-sm-end">
                      <img src={avatar08} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>James Aaron</h6>
                        <p>ID : 781212, M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-info">
                <div>
                  <p>Today</p>
                  <h6>12:00pm - 12:40pm</h6>
                </div>
                <div>
                  <p>Booked on</p>
                  <h6 className="fw-normal">12/11/2022, 04:30PM</h6>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-mode">
                  <p>Mode of Consultation</p>
                  <Link to="#" className="mode-box text-primary">
				  	<i><FeatherIcon icon="message-square" /></i>
                  </Link>
                </div>
                <h6>$30.00K</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="appointment-item">
              <div className="app-head">
                <p>Consultation ID : #4544478 </p>
                <div className="con-time">50 Min</div>
              </div>
              <div className="app-user">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="app-img">
                      <img src={avatar02} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Dr. Lester </h6>
                        <p>Orthopaedics</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="app-img justify-content-sm-end">
                      <img src={avatar05} alt="" className="img-fluid" />
                      <div className="app-name">
                        <h6>Chris Harris</h6>
                        <p>ID : 781212, M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-info">
                <div>
                  <p>Today</p>
                  <h6>08:00am - 08:50pm</h6>
                </div>
                <div>
                  <p>Booked on</p>
                  <h6 className="fw-normal">12/11/2022, 05:30PM</h6>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-mode">
                  <p>Mode of Consultation</p>
                  <Link to="#" className="mode-box text-danger">
				  	<i><FeatherIcon icon="video" /></i>
                  </Link>
                </div>
                <h6>$30.00K</h6>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* </div> */}
    </>
  );
};

export default TodayAppointment;
