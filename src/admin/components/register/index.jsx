import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import  { alphaNumericPattern, emailrgx } from '../../assets/constant'
import { facebook, google, logo, twitter } from '../imagepath';
import FeatherIcon from 'feather-icons-react';

const schema = yup
  .object({
    
    email: yup
      .string()
      .matches(emailrgx, 'Email is required')
      .required('Email is required')
      .trim(),
	  password: yup.string() .min(6)
	  .max(6) .required ('Password is required')
	  .trim(),

	  confirmPassword:  yup.string() .min(6) .max(6).required('ConfirmPassword is required').trim(),
  })
  .required()

const Register = (props) => {
  const[eye,seteye]=useState(true);
    const [emailerror,setEmailError] = useState("");
	
    const [passworderror,setPasswordError] = useState("");
    const [formgroup,setFormGroup] = useState("");
    const [inputValues,setInputValues] = useState({
    email:"admin@dreamguys.co.in",
    password:"123456",
    });

	const {
		handleSubmit,
		control,
		setError,
    clearErrors,
		formState: { errors },
	  } = useForm({
		resolver: yupResolver(schema),
	  })
    
  const  onSubmit = (data) => {
	console.log("data", data)
   
  if(data.password != "123456") {
	setError('password', {
	  message: 'password is mismatch',
	})
} else {
  clearErrors('password')
  props.history.push('/admin/login') 
  
}
}
const onEyeClick = () =>{
	seteye(!eye)
}
  return (
	<>
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
    <div className="row">
      {/* Login Banner */}
      <div className="col-md-6 login-bg">
        <div className="login-banner" />
      </div>
      {/* /Login Banner */}
      <div className="col-md-6 login-wrap-bg">
        {/* Login */}
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="img-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </div>
            <h3>Getting Started</h3>
            <p className="account-subtitle">Register with email</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group form-focus">
              
                <Controller
												name="email"
												control={control}
												render={({ field: { value, onChange } }) => (
													<input   className={`form-control floating  ${errors?.email ? "error-input" : "" }`} type="text" value={value} onChange={onChange} autoComplete="false"  />

												)}
												defaultValue="admin@dreamguys.co.in"
												/>
											
									<small>{errors?.email?.message}</small>
              </div>
              <div className="form-group form-focus">
               
                <Controller
										name="password"
										control={control}
										render={({ field: { value, onChange } }) => (
											<div className="pass-group">
												<input  type={eye ? "password" : "text"}  className={`form-control floating  ${errors?.password? "error-input" : "" }`}  value={value} onChange={onChange} autoComplete="false"  />
												<span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye" }`}/>
											</div>
										)}
										defaultValue="123456"
										/>
											
									<small>{errors?.password?.message}</small>
              </div>
              <div className="form-group form-focus">
                {/* <input type="password" className="form-control floating" /> */}
                <label className="focus-label">Confirm Password</label>
                <Controller
											name="confirmPassword"
											control={control}
											render={({ field: { value, onChange } }) => (
												<input   className={`form-control floating  ${errors?.confirmPassword ? "error-input" : "" }`} type="text" value={value} onChange={onChange} autoComplete="false"  />

											)}
											defaultValue=""
											/>
											
									<small>{errors?.confirmPassword?.message}</small>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <label className="custom_check mr-2 mb-0">
                      {" "}
                      I agree to the{" "}
                      <Link to="#" className="text-primary">
                        {" "}
                        terms of service
                      </Link>{" "}
                      and{" "}
                      <Link to="#" className="text-primary">
                        privacy policy
                      </Link>
                      <input type="checkbox" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
              <div className="dont-have">
                Already have an account? <Link to="/admin/login">Login</Link>
              </div>
              <div className="login-or">
                <span className="or-line" />
                <p className="span-or">or login with </p>
              </div>
              {/* Social Login */}
              <div className="social-login">
                <Link to="#">
                  <img
                    src={google}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link to="#">
                  <img
                    src={facebook}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link to="#">
                  <img
                    src={twitter}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>
              {/* /Social Login */}
            </form>
          </div>
        </div>
        {/* /Login */}
      </div>
    </div>
  </div>
  {/* /Main Wrapper */}
</>

  )
}

export default Register