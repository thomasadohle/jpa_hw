import widgetService from "./WidgetService"

class ListWidgetService {
    constructor() {
        this.baseUrl = "https://quiet-ridge-17115.herokuapp.com"
    }

    findAllListWidgets = () => {
        const url = this.baseUrl + "/api/list/widget"

        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
    }



    createListWidget = topicId => {
        const url = this.baseUrl + "/api/topic/" + topicId + "/list/widget"
        const newWidget = {
            height: 5,
            width: 5,
            title: "The Final Season",
            ordered: false,
            items: ["enter","each","item","on","a","new","line"]
        }
        return fetch(url, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(newWidget),
            headers: {
                "Content-Type": "application/json",
            }

        }).then(widget => widget.json()).then(response => console.log("addWidget: " + JSON.stringify(response)))
    }

    deleteListWidget = widgetId => {
        const url = this.baseUrl + "/api/list/widget/" + widgetId
        return fetch(url, {
            method: "DELETE"
        })
    }

    saveListWidget = widget => {
        const url = this.baseUrl + "/api/list/widget/" + widget.id
        return fetch(url, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(widget),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => console.log("SavedImageWidget is: " + JSON.stringify(response)))
    }
}
let listWidgetService = new ListWidgetService();
export default listWidgetService