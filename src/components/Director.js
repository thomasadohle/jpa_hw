import React, {Component} from 'react'
import WhiteBoard from "./WhiteBoard"
import NotLoggedIn from "./NotLoggedIn"
import userService from "../services/UserService"

class Director extends Component {
    constructor() {
        super();
        this.userService = userService
        this.state = {
            loggedIn: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
        this.userService.currentUserQuery().then(user => {
            console.log("componentDidMount: " + JSON.stringify(user))
            this.setState({
                currentUser: user
            })
        }).then(data =>{
            console.log("state: currentUser: " + this.state.currentUser)
            if (this.state.currentUser) {
                this.setState({
                    loggedIn: true
                })
            }
        })
    }


    render() {
        let comp = <NotLoggedIn/>
        if (this.state.loggedIn) {
            comp = <WhiteBoard/>
        }
        return (
            <div>
                {comp}
            </div>
        )
    }
}export default Director

// function Director (props) {
//     const currentUser = props.currentUser
//     console.log("currentUser from Director is: " + JSON.stringify(currentUser))
//     if (1==1){
//         return <NotLoggedIn />
//     } else {
//         return <WhiteBoard currentUser={currentUser}/>
//     }
//
// }
