import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { error505 } from '../imagepath';
import {Appcontext} from '../../../approuter'

const ErrorPage = (props) => {

  const { isAuth, setIsAuth } = useContext(Appcontext);
	const  onSubmit = () => {
		
		setIsAuth('user')
		props.history.push('/admin')
  
		
	  }
    return(
        <>
		<div className="error-page">
  {/* Main Wrapper */}
  <div className="main-wrapper">
    <div className="header d-none">
      {/* Header Menu */}
      <ul className="nav nav-tabs user-menu">
        {/* Flag */}
        <li className="nav-item">
          <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
          <i className="light-mode"><FeatherIcon icon="sun"/></i>
            <i className="dark-mode"><FeatherIcon icon="moon"/></i>
          </Link>
        </li>
        {/* /Flag */}
      </ul>
      {/* Header Menu */}
    </div>
    {/* Error 505 */}
    <div className="error-box">
      <img src={error505} className="img-fluid" alt={505} />
      <h2>Oops! This Page is Not Found.</h2>
      <p>The requested page dose not exist.</p>
      <Link to="#" className="btn btn-primary" onClick={()=>onSubmit()}>
      <i className='me-2'><FeatherIcon icon="home"/></i>
        Back to Home
      </Link>
    </div>
    {/* /Error 505 */}
  </div>
  {/* /Main Wrapper */}
  </div>
</>

    );
}
export default ErrorPage;
