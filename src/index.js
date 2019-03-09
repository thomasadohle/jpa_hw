import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import WhiteBoard from './components/WhiteBoard'
import WidgetList from "./components/WidgetList"
import widgetReducer from "./reducers/WidgetReducers"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Login from "./components/Login"
import NotLoggedIn from "./components/NotLoggedIn"
import Director from "./components/Director"
// import userService from "./services/UserService"
const store = createStore(widgetReducer);
// const currentUser = userService.currentUser()
// console.log("current user in index: " + currentUser)

// if (1===2){
//     ReactDOM.render(
//         <div className="container-fluid">
//             <WhiteBoard/>
//         </div>,
//         document.getElementById("root")
//     );}
//     if (1===1){
//         ReactDOM.render(
//            <NotLoggedIn/>,
//             document.getElementById("root")
//         );
// }
ReactDOM.render(
        <div className="container-fluid">
            <Director />
        </div>,
        document.getElementById("root")
    );