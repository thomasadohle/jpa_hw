import {combineReducers} from 'redux'
import setUp from "./InitialState"
import CourseService from "../services/CourseService"

const service = new CourseService()
const createNewWidget = (action) =>{
    const newWidget =
        {
            id: action.widget.id,
            title: action.widget.title,
            type: action.widget.type,
            link: {
                url: action.widget.link.url,
                linkText: action.widget.link.linkText
            },
            image: {
                url: action.widget.image.url

            },
            heading: {
                headingText: action.widget.heading.headingText,
                headingSize: action.widget.heading.headingSize
            },
            paragraph: {
                paragraphText: action.widget.paragraph.paragraphText
            },
            list: {
                listType: action.widget.list.listType,
                listItems: action.widget.list.listItems
            }
        }
}


const widgetReducer = (state = setUp, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            return {
                //widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
                widgets: service.deleteWidget(action.widget.id)
            }
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    createNewWidget(action)
                ]
            }
        case 'UPDATE_WIDGET':
            return{
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case 'FIND_WIDGET_BY_ID':
            for (var widget in state.widgets){
                if (widget.id === action.widget.id){
                    return widget
                }
            }
        case'RETURN_WIDGETS_FOR_TOPIC':
            return 0
        case 'RETURN_ALL_WIDGETS':
            return state.widgets
        default:
            return state

    }
}

export default widgetReducer;