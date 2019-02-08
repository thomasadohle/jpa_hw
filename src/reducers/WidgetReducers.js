import {combineReducers} from 'redux'
import setUp from "./InitialState"
import CourseService from "../services/CourseService"

const service = CourseService
// const createNewWidget = (action) =>{
//     const newWidget =
//         {
//             id: action.widget.id,
//             title: action.widget.title,
//             type: action.widget.type,
//             link: {
//                 url: action.widget.link.url,
//                 linkText: action.widget.link.linkText
//             },
//             image: {
//                 url: action.widget.image.url
//
//             },
//             heading: {
//                 headingText: action.widget.heading.headingText,
//                 headingSize: action.widget.heading.headingSize
//             },
//             paragraph: {
//                 paragraphText: action.widget.paragraph.paragraphText
//             },
//             list: {
//                 listType: action.widget.list.listType,
//                 listItems: action.widget.list.listItems
//             }
//         }
// }


const widgetReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            console.log(state)
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                topicId: state.topicId,
                //newWidgets: state.newWidgets
            }
        case 'NEW_TOPIC':
            console.log(state)
            return{
                topicId: action.topic,
                widgets: service.findWidgets(action.topic,"widgetReducer NEW_TOPIC"),
                viewType: action.viewType
            }
        case 'ADD_WIDGET':
            console.log(state)
            const newWidgetId = Math.random()*100
            const newWidget = {
                id: newWidgetId,
                title: "New Widget",
                type: "HEADING",
                link: {
                    url: "",
                    linkText: ""
                },
                image: {
                    url: "",

                },
                heading: {
                    headingText: "New Widget",
                    headingSize: "1"
                },
                paragraph: {
                    paragraphText: ""
                },
                list: {
                    listType: "",
                    listItems: []
                }
            }
            console.log(state)
            return {
                widgets: [
                    ...state.widgets,
                    newWidget
                ],
                topicId: state.topicId,
                //deletes: state.deletes
            }
        case 'UPDATE_WIDGET':
            console.log(state)
            return{
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget),
                //newWidgets: state.newWidgets,
                //deletes: this.state.deletes
            }
        case 'SAVE_WIDGETS':
            console.log(state.widgets)
            console.log(action.topicId)
            service.saveWidgets(state.widgets, action.topicId)
            return{
                widgets: service.findWidgets(action.topicId),
                topicId: action.topicId
            }
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

            if (fromIndex ===0){
                return{
                    viewType: action.viewType,
                    widgets: state.widgets,
                    topicId: state.topicId
                }
            }
            state.widgets[fromIndex] = temp2
            state.widgets[toIndex] = temp1
            console.log(state.widgets)
            return{
                viewType: action.viewType,
                widgets: state.widgets,
                topicId: state.topicId
            }
        case "MOVE_DOWN":
            const fromIndexa = state.widgets.indexOf(action.widget)
            const toIndexa = fromIndexa +1
            const temp1a = state.widgets[fromIndexa]
            const temp2a = state.widgets[toIndexa]
            console.log("from index: " + fromIndexa)
            console.log("to index: " + toIndexa)
            console.log("widget at from index: " + state.widgets[fromIndexa].title)
            console.log("widget at to index: " + state.widgets[toIndexa].title)

            if (fromIndex > state.widgets.length){
                return{
                    viewType: action.viewType,
                    widgets: state.widgets,
                    topicId: state.topicId
                }
            }
            state.widgets[fromIndexa] = temp2a
            state.widgets[toIndexa] = temp1a
            console.log(state.widgets)
            return{
                viewType: action.viewType,
                widgets: state.widgets,
                topicId: state.topicId
            }

        // case 'FIND_WIDGET_BY_ID':
        //     for (var widget in state.widgets){
        //         if (widget.id === action.widget.id){
        //             return widget
        //         }
        //     }
        // case'FIND_WIDGETS_BY_TOPIC':
        //     return {
        //         widgets: service.findWidgets(action.topic.id)
        //     }
        // case 'RETURN_ALL_WIDGETS':
        //     return {
        //
        //     }
        default:
            return state

    }
}

export default widgetReducer;