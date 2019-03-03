import React from 'react'

const Login = ({lessons, selectLesson, createLesson, deleteLesson, updateLesson}) =>
    <div className="container">
        <form action="">
            <div className="form-group row ">
                <div className="col-sm-2 col-med-2 text-left col-form-label">
                    <h3 className="wbdv-login-text">Sign In</h3>
                </div>

            </div>
            <div className="form-group row" id="username-row">
                <label htmlFor="username" className="col-sm-2 col-form-label text-right wbdv-login-text"
                       id="username-label"> Username </label>
                <div className="col-sm-6
							">
                    <input className="form-control" id="username" placeholder="Alice"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-labe text-right wbdv-login-text">
                    Password </label>
                <div className="col-sm-6">
                    <input type="password" className="form-control wbdv-password-fld"
                           id="password" placeholder="123qwe#$%"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-6">

                    <a href="../course-list/course-list.template.client.html" className="btn btn-primary btn-block">Sign
                        in</a>

                    <div className="row">
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-6">
                    <div className="col-sm-6 col-med-6 col-lg-6 text-left">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="col-sm-6 col-med-6 col-lg-6 text-right">
                        <a href="../register/register.template.client.html">Sign Up</a>
                    </div>


                </div>
            </div>
        </form>
    </div>
export default Login
