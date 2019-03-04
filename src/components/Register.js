import React from 'react'

const Register = ({registerUser,test}) =>
    <div className="container" id="big-container">
        <form action="">
            <div className="form-group row ">
                <div className="col-sm-2 col-med-2 text-left col-form-label" id="c">
                    <h3>Sign Up</h3>
                </div>

            </div>
            <div className="form-group row" id="firstName-row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label text-right"
                       id="firstName-label"> First Name </label>
                <div className="col-sm-6
							">
                    <input className="form-control" id="firstName" placeholder="Alice"></input>
                </div>
            </div>
            <div className="form-group row" id="lastName-row">
                <label htmlFor="lastName" className="col-sm-2 col-form-label text-right"
                       id="lastName-label"> Last Name </label>
                <div className="col-sm-6
							">
                    <input className="form-control" id="lastName" placeholder="Wonderland"></input>
                </div>
            </div>
            <div className="form-group row" id="role-row">
                <label htmlFor="role" className="col-sm-2 col-form-label text-right"
                       id="role-label">Role</label>
                <div className="col-sm-6
							">
                    <select className="form-control" id="roleSelect">
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            </div>
            <div className="form-group row" id="username-row">
                <label htmlFor="username" className="col-sm-2 col-form-label text-right"
                       id="username-label"> Username </label>
                <div className="col-sm-6
							">
                    <input className="form-control" id="getUsernameFld" placeholder="Username"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-labe text-right">
                    Password </label>
                <div className="col-sm-6">
                    <input type="password" className="form-control wbdv-password-fld"
                           id="getPasswordFld" placeholder="123qwe#$%"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="verify_password" className="col-sm-2 col-form-labe text-right">
                    Confirm Password </label>
                <div className="col-sm-6">
                    <input type="password" className="form-control wbdv-password-fld"
                           id="confirm_password" placeholder="confirm"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-6" id="registerButton">
                    <a href="../course-list/course-list.template.client.html"
                       className="btn btn-primary btn-block"
                       onClick={() => {
                           const firstName = document.getElementById("firstName").value
                           const lastName = document.getElementById("lastName").value
                           const role = document.getElementById("roleSelect").value
                           const username = document.getElementById("getUsernameFld").value
                           const password = document.getElementById("getPasswordFld").value
                           console.log("username from Regiser is: " + username)
                           console.log("password from REgister is: " + password)
                           registerUser(firstName,lastName,role,username,password)
                       }}>Register</a>
                    <div className="row">
                    </div>
                </div>
            </div>

        </form>
    </div>
export default Register;

/*
    <div className="form-group row">
        <label className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10" id="a">
            <div className="col-sm-4 col col-lg-4 text-left" id="b">
                <a href="../login/login.template.client.html">Login</a>
            </div>
            <div className="col-sm-3 col-lg-3 text-right">
                <a href="../index.html">Cancel</a>
            </div>


        </div>
    </div> */