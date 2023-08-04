import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { TagsInput } from "react-tag-input-component";
import SidebarNav from "../sidebar";

const SeoSettings = () => {
  const [selected, setSelected] = useState(["Lorem", "Ipsum"]);
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
                  <li className="breadcrumb-item active">SEO Settings</li>
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
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/social-links">
                      Social Links
                    </Link>
                  </li>
                  <li className="nav-item active">
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
                        <h5 className="card-title">SEO Settings</h5>
                      </div>
                      <form>
                        <div className="settings-form">
                          <div className="form-group form-placeholder">
                            <label>
                              Meta Title <span className="star-red">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>
                              Meta Keywords <span className="star-red">*</span>
                            </label>
                            <TagsInput
                              value={selected}
                              onChange={setSelected}
                              name="MetaTag"
                              placeHolder="Meta Keywords"
                            />
                            {/* <input
                          type="text"
                          data-role="tagsinput"
                          className="input-tags form-control"
                          placeholder="Meta Keywords"
                          name="services"
                          value="Lorem,Ipsum"
                          id="services"
                        /> */}
                          </div>
                          <div className="form-group">
                            <label>
                              Meta Description{" "}
                              <span className="star-red">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              defaultValue={""}
                            />
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
  );
};

export default SeoSettings;
