import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { avatar05, avatar10, avatar11, avatar13 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";

const TopDoctors = () => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h5 className="card-title">Top Doctors</h5>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table doc-table">
              <tbody>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link
                        className="avatar-pos avatar-online"
                        to="/admin/profile"
                      >
                        <img
                          className="avatar avatar-img"
                          src={avatar05}
                          alt="User Image"
                        />
                      </Link>
                      <Link to="#" className="user-name">
                        <span className="text-muted">Dr. Rayan</span>{" "}
                        <span className="tab-subtext">Gyanoclogist</span>
                      </Link>
                    </h2>
                  </td>
                  <td>
                    <span className="table-rating">
                      <i className="fas fa-star me-2" /> 4.5
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="text-muted">200 Patients</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link
                        className="avatar-pos avatar-online"
                        to="/admin/profile"
                      >
                        <img
                          className="avatar avatar-img"
                          src={avatar10}
                          alt="User Image"
                        />
                      </Link>
                      <Link to="#" className="user-name">
                        <span className="text-muted">Dr. Bea</span>{" "}
                        <span className="tab-subtext">Dentist</span>
                      </Link>
                    </h2>
                  </td>
                  <td>
                    <span className="table-rating">
                      <i className="fas fa-star me-2" /> 4.9
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="text-muted">180 Patients</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link
                        className="avatar-pos avatar-offline"
                        to="/admin/profile"
                      >
                        <img
                          className="avatar avatar-img"
                          src={avatar11}
                          alt="User Image"
                        />
                      </Link>
                      <Link to="#" className="user-name">
                        <span className="text-muted">Dr. Monroe</span>{" "}
                        <span className="tab-subtext">Hair Specialities</span>
                      </Link>
                    </h2>
                  </td>
                  <td>
                    <span className="table-rating">
                      <i className="fas fa-star me-2" /> 4.8
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="text-muted">160 Patients</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link
                        className="avatar-pos avatar-offline"
                        to="/admin/profile"
                      >
                        <img
                          className="avatar avatar-img"
                          src={avatar13}
                          alt="User Image"
                        />
                      </Link>
                      <Link to="#" className="user-name">
                        <span className="text-muted">Dr. Lester</span>{" "}
                        <span className="tab-subtext">Orthopaedics</span>
                      </Link>
                    </h2>
                  </td>
                  <td>
                    <span className="table-rating">
                      <i className="fas fa-star me-2" /> 4.7
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="text-muted">140 Patients</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link className="empty-user" to="/admin/profile">
					  	<i><FeatherIcon icon="user" /></i>{" "}
                      </Link>
                      <Link to="#" className="user-name">
                        <span className="text-muted">Dr. Clint</span>{" "}
                        <span className="tab-subtext">Neurology</span>
                      </Link>
                    </h2>
                  </td>
                  <td>
                    <span className="table-rating">
                      <i className="fas fa-star me-2" /> 4.6
                    </span>
                  </td>
                  <td className="text-end">
                    <span className="text-muted">120 Patients</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
