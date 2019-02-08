import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import CourseService from "../services/CourseService"

const service =  CourseService



//Assigns attributes of the state to props of a component (WidgetList)
const mapStateToProps = (state, ownProps) => ({
    widgets: state.widgets, //CourseService.findWidgets(ownProps.topicId,"mapStateToProps")
    topicFromCourseEditor: ownProps.topicFromCourseEditor.id,
    topicFromReducer: state.topicId,
    viewType: state.viewType
})



//Dispatch: calls a method in the reducer
const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    newTopic: (topic) =>
        dispatch({
           type: 'NEW_TOPIC',
           topic: topic
        }),
    addWidget: topicId =>
        dispatch({
            type: 'ADD_WIDGET',
            topicId: topicId
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    // findWidgetById: widget =>
    //     dispatch({
    //         type:'FIND_WIDGET_BY_ID',
    //         id: widget.id
    //     }),
    // findWidgetsByTopic: topic =>
    //     dispatch({
    //         type: 'FIND_WIDGETS_BY_TOPIC',
    //         topic: topic
    //     }),
    // findAllWidgets: state =>
    //     dispatch({
    //         type: 'FIND_ALL_WIDGETS',
    //         state: state
    //     }),
    saveWidgets: (topicId) =>
        dispatch({
            type: "SAVE_WIDGETS",
            topicId: topicId
        }),
    updateView: (viewType) =>
        dispatch({
            type: "UPDATE_VIEW",
            viewType: viewType
        })




})

const WidgetListContainer = connect(
    mapStateToProps,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer