import imageWidgetService from "./ImageWidgetService"
import paragraphWidgetService from "./ParagraphWidgetService"
import listWidgetService from "./ListWidgetService"
import headingWidgetService from "./HeadingWidgetService";

class WidgetService {
    constructor() {
        this.baseUrl = "https://quiet-ridge-17115.herokuapp.com"
    }

    findAllWidgets = (topicId) => {
        const url = this.baseUrl + "/api/topic/" + topicId + "/widget"
        console.log("findAllWidgets called in WidgetService with URL " + url)
        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
            //.then(widgets => console.log("Widgets received by WidgetService: " + JSON.stringify(widgets)))
    }

    updateWidget = widget => {
        const url = this.baseUrl + "/api/widget/" + widget.id
        console.log("updateWidget in WidgetService called with URL: " + url)
        return fetch(url, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(widget),
            headers: {
                "Content-Type": "application/json",
            }

        }).then(widget => widget.json()).then(response => console.log("updateWidget: " + JSON.stringify(response)))
    }


    createWidget = (widgetType,topicId) => {
         if (widgetType === "IMAGE"){
              imageWidgetService.createImageWidget(topicId)
         } else if (widgetType === "PARAGRAPH") {
             return paragraphWidgetService.createParagraphWidget(topicId)
         } else if (widgetType === "LIST"){
             return listWidgetService.createListWidget(topicId)
         }
    }

    deleteWidget = widgetId => {
        const url = this.baseUrl + "/api/widget/" + widgetId
        console.log("deleteWidget in widgetService called with URL " + url)
        return fetch(url, {
            method: "DELETE"
        })
    }

    saveWidget = widget => {
        if (widget.widgetType === "IMAGE"){
            return imageWidgetService.saveImageWidget(widget)
        } else if (widget.widgetType === "PARAGRAPH"){
            return paragraphWidgetService.saveParagraphWidget(widget)
        } else if (widget.widgetType === "LIST"){
            return listWidgetService.saveListWidget(widget)
        } else if (widget.widgetType === "HEADING"){
            return headingWidgetService.saveHeadingWidget(widget)
        }
    }
}
let widgetService = new WidgetService();
export default widgetService