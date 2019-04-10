class ParagraphWidgetService {
    constructor() {
        this.baseUrl = "https://quiet-ridge-17115.herokuapp.com"
    }

    findAllImageWidgets = () => {
        const url = this.baseUrl + "/api/paragraph/widget"

        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
    }


    createParagraphWidget = topicId => {
        const url = this.baseUrl + "/api/topic/" + topicId + "/paragraph/widget"
        console.log("createParagraphWidget called with URL " + url)
        const newWidget = {
            height: 5,
            width: 5,
            title: "The Final Season",
            text: "Who will sit on the iron throne?",
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

    deleteParagraphWidget = widgetId => {
        const url = this.baseUrl + "/api/paragraph/widget/" + widgetId
        console.log("deleteParagraphWidget called with URL " + url)
        return fetch(url, {
            method: "DELETE"
        })
    }

    saveParagraphWidget = widget => {
        const url = this.baseUrl + "/api/paragraph/widget/" + widget.id
        console.log("saveParagraphWidget called with URL " + url)
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
let paragraphWidgetService = new ParagraphWidgetService();
export default paragraphWidgetService