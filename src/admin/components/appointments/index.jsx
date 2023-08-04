import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import SidebarNav from "../sidebar";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13 } from '../imagepath';
import AppointmentsTable from './AppointmentsTable';

const Appointments = () => {
  const [state, setState] = useState({
    start: moment().subtract(29, 'days'),
    end: moment(),
  });
  const { start, end } = state;
  const handleCallback = (start, end) => {
    setState({ start, end });
  };
  const label =
    start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');


    const [show, setShow] =useState(false);
	const toggleFilterMenu = () =>{
		console.log(show)
		setShow(!show)
	}


  return (
    <>
    <SidebarNav />
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <ul className="list-links">
              <li className="active">
              <Link to="/admin/appointment-list">
                  Upcoming Appointments <span>(48)</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/pastappointments">
                  Past Appointments <span>(98)</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <DateRangePicker
        initialSettings={{
          startDate: start.toDate(),
          endDate: end.toDate(),
          ranges: {
            Today: [moment().toDate(), moment().toDate()],
            Yesterday: [
              moment().subtract(1, 'days').toDate(),
              moment().subtract(1, 'days').toDate(),
            ],
            'Last 7 Days': [
              moment().subtract(6, 'days').toDate(),
              moment().toDate(),
            ],
            'Last 30 Days': [
              moment().subtract(29, 'days').toDate(),
              moment().toDate(),
            ],
            'This Month': [
              moment().startOf('month').toDate(),
              moment().endOf('month').toDate(),
            ],
            'Last Month': [
              moment().subtract(1, 'month').startOf('month').toDate(),
              moment().subtract(1, 'month').endOf('month').toDate(),
            ],
          },
        }}
        onCallback={handleCallback}
      >
        <div className="col-auto">
            <div className="bookingrange btn btn-white btn-sm">
              <div className="cal-ico">
              <i className='me-1'><FeatherIcon icon="calendar"/></i>     
                <span>{label}</span>
              </div>
              <div className="ico">
                <i className="fas fa-chevron-left" />
                <i className="fas fa-chevron-right" />
              </div>
            </div>
          </div>
          </DateRangePicker>
        </div>
      </div>
      {/* /Page Header */}
      {/* Upcoming Appointments */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">Upcoming Appointments</h5>
                </div>
                <div className="col-auto d-flex">
                  <form action="/admin/appointment-list">
                    <div className="multipleSelection" > 
                      <div className="selectBox" onClick={(value)=>toggleFilterMenu()}>
                        <p className="mb-0" >
                        <i className='me-1'><FeatherIcon icon="filter"/></i>
                          Filter
                        </p>
                        <span className="down-icon">
                        <i><FeatherIcon icon="chevron-down"/></i>
                         
                        </span>
                      </div>
                      <div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
                        <div className="form-custom">
                          <input
                            type="text"
                            className="form-control bg-grey"
                            placeholder="Search by Patient"
                          />
                          <i className="fas fa-search" />
                        </div>
                        <div className="form-custom">
                          <input
                            type="text"
                            className="form-control bg-grey"
                            placeholder="Search by Doctor"
                          />
                          <i className="fas fa-search" />
                        </div>
                        <p className="lab-title">Consultation Type</p>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> Video Call
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> Audio Call
                        </label>
                        <label className="custom_check w-100">
                          <input type="checkbox" name="year" />
                          <span className="checkmark" /> Chat
                        </label>
                        <button type="submit" className="btn w-100 btn-primary">
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <AppointmentsTable/>
           
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /Upcoming Appointments */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  )
}

export default Appointments



