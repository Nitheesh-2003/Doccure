import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import SidebarNav from "../sidebar";

const SocialLinks = () => {
  //add remove
const [inputFields, setInputFields] = useState([{} ]);

const addInputField = ()=>{
	setInputFields([...inputFields, {		
	} ])
  
}
const removeInputFields = (index)=>{
	const rows = [...inputFields];
	rows.splice(index, 1);
	setInputFields(rows);
}
const handleChanges = (index, evnt)=>{

const { name, value } = evnt.target;
const list = [...inputFields];
list[index][name] = value;
setInputFields(list);

}
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
              <li className="breadcrumb-item active">Social Links</li>
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
              <li className="nav-item">
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
              <li className="nav-item active">
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
            <div className="col-lg-6 col-md-8">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header">
                    <h5 className="card-title">Social Link Settings</h5>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="links-info">
                        <div className="row form-row links-cont">
                            <div className="form-group form-placeholder d-flex">
                              <button className="btn social-icon">
                                <i><FeatherIcon icon="facebook"/></i>
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.facebook.com"
                              />
                              <div>
                              <Link to="#" className="btn trash" >
                              <i><FeatherIcon icon="trash-2"/></i>                    
                              </Link>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="links-info">
                        <div className="row form-row links-cont">
                        
                            <div className="form-group form-placeholder d-flex">
                              <button className="btn social-icon">
                                <i><FeatherIcon icon="twitter"/></i> 
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.twitter.com"
                              />
                               <div>
                            <Link to="#" className="btn trash" >
                              <i><FeatherIcon icon="trash-2"/></i> 
                            </Link>
                          </div>
                            </div>
                         
                         
                        </div>
                      </div>
                      <div className="links-info" >
                        <div className="row form-row links-cont">
                            <div className="form-group form-placeholder d-flex">
                              <button className="btn social-icon">
                                 <i><FeatherIcon icon="youtube"/></i> 
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.youtube.com"
                              />
                               <div>
                                <Link to="#" className="btn trash" >
                                  <i><FeatherIcon icon="trash-2"/></i> 
                                </Link>
                              </div>
                            </div>
              
                        </div>
                      </div>
                      {
													inputFields.map((data, index)=>{
														
														return(
                      <div className="links-info" key={index}  onChange={(evnt)=>handleChanges(index, evnt)}>
                        <div className="row form-row links-cont">
                            <div className="form-group form-placeholder d-flex">
                              <button className="btn social-icon">
                                <i><FeatherIcon icon="linkedin"/></i> 
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.linkedin.com"
                              />
                               <div>
                                <Link to="#" className="btn trash" onClick={removeInputFields}>
                                  <i><FeatherIcon icon="trash-2"/></i> 
                                </Link>
                              </div>
                            </div>               
                        </div>
                      </div>
                      )
                    })
                    }
                    </div>
                    <div className="form-group">
                      <Link to="#" className="btn add-links" onClick={addInputField}>
                        <i className="fas fa-plus me-1" /> Add More
                      </Link>
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Submit
                        </button>
                        <button type="submit" className="btn btn-grey">
                          Cancel
                        </button>
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

export default SocialLinks;
