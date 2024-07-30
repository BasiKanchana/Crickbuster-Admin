import React from 'react';
import LoginForm from '../Images/login-form.png'
import LoginFormLogo from '../Images/Logo.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';

 const EnterEmailPassword = () =>{
    const navigate = useNavigate()
    const ResetPassword =()=>{
        navigate("/Forgotpassword")
    };
    const LoginTodashboard = ()=>{
        navigate('/dashboard')
    }
  return (
    <div>
        <section className="d-flex">
        <div className="container-fluid">
            <div className="row p-0">
                <div className="col-lg-6 p-0 ">
                    <img src={LoginForm} className="w-100 left-side-image"  alt=""/>
                </div>
                <div className="col-lg-6  d-flex justify-content-center align-items-center flex-column  py-4">
                  <div className='d-flex justify-content-center  flex-column ' style={{width:'50%'}}>
                    <img src={LoginFormLogo} alt="" className="w-100 mb-5 p-0 m-0"/>
                    <form className="w-100 ">
                        <div>
                        <h5 className="mb-4 fw-medium">DASHBOARD LOGIN </h5>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="loginFormInput form-control " id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder='Enter email'/>
                        </div>
                        <div className="mb-1">
                            <label for="exampleInputEmail1" className="form-label ">Password</label>
                            <input type="email" className="loginFormInput form-control " id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <p className="text-danger">Invalid Password or Email</p>
                        <button className='mb-5 forgotPassword-btn bg-none' onClick={ResetPassword}>Forget Password?</button>
                        </div>
                        <div>
                        <button className="btn login-form-btn form-control" onClick={LoginTodashboard}>LOGIN
                         {/* <Link to="/dashboard"  >Loginsfds</Link> */}
                        </button>
                        </div>
                     </div>
                    </form>
                </div>

                </div>
            </div>
        </div>

    </section>

    </div>
  )
}
export default EnterEmailPassword