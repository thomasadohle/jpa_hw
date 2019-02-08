import React from 'react'
import LinkWidget from "./CourseEditor";
import ImageWidget from "./WidImage"
import ParagraphWidget from "./WidParagraph";
import HeadingWidget from "./WidHeading"
import ListWidget from "./WidList"
import WidComponent from "./WidComponent"



const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, saveWidgets,newTopic,topicFromCourseEditor, topicFromReducer}) =>{
    console.log("topicFromCourseEditor: " + topicFromCourseEditor);
    console.log("topicFromReducer: "+topicFromReducer)
    console.log("widgets: " + widgets)
    console.log("Type of topicFromRducer: " + (typeof topicFromReducer))

    if (topicFromReducer !==undefined){
        if (topicFromCourseEditor !== topicFromReducer){
            console.log("newTopic was called")
            newTopic(topicFromCourseEditor)
        }
    }





    return (
    <div>
        <div className = "row col-12">
            <div classname="col-10">
                <h2>Widget List {widgets.length}</h2>
            </div>
            <div classname="col-2">
                <button className="btn btn-primary">Save Changes</button>
            </div>


        </div>
        <div className="list-group" id="widget-list">
            {
                widgets.map(widget =>
                    <WidComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                )
            }
            <button
                onClick={addWidget}
                className="btn btn-success">
                Add
            </button>
        </div>
    </div>
    );
}

export default WidgetList;