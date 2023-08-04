import React from 'react'
import {  cardio, dental, neurology, ortho, urology } from '../imagepath';

const Spaciality = () => {
  return (
    <div className="col-xl-4 col-md-6">
		<div className="card">
		<div className="card-header">
			<div className="row align-items-center">
			<div className="col">
				<h5 className="card-title">Popular by Speciality </h5>
			</div>
			<div className="col-auto">
				<select className="select">
				<option>This Week</option>
				<option>This Month</option>
				</select>
			</div>
			</div>
		</div>
		<div className="card-body p-0">
			<div className="table-responsive">
			<table className="table table-borderless">
				<tbody>
				<tr className="speciality-item">
					<td className="spl-name">
					<div className="spl-box">
						<img
						src={urology}
						alt="User Image"
						/>
					</div>
					<div className="spl-count">
						<h6>Urology</h6>
						<p>Patients : 400</p>
					</div>
					</td>
					<td className="con-revenue">
					<p className="text-muted">Revenue</p>
					<h6>$6000K</h6>
					</td>
					<td className="spl-consult">
					<p className="text-muted">Consultations</p>
					<h6>200</h6>
					</td>
				</tr>
				<tr className="speciality-item">
					<td className="spl-name">
					<div className="spl-box">
						<img
						src={neurology}
						alt="User Image"
						/>
					</div>
					<div className="spl-count">
						<h6>Neurology</h6>
						<p>Patients : 980 </p>
					</div>
					</td>
					<td className="con-revenue">
					<p className="text-muted">Revenue</p>
					<h6>$6000K</h6>
					</td>
					<td className="spl-consult">
					<p className="text-muted">Consultations</p>
					<h6>98</h6>
					</td>
				</tr>
				<tr className="speciality-item">
					<td className="spl-name">
					<div className="spl-box">
						<img
						src={ortho}
						alt="User Image"
						/>
					</div>
					<div className="spl-count">
						<h6>Orthopedic</h6>
						<p>Patients : 600</p>
					</div>
					</td>
					<td className="con-revenue">
					<p className="text-muted">Revenue</p>
					<h6>$6000K</h6>
					</td>
					<td className="spl-consult">
					<p className="text-muted">Consultations</p>
					<h6>78</h6>
					</td>
				</tr>
				<tr className="speciality-item">
					<td className="spl-name">
					<div className="spl-box">
						<img
						src={cardio}
						alt="User Image"
						/>
					</div>
					<div className="spl-count">
						<h6>Urology</h6>
						<p>Patients : 400</p>
					</div>
					</td>
					<td className="con-revenue">
					<p className="text-muted">Revenue</p>
					<h6>$6000K</h6>
					</td>
					<td className="spl-consult">
					<p className="text-muted">Consultations</p>
					<h6>65</h6>
					</td>
				</tr>
				<tr className="speciality-item">
					<td className="spl-name">
					<div className="spl-box">
						<img
						src={dental}
						alt="User Image"
						/>
					</div>
					<div className="spl-count">
						<h6>Urology</h6>
						<p>Patients : 400</p>
					</div>
					</td>
					<td className="con-revenue">
					<p className="text-muted">Revenue</p>
					<h6>$6000K</h6>
					</td>
					<td className="spl-consult">
					<p className="text-muted">Consultations</p>
					<h6>59</h6>
					</td>
				</tr>
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
  )
}

export default Spaciality
