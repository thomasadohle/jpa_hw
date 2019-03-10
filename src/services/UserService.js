class _UserService {
    constructor() {
        this.baseUrl = "http://localhost:8080"
    }

    getUsers = () => {
        console.log("getUsers")
        fetch('https://salty-falls-99802.herokuapp.com/test')

            .then(response => response.json())
            .then(json => console.log(json)).catch(function (error) {
            console.log("error: " + error)
        })
    }

    registerUser = (user) => {
        const url = this.baseUrl + "/api/register"
        console.log("user received by registerUser in UserService is: " + JSON.stringify(user))
        console.log("url is: " + url)
        fetch(url, {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.json())
            .then(json => console.log(json)).catch(function (error) {
            console.log("error: " + error)
        })
    }

    loginUser = (user) => {
        const url = this.baseUrl + "/api/login"
        let loggedInUser
        console.log("logging in with un: " + user.username + " and pw: " + user.password)
        fetch(url, {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.json())
            .then(json => {
                console.log(json)
                loggedInUser = json
            }).catch(function (error) {
            console.log("error: " + error)
        })

    }


    currentUserQuery = () => {
        const url = this.baseUrl + "/api/profile"
        return fetch(url, {
            method: "POST",
            credentials: 'include'
        }).then(function (response) {
            console.log("response is: " + response)
            return response.json()
        }).then(function (json) {
            console.log("json is: " + JSON.stringify(json))
            return json
        })
            .catch(function (error) {
                console.log("error in currentUser: " + error)
            })
    }


}

let userService = new _UserService()
export default userService