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
                newWidgets: [],
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