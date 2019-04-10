import widgetService from "./WidgetService"

class ImageWidgetService {
    constructor() {
        this.baseUrl = "https://quiet-ridge-17115.herokuapp.com"
    }

    findAllImageWidgets = () => {
        const url = this.baseUrl + "/api/image/widget"

        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
    }

    // updateImageWidget = (widget) => {
    //     const url = this.baseUrl + "/api/image/widget/" + widget.id
    //     return fetch(url, {
    //         method: "PUT",
    //         credentials: "include",
    //         body: JSON.stringify(widget),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     }).then(widget => widget.json()).then(response => console.log("updateWidget: " + JSON.stringify(response)))
    // }


    createImageWidget = topicId => {
        console.log("createWidget in WidgetService called")
        const url = this.baseUrl + "/api/topic/" + topicId + "/image/widget"
        console.log("createImageWidget in ImageWidgetService called with URL " + url)
        const newWidget = {
            height: 5,
            width: 5,
            title: "The Final Season",
            source: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/2017_GameOfThrones_HBO_220817-920x584.jpg",
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

    deleteImageWidget = widgetId => {
        const url = this.baseUrl + "/api/image/widget/" + widgetId
        console.log("deleteImageWidget in ImageWidgetService called with URL " + url)
        return fetch(url, {
            method: "DELETE"
        })
    }

    saveImageWidget = widget => {
        const url = this.baseUrl + "/api/image/widget/" + widget.id
        console.log("saveImageWidget from WidgetSergice called with URL " + url)
        console.log("and widget " + JSON.stringify(widget))
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
let imageWidgetService = new ImageWidgetService();
export default imageWidgetService