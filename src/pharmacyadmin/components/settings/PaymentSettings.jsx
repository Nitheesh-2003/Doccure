import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import SidebarNav from "../sidebar";

const PaymentSettings = () => {
  return (
    <>
    <SidebarNav />
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="page-title">Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/index">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/pharmacyadmin/settings">Settings</Link>
              </li>
              <li className="breadcrumb-item active">Payment Settings</li>
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
                <Link className="nav-link" to="/pharmacyadmin/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pharmacyadmin/localization-details">
                  Localization
                </Link>
              </li>
              <li className="nav-item active">
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
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Paypal</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input type="checkbox" id="status_1" className="check" />
                      <label htmlFor="status_1" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <p className="pay-cont">Paypal Option</p>
                        <label className="custom_radio me-4">
                          <input
                            type="radio"
                            name="budget"
                            defaultValue="Yes"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> Sandbox
                        </label>
                        <label className="custom_radio">
                          <input
                            type="radio"
                            name="budget"
                            defaultValue="Yes"
                          />
                          <span className="checkmark" /> Live
                        </label>
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Tokenization key{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Merchant ID{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="pd6gznv7zbrx9hb8"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Public key{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="h8bydrz7gcjkp7d4"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Braintree Private key{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Paypal APP ID <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="pd6gznv7zbrx9hb8"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Paypal Secret Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="h8bydrz7gcjkp7d4"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
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
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Stripe</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_2"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_2" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <p className="pay-cont">Stripe Option</p>
                        <label className="custom_radio me-4">
                          <input
                            type="radio"
                            name="budget"
                            defaultValue="Yes"
                            defaultChecked=""
                          />
                          <span className="checkmark" /> Sandbox
                        </label>
                        <label className="custom_radio">
                          <input
                            type="radio"
                            name="budget"
                            defaultValue="Yes"
                          />
                          <span className="checkmark" /> Live
                        </label>
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Gateway Name <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Stripe"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          API Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Rest Key <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
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

</>

  )
}

export default PaymentSettings