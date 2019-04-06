import React from 'react'
import LinkWidget from "./CourseEditor";
import ImageWidget from "./WidImage"
import ParagraphWidget from "./WidParagraph";
import HeadingWidget from "./WidHeading"
import ListWidget from "./WidList"
import WidComponent from "./WidComponent"


const WidgetList = ({
                        widgets,
                        addWidget, deleteWidget, updateWidget, saveWidget, newTopic,
                        topicFromCourseEditor, topicFromReducer,
                        updateView,
                        viewType,
                        moveUp, moveDown
                    }) => {
    console.log("viewType from WidgetList: " + viewType)
    const val = "EDITOR"
    const courseEditorTopicId = topicFromCourseEditor


    if (topicFromReducer !== undefined) {
        if (topicFromCourseEditor !== topicFromReducer) {
            console.log("newTopic was called")
            newTopic(topicFromCourseEditor)
        }
    }
    return (
        <div>
            <div className="form-inline row col-12">
                <div classname="col-6">

                </div>

                <div className="col-3">
                </div>
                <div className='col-3'>
                    <select className="custom-select custom-select-lg mb-3" id="viewSelector"
                            onLoad={() => {
                                viewType = "EDITOR"
                                console.log("function called")
                            }}

                            onClick={() => {
                                viewType = document.getElementById("viewSelector").value
                                updateView(viewType)
                            }}>
                        <option value="choose">Choose View</option>
                        <option value="EDITOR">Editor View</option>
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
                            moveDown={moveDown}
                            topic={topicFromCourseEditor}
                            saveWidget={saveWidget}/>
                    )
                }

            </div>
            <div classname="row col-12">
                <div className="col-3">
                    <select className="custom-select custom-select-lg mb-3" id="newWidgetType">
                        <option value="HEADING">New Heading Widget</option>
                        <option value="LIST">New List Widget</option>
                        <option value="IMAGE">New Image Widget</option>
                        <option value="PARAGRAPH">New Paragraph Widget</option>
                    </select>
                </div>

                <div className="col-3">
                    <button
                        onClick={() => {
                            let widgetType = document.getElementById("newWidgetType").value
                            console.log("trying to make a new " + widgetType)
                            addWidget(widgetType,topicFromCourseEditor)
                        }}
                        className="btn btn-success">
                        Add
                    </button>
                </div>

            </div>
        </div>
    );
}

export default WidgetList;