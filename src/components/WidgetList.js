import React from 'react'
import LinkWidget from "./CourseEditor";
import ImageWidget from "./WidImage"
import ParagraphWidget from "./WidParagraph";
import HeadingWidget from "./WidHeading"
import ListWidget from "./WidgList"
import WidComponent from "./WidComponent"



const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
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


export default WidgetList;