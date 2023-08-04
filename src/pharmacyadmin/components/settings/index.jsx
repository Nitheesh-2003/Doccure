import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { favicon, logo } from '../imagepath';
import SidebarNav from "../sidebar";
import Select2 from 'react-select2-wrapper';
import SelectField from '../commoncomponent/selectfield';

const Settings = () => {
   
const [state, setState] = useState([
{ label: "California", value: 'California' },
{ label: "Tasmania", value: 'Tasmania' },
{ label: "Auckland", value: 'Auckland' },
{ label: "Marlborough", value: 'Marlborough' },
]);
const [options, setOptions] = useState( [
{ label: "Select", value: '' },
{ label: "India", value: 'India' },
{ label: "London", value: 'London' },
{ label: "France", value: 'France' },
{ label: "USA", value: 'USA' },
]);
const [stateValue, setStateValue] = useState()
return (
<>
<SidebarNav />
{/* Hello world */}
{/* Page Wrapper */}
<div className="page-wrapper">
   <div className="content container-fluid">
      <div className="page-header">
         <div className="row">
            <div className="col-sm-6">
               <h3 className="page-title">Settings</h3>
               <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                     <Link to="/pharmacyadmin">
                     Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                     <Link to="/pharmacyadmin/settings">
                     Settings</Link>
                  </li>
                  <li className="breadcrumb-item active">General Settings</li>
               </ul>
            </div>
         </div>
      </div>
      {/* Settings Menu */}
      <div className="settings-menu-links">
         <ul className="nav nav-tabs menu-tabs">
            <li className="nav-item active">
               <Link className="nav-link" to="/pharmacyadmin/settings">
               General Settings
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/localization-details">
               Localization
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/payment-settings">
               Payment Settings
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/email-settings">
               Email Settings
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/social-settings">
               Social Media Login
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/social-links">
               Social Links
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/seo-settings">
               SEO Settings
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/pharmacyadmin/others-settings">
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
                     <h5 className="card-title">Website Basic Details</h5>
                  </div>
                  <form>
                     <div className="settings-form">
                        <div className="form-group">
                           <label>
                           Website Name <span className="star-red">*</span>
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Website Name"
                              />
                        </div>
                        <div className="form-group">
                           <p className="settings-label">
                              Logo <span className="star-red">*</span>
                           </p>
                           <div className="settings-btn">
                              <input
                                 type="file"
                                 accept="image/*"
                                 name="image"
                                 id="file"
                                 className="hide-input"
                                 />
                              <label htmlFor="file" className="upload">
                                 <FeatherIcon icon="upload"/>
                              </label>
                           </div>
                           <h6 className="settings-size">
                              Recommended image size is <span>150px x 150px</span>
                           </h6>
                           <div className="upload-images">
                              <img src={logo} alt="Image" />
                              <Link
                                 to="#"
                                 className="btn-icon logo-hide-btn"
                                 >
                              <i><FeatherIcon icon="x-circle"/></i>
                              </Link>
                           </div>
                        </div>
                        <div className="form-group">
                           <p className="settings-label">
                              Favicon <span className="star-red">*</span>
                           </p>
                           <div className="settings-btn">
                              <input
                                 type="file"
                                 accept="image/*"
                                 name="image"
                                 id="file"                                
                                 className="hide-input"
                                 />
                              <label htmlFor="file" className="upload">
                                 <FeatherIcon icon="upload"/>
                              </label>
                           </div>
                           <h6 className="settings-size">
                              Recommended image size is{" "}
                              <span>16px x 16px or 32px x 32px</span>
                           </h6>
                           <h6 className="settings-size mt-1">
                              Accepted formats: only png and ico
                           </h6>
                           <div className="upload-images upload-size">
                              <img src={favicon} alt="Image" />
                              <Link
                                 to="#"
                                 className="btn-icon logo-hide-btn"
                                 >
                              <i><FeatherIcon icon="x-circle"/></i>
                              </Link>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-5 col-md-6">
                              <div className="form-group">
                                 <div className="status-toggle d-flex justify-content-between align-items-center">
                                    <p className="mb-0">RTL</p>
                                    <input
                                       type="checkbox"
                                       id="status_1"
                                       className="check"
                                       />
                                    <label htmlFor="status_1" className="checktoggle">
                                    checkbox
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="form-group mb-0">
                           <div className="settings-btns">
                              <button type="submit" className="btn btn-orange">
                              Update
                              </button>
                              <button type="submit" className="btn btn-grey">
                              Cancel
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="card">
               <div className="card-body pt-0">
                  <div className="card-header">
                     <h5 className="card-title">Address Details</h5>
                  </div>
                  <form>
                     <div className="settings-form">
                        <div className="form-group">
                           <label>
                           Address Line 1 <span className="star-red">*</span>
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address Line 1"
                              />
                        </div>
                        <div className="form-group">
                           <label>
                           Address Line 2 <span className="star-red">*</span>
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address Line 2"
                              />
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>
                                 City <span className="star-red">*</span>
                                 </label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <SelectField 
                                 options={options}
                                 errorMessage={""}
                                 error={false}
                                 label={"State/Province"}
                                 placeholder={"select"}
                                 isRequired={true}
                                 onChangeValue={(value) =>
                              setStateValue(value?.value) }
                              />
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>
                                 Zip/Postal Code <span className="star-red">*</span>
                                 </label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <SelectField 
                                 options={state}
                                 errorMessage={""}
                                 error={false}
                                 label={"Country"}
                                 placeholder={"select"}
                                 isRequired={true}
                                 onChangeValue={(value) =>
                              setStateValue(value?.value) }
                              />
                           </div>
                        </div>
                        <div className="form-group mb-0">
                           <div className="settings-btns">
                              <button type="submit" className="btn btn-orange">
                              Update
                              </button>
                              <button type="submit" className="btn btn-grey">
                              Cancel
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      {/* /Settings */}
   </div>
</div>
{/* /Page Wrapper */}
</>
)
}
export default Settings;