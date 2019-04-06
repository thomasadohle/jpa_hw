import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import CourseService from "../services/CourseService"

const service =  CourseService



//Assigns attributes of the state to props of a component (WidgetList)
const mapStateToProps = (state, ownProps) => ({
    widgets: ownProps.widgets, //CourseService.findWidgets(ownProps.topicId,"mapStateToProps")
    topicFromCourseEditor: ownProps.topicFromCourseEditor.id,
    //topicFromReducer: state.topicId,
    viewType: state.viewType,
    deleteWidgets: [],
    createWidgets: [],
    updateWidgets: []
})


//Dispatch: calls a method in the reducer
const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: (widget,topic) =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget,
            topic: topic
        }),
    newTopic: (topic) =>
        dispatch({
           type: 'NEW_TOPIC',
           topic: topic
        }),
    addWidget: (widgetType, topicId) =>
        dispatch({
            type: 'ADD_WIDGET',
            topicId: topicId,
            widgetType: widgetType
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

    saveWidget: (widget,topicId) =>
        dispatch({
            type: "SAVE_WIDGET",
            topicId: topicId,
            widget: widget
        }),
    updateView: (viewType) =>
        dispatch({
            type: "UPDATE_VIEW",
            viewType: viewType
        }),
    moveUp: (widget) =>
        dispatch({
            type: "MOVE_UP",
            widget: widget
        }),
    moveDown: (widget) =>
        dispatch({
            type: "MOVE_DOWN",
            widget: widget
        })


})

const WidgetListContainer = connect(
    mapStateToProps,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer