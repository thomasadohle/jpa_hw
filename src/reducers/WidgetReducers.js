import {combineReducers} from 'redux'
import setUp from "./InitialState"
import CourseService from "../services/CourseService"

const service = CourseService
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


const widgetReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            return {
                //widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
                widgets: service.deleteWidget(123)
            }
        case 'ADD_WIDGET':
            const newWidgetId = Math.random()*100
            return {
                widgets: [
                    ...state.widgets,
                    {
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
        case'FIND_WIDGETS_BY_TOPIC':
            return state.widgets
        case 'RETURN_ALL_WIDGETS':
            return state.widgets
        default:
            return state

    }
}

export default widgetReducer;