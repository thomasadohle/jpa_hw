import {combineReducers} from 'redux'
import setUp from "./InitialState"
import CourseService from "../services/CourseService"
import widgetService from "../services/WidgetService"

const service = CourseService




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
            widgetService.findAllWidgets(action.topic.id).then(widgets =>{
                return {
                    topicId: action.topic.id,
                    widgets: widgets,
                    viewType: action.viewType
                }
            })

        case 'ADD_WIDGET':
            const tempId = Math.random()*1000
            const newWidget = {
                title: "New Widget",
                tempId: tempId,
                widgetType: "HEADING",
                height: 5,
                width: 5,
                source: "",
                text:"",
                size: 1,
                items: [],
                ordered: false
            }
            return {
                widgets: state.widgets.push(newWidget),
                //createWidgets: state.createWidgets.push(newWidget),
                topicId: state.topicId,
            }
        case 'UPDATE_WIDGET':
            console.log(state.widgets)
            return{
                widgets: state.widgets.map(widget => {
                    if((widget.id === action.widget.id) || (widget.tempId === action.widget.tempId)){
                        widget = action.widget
                    } else {widget=widget}
            })
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