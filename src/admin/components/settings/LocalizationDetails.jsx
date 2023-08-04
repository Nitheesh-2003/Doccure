import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { favicon, logo } from '../imagepath';
import SidebarNav from "../sidebar";
import SelectField from '../commoncomponent/selectfield';

const LocalizationDetails = () => {
  
  const [state, setState] = useState([
    { label: "15 May 2016", value: '15 May 2016' },
    { label: "15/05/2016", value: '15/05/2016' },
    { label: "15.05.2016", value: '15.05.2016' },
    { label: "05/15/2016", value: '05/15/2016' },
    { label: "2016/05/15", value: '2016/05/15' },
    { label: "2016-05-15", value: '2016-05-15' },
]);

const [options, setOptions] = useState( [
  { label: "(UTC +5:30) Antarctica/Palmer", value: '(UTC +5:30) Antarctica/Palmer' },
  { label: "(UTC+05:30) India", value: '(UTC+05:30) India' },
]);

const [options1, setOptions1] = useState([
  { label: "12 Hours", value: '12 Hours' },
  { label: "24 Hours", value: '24 Hours' },
  { label: "36 Hours", value: '36 Hours' },
  { label: "48 Hours", value: '48 Hours' },
  { label: "60 Hours", value: '60 Hours' },

]);
const [options2, setOptions2] = useState([
  { label: "$", value: '$' },
  { label: "₹", value: '₹' },
  { label: "£", value: '£' },
  { label: "€", value: '€' },
]);

const [stateValue, setStateValue] = useState()



  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="page-title">Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/admin/settings">Settings</Link>
              </li>
              <li className="breadcrumb-item active">Localization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Settings Menu */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/admin/localization-details">
                  Localization
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/payment-settings">
                  Payment Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/email-settings">
                  Email Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/social-settings">
                  Social Media Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/social-links">
                  Social Links
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/seo-settings">
                  SEO Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/others-settings">
                  Others
                </Link>
              </li>
            </ul>
          </div>
          {/* Settings Menu */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header">
                    <h5 className="card-title">Localization Details</h5>
                  </div>
                  <form>
                    <div className="settings-form">
                    <SelectField 
                       
                        options={options}
                        errorMessage={""}
                        error={false}
                        label={"Time Zone"}
                        placeholder={"(UTC +5:30) Antarctica/Palmer"}
                        isRequired={true}
                        onChangeValue={(value) => setStateValue(value?.value) }
                      />
                      
                      <SelectField 
                       
                        options={state}
                        errorMessage={""}
                        error={false}
                        label={"Date Format"}
                        placeholder={"15 May 2016"}
                        isRequired={true}
                        onChangeValue={(value) => setStateValue(value?.value) }
                      />

                      <SelectField 
                       
                        options={options1}
                        errorMessage={""}
                        error={false}
                        label={"Time Format"}
                        placeholder={"12 Hours"}
                        isRequired={true}
                        onChangeValue={(value) => setStateValue(value?.value) }
                      />

                      <SelectField 
                       
                        options={options2}
                        errorMessage={""}
                        error={false}
                        label={"Currency Symbol"}
                        placeholder={"$"}
                        isRequired={true}
                        onChangeValue={(value) => setStateValue(value?.value) }
                      />
                     
                     
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Update
                          </button>
                        </div>
                      </div>
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
  {/* /Page Wrapper */}
</>

  )
}

export default LocalizationDetails;