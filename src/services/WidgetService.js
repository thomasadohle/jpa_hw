class WidgetService {
    constructor() {
        this.baseUrl = "localhost:8080"
    }

    findAllWidgets = (topicId) => {
        const url = this.baseUrl + "/api/topic/" + topicId + "/widget"
        console.log("findAllWidgets called in WidgetService with URL " + url)
        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(widgets => console.log("Widgets received by WidgetService: " + widgets))
    }
} export default WidgetService