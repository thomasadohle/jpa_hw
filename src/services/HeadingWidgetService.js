import widgetService from "./WidgetService"

class HeadingWidgetService {
    constructor() {
        this.baseUrl = "https://quiet-ridge-17115.herokuapp.com"
    }

    findAllHeadingWidgets = () => {
        const url = this.baseUrl + "/api/heading/widget"

        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
    }



    createHeadingWidget = topicId => {
        const url = this.baseUrl + "/api/topic/" + topicId + "/heading/widget"
        const newWidget = {
            height: 5,
            width: 5,
            title: "The Final Season",
            size: 1,
            text: "The King in the North"
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

    deleteHeadingWidget = widgetId => {
        const url = this.baseUrl + "/api/heading/widget/" + widgetId
        return fetch(url, {
            method: "DELETE"
        })
    }

    saveHeadingWidget = widget => {
        const url = this.baseUrl + "/api/heading/widget/" + widget.id
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
let headingWidgetService = new HeadingWidgetService();
export default headingWidgetService