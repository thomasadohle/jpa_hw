import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import CourseGrid from "./WhiteBoard";
import CourseEditor from "./CourseEditor";
import Login from "./Login"
import Register from "./Register"
import UserService from '../services/UserService'
import ReactDOM from 'react-dom'
import WhiteBoard from "./WhiteBoard";

class NotLoggedIn extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService;
        this.state = {
            loginView: "login"
        }
        console.log("notLoggedIn called")
    }


    registerUser = (firstName, lastName, role, username, password) => {
        console.log("registerUser was called from NotLoggedIn")
        let newUser = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password,
            role: role
        }
        this.userService.registerUser(newUser).then(user => {
            this.setState({
                user:user,
            })
        })
        // this.userService.registerUser(newUser)
    }

    loginUser = (username, password) => {
        console.log("login user was called from NotLoggedIn with un: " + username + " and pw: " + password)
        let login = {
            username: username,
            password: password
        }
        this.userService.loginUser(login).then(user =>{
            console.log("Fetched user in NotLoggedIn: " + JSON.stringify(user))
            this.setState({
                user: user
            })
        })
        console.log("here with user: " + JSON.stringify(this.state.user))
    }


    test = () => {
        console.log("test was called")
        fetch('http://localhost:8080/test')
            .then(response => response.json())
            .then(json => console.log(json)).catch(function (error) {
            console.log("error: " + error)
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/"
                               render={() =>
                                   <Login
                                       login={this.loginUser}
                                       test={this.userService.currentUser}/>}/>
                        <Route path="/register"
                               render={() =>
                                   <Register
                                       registerUser={this.registerUser}
                                       test={this.test}/>}/>
                        <Link to="/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>

                    </div>
                </Router>
            </div>
        );
    };
}

export default NotLoggedIn