class _UserService {
    constructor() {
        this.baseUrl = "https://salty-falls-99802.herokuapp.com"
    }


    registerUser = (user) => {
        const url = this.baseUrl + "/api/register";
        console.log("user received by registerUser in UserService is: " + JSON.stringify(user));
        console.log("url is: " + url);
        return fetch(url, {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "text/plain",
                }

            }
        )
            .then(response => response.json())
            .then(json => console.log(json)).catch(function (error) {
                console.log("error in registerUser in UserService: " + error)
            })
    };

    loginUser = (user) => {
        const url = this.baseUrl + "/api/login";
        let loggedInUser;
        console.log("logging in userService with user:" + JSON.stringify(user) + "and url: " + url);
        return fetch(url,
            {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => {
                console.log("Fetched loggedInUser: " + response);
                return response.json()
            }).catch(error => console.log("error in loginUser: " + error))
    };

    logoutUser = () => {
        let url = this.baseUrl + "/api/logout";
        return fetch(url, {
            method: "POST",
            credentials: "include"
        })
    };


    currentUserQuery = () => {
        const url = this.baseUrl + "/api/profile";
        return fetch(url, {
            method: "POST",
            credentials: 'include'
        }).then(function (response) {
            console.log("response is: " + response);
            return response.json()
        }).then(function (json) {
            console.log("json is: " + JSON.stringify(json));
            return json
        })
            .catch(function (error) {
                console.log("error in currentUser: " + error)
            })
    }


}

let userService = new _UserService();
export default userService