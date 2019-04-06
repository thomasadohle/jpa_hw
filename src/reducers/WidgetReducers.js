import {combineReducers} from 'redux'
import setUp from "./InitialState"
import CourseService from "../services/CourseService"
import widgetService from "../services/WidgetService"
import imageWidgetService from "../services/ImageWidgetService"
import paragraphWidgetService from "../services/ParagraphWidgetService"
import listWidgetService from "../services/ListWidgetService"
import headingWidgetService from "../services/HeadingWidgetService"


const service = CourseService


const widgetReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            console.log("widgetId is: " + action.widget.id)
            console.log("topicId is: " + action.topic)
            widgetService.deleteWidget(action.widget.id).then(ret => {
                widgetService.findAllWidgets(action.topic).then(widgets => {
                    return {
                        widgets: widgets,
                        topicId: action.topic
                    }
                })
            })
        case 'NEW_TOPIC':
            console.log(state)
            widgetService.findAllWidgets(action.topic.id).then(widgets => {
                return {
                    topicId: action.topic.id,
                    widgets: widgets,
                    viewType: action.viewType
                }
            })

        case 'ADD_WIDGET':
            switch(action.widgetType) {
                case "IMAGE":
                    imageWidgetService.createImageWidget(action.topicId).then(resp => {
                        widgetService.findAllWidgets(action.topicId).then(widgets => {
                            console.log("widgets after addWidget" + JSON.stringify(widgets))
                            return {
                                widgets: widgets,
                                topicId: action.topicId
                            }
                        })
                    })
                case "PARAGRAPH":
                    paragraphWidgetService.createParagraphWidget(action.topicId).then(resp => {
                        widgetService.findAllWidgets(action.topicId).then(widgets => {
                            return {
                                widgets: widgets,
                                topicId: action.topicId
                            }
                        })
                    })
                case "LIST":
                    listWidgetService.createListWidget(action.topicId).then(resp => {
                        widgetService.findAllWidgets(action.topicId).then(widgets => {
                            return {
                                widgets: widgets,
                                topicId: action.topicId
                            }
                        })
                    })
                case "HEADING":
                    headingWidgetService.createHeadingWidget(action.topicId).then(resp => {
                        widgetService.findAllWidgets(action.topicId).then(widgets => {
                            return {
                                widgets: widgets,
                                topicId: action.topicId
                            }
                        })
                    })
            }

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        widget = action.widget
                    } else {
                        widget = widget
                    }
                })
            }
        case 'SAVE_WIDGET':
            widgetService.saveWidget(action.widget).then(res => {
                widgetService.findAllWidgets(action.topicId).then(widgets => {
                    console.log("Widgets returned after save: " + JSON.stringify(widgets))
                    return {
                        widgets: widgets,
                        topicId: action.topicId
                    }
                })
            })
        case 'UPDATE_VIEW':
            console.log("view changed")
            return {
                viewType: action.viewType,
                widgets: state.widgets,
                topicId: state.topicId
            }
        case "MOVE_UP":
            const fromIndex = state.widgets.indexOf(action.widget)
            const toIndex = fromIndex - 1
            const temp1 = state.widgets[fromIndex]
            const temp2 = state.widgets[toIndex]
            console.log("from index: " + fromIndex)
            console.log("to index: " + toIndex)
            console.log("widget at from index: " + state.widgets[fromIndex].title)
            console.log("widget at to index: " + state.widgets[toIndex].title)

            if (fromIndex === 0) {
                return {
                    viewType: action.viewType,
                    widgets: state.widgets,
                    topicId: state.topicId
                }
            }
            state.widgets[fromIndex] = temp2
            state.widgets[toIndex] = temp1
            console.log(state.widgets)
            return {
                viewType: action.viewType,
                widgets: state.widgets,
                topicId: state.topicId
            }
        case "MOVE_DOWN":
            const fromIndexa = state.widgets.indexOf(action.widget)
            const toIndexa = fromIndexa + 1
            const temp1a = state.widgets[fromIndexa]
            const temp2a = state.widgets[toIndexa]
            console.log("from index: " + fromIndexa)
            console.log("to index: " + toIndexa)
            console.log("widget at from index: " + state.widgets[fromIndexa].title)
            console.log("widget at to index: " + state.widgets[toIndexa].title)

            if (fromIndex > state.widgets.length) {
                return {
                    viewType: action.viewType,
                    widgets: state.widgets,
                    topicId: state.topicId
                }
            }
            state.widgets[fromIndexa] = temp2a
            state.widgets[toIndexa] = temp1a
            console.log(state.widgets)
            return {
                viewType: action.viewType,
                widgets: state.widgets,
                topicId: state.topicId
            }

        default:
            return state

    }
}

export default widgetReducer;