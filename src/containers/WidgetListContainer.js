import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import CourseService from "../services/CourseService"

const service =  CourseService



//Assigns attributes of the state to props of a component (WidgetList)
const mapStateToProps = (state, ownProps) => ({
    widgets: state.widgets
})



//Dispatch: calls a method in the reducer
const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    findWidgetById: widget =>
        dispatch({
            type:'FIND_WIDGET_BY_ID',
            id: widget.id
        }),
    findWidgetsByTopic: topic =>
        dispatch({
            type: 'FIND_WIDGETS_BY_TOPIC',
            topic: topic
        }),
    findAllWidgets: state =>
        dispatch({
            type: 'FIND_ALL_WIDGETS',
            state: state
        })

})

const WidgetListContainer = connect(
    mapStateToProps,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer