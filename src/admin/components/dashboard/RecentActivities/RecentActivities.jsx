import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import { avatar02,  avatar04, avatar05,  avatar07 } from '../../imagepath';

const RecentActivities = () => {
    const [state, setState] = useState({
        start: moment().subtract(29, 'days'),
        end: moment(),
      });
      const { start, end } = state;
      const handleCallback = (start, end) => {
        setState({ start, end });
      };
      const label =
        start.format('M/D/ YYYY') + ' - ' + end.format('M/ D/YYYY');
  return (
    <div className="col-lg-8">
		<div className="card">
		<div className="card-header border-bottom-0">
			<div className="row align-items-center">
			<div className="col">
				<h5 className="card-title">Recent Patient Activity</h5>
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
				<div className="col-auto d-flex">
					<div className="bookingrange btn btn-white btn-sm">
					<div className="cal-ico">
						
						<span>{label}</span>
					</div>											
					<i className="ms-1"><FeatherIcon icon="chevron-down" /></i>                                           
					</div>
				</div>
	</DateRangePicker>
			</div>
		</div>
		<div className="card-body p-0">
			<div className="table-responsive">
			<table className="table table-borderless hover-table">
				<thead className="thead-light">
				<tr>
					<th>ID</th>
					<th>Patient</th>
					<th>Disease</th>
					<th>Member since </th>
					<th>Status</th>
					<th className="text-right" />
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>#4546</td>
					<td>
					<h2 className="table-avatar">
						<Link to="/admin/profile">
						<img
							className="avatar avatar-img"
							src={avatar07}
							alt="User Image"
						/>
						</Link>
						<Link to="#" className="user-name">
						Bess Twishes{" "}
						<span className="text-muted">
							Male, 40 Years Old
						</span>
						</Link>
					</h2>
					</td>
					<td>
					<span className="disease-name">
						Allergies &amp; Asthma
					</span>
					</td>
					<td>
					<span className="text-yellow user-name">
						New Patient
					</span>
					<span className="d-block">23 Nov 2020</span>
					</td>
					<td>
					<span className="badge bg-badge-grey text-success">
						<i className="fas fa-circle me-1" /> Enabled
					</span>
					</td>
					<td className="text-right">
					<i><FeatherIcon icon="chevron-right" /></i>
					</td>
				</tr>
				<tr>
					<td>#8774</td>
					<td>
					<h2 className="table-avatar">
						<Link to="/admin/profile">
						<img
							className="avatar avatar-img"
							src={avatar04}
							alt="User Image"
						/>
						</Link>
						<Link to="#" className="user-name">
						Bess Twishes{" "}
						<span className="text-muted">
							Female,30 Years Old
						</span>
						</Link>
					</h2>
					</td>
					<td>
					<span className="disease-name">Sleep Problem</span>
					</td>
					<td>
					<span className="text-danger user-name">
						Old Patient
					</span>
					<span className="d-block">23 Nov 2020</span>
					</td>
					<td>
					<span className="badge bg-badge-grey text-danger">
						<i className="fas fa-circle me-1" /> Disabled
					</span>
					</td>
					<td className="text-end">
						<i><FeatherIcon icon="chevron-right" /></i>
					</td>
				</tr>
				<tr>
					<td>#4546</td>
					<td>
					<h2 className="table-avatar">
						<Link to="/admin/profile">
						<img
							className="avatar avatar-img"
							src={avatar02}
							alt="User Image"
						/>
						</Link>
						<Link to="#" className="user-name">
						Abdul Aziz Lazis{" "}
						<span className="text-muted">
							Male, 25 Years Old
						</span>
						</Link>
					</h2>
					</td>
					<td>
					<span className="disease-name">Tooth Pain</span>
					</td>
					<td>
					<span className="text-danger user-name">
						Old Patient
					</span>
					<span className="d-block">23 Nov 2020</span>
					</td>
					<td>
					<span className="badge bg-badge-grey text-success">
						<i className="fas fa-circle me-1" /> Enabled
					</span>
					</td>
					<td className="text-end">
						<i><FeatherIcon icon="chevron-right" /></i>
					</td>
				</tr>
				<tr>
					<td>#4546</td>
					<td>
					<h2 className="table-avatar">
						<Link to="/admin/profile">
						<img
							className="avatar avatar-img"
							src={avatar05}
							alt="User Image"
						/>
						</Link>
						<Link to="#" className="user-name">
						Alex Siauw{" "}
						<span className="text-muted">
							Male, 29 Years Old
						</span>
						</Link>
					</h2>
					</td>
					<td>
					<span className="disease-name">Pain on knee</span>
					</td>
					<td>
					<span className="text-yellow user-name">
						New Patient
					</span>
					<span className="d-block">23 Nov 2020</span>
					</td>
					<td>
					<span className="badge bg-badge-grey text-success">
						<i className="fas fa-circle me-1" /> Enabled
					</span>
					</td>
					<td className="text-end">
						<i><FeatherIcon icon="chevron-right" /></i>
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

export default RecentActivities