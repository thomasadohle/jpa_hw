import React from 'react'
import LinkWidget from "./CourseEditor";
import ImageWidget from "./WidImage"
import ParagraphWidget from "./WidParagraph";
import HeadingWidget from "./WidHeading"
import ListWidget from "./WidList"
import WidComponent from "./WidComponent"



const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, saveWidgets,newTopic,topicFromCourseEditor, topicFromReducer,updateView,viewType, moveUp, moveDown}) =>{
    console.log("viewType from WidgetList: " + viewType)
    const val = "EDITOR"
    const courseEditorTopicId = topicFromCourseEditor



    if (topicFromReducer !==undefined){
        if (topicFromCourseEditor !== topicFromReducer){
            console.log("newTopic was called")
            newTopic(topicFromCourseEditor)
        }
    }
    return (
    <div>
        <div className = "form-inline row col-12">
            <div classname="col-6">

            </div>

            <div classname="col-3">
                <button className="btn btn-success"
                        onClick={() => {
                            console.log(topicFromCourseEditor)
                            saveWidgets(topicFromCourseEditor)
                        }
                        }>Save Changes</button>
            </div>
            <div className="col-3">
            </div>
            <div className='col4'>
                <select className="custom-select custom-select-lg mb-3" id="viewSelector"
                        onLoad = {() => {
                            viewType = "EDITOR"
                            console.log("function called")
                        }}

                        onClick={() => {
                            viewType = document.getElementById("viewSelector").value
                            updateView(viewType)
                        }}>
                    <option value="choose">Choose View</option>
                    <option  value="EDITOR">Editor View</option>
                    <option value="PREVIEW">Preview View</option>
                </select>
        </div>



        </div>
        <div className="list-group" id="widget-list">
            {
                widgets.map(widget =>
                    <WidComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}
                        viewType={viewType}
                        moveUp={moveUp}
                        moveDown={moveDown}/>
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