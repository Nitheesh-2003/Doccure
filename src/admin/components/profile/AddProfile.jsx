import React, {useEffect, useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import SidebarNav from "../sidebar";

import { avatar02 } from '../imagepath';

const AddProfile = () => {
  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid content-wrap">
      {/* Profile Information */}
      <div className="row">
        <div className="col-md-8">
          <div className="setting-info profile-info">
            <h4>Personal Information</h4>
            <label
              className="avatar profile-cover-avatar"
              htmlFor="avatar_upload"
            >
              <img
                className="avatar-img"
                src={avatar02}
                alt="Profile Image"
              />
              <input type="file" id="avatar_upload" />
              <span className="avatar-edit">
                <i><FeatherIcon icon="edit"/></i>
              </span>
            </label>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Last Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Age</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Date of Birth</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="About me"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-0" />
            <h5 className="mb-1">Address &amp; Location</h5>
            <p className="mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Address / Street name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Country</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">City</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">State</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Pincode</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-auto">
        <div className="col-md-12">
          <div className="submit-sec">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
      {/* /Profile Information */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default AddProfile