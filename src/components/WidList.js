import React from 'react'
import "./Styling/course-editor.style.client.css"

const generatePreview = (wid) => {
    let placeholder = ""
    for (var item in wid.items){
        placeholder += wid.items[item]
        placeholder += "\n"
    }
    return placeholder
}

const WidList = ({widget, updateWidget, viewType}) =>{
    const listItemTextId = "listItemText" + widget.id
    const widgetNameId = "widgetNameField" + widget.id
    const listTypeId = "widgetTypeId" + widget.id
    let listType = ""
    if (widget.ordered === true){listType="Ordered List"}
    if (widget.ordered === false){listType="Unordered List"}

    if (viewType ==="PREVIEW"){
        return (
            <div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    {widget.ordered ===false &&
                    <ul>
                        {widget.items.map(li =>
                            <li>{li}</li>
                        )}
                    </ul>}
                    {widget.ordered === true &&
                    <ol>
                        {widget.items.map(li =>
                            <li>{li}</li>
                        )}
                    </ol>}
                </div>
            </div>
        );
    }

    else {
    return (
    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
        <p>Enter each item on a separate row</p>
        <div className="form-group col-12 row">
            <label className="col-2 col-form-label">List Items</label>
                          <textarea className="form-control col-10"
                                    placeholder={generatePreview(widget)}
                                    type="text"
                                    id={listItemTextId}
                                    onChange={() => {
                                        widget.items = document.getElementById(listItemTextId).value.split("\n")
                                        console.log(document.getElementById(listItemTextId).value.split("\n"))
                                        updateWidget(widget)
                                    }}>

                          </textarea>
        </div>


            <div className="col-12 row">
                <label className="col-2 col-form-label">List Type</label>
                <select className="custom-select custom-select-lg mb-3 col-10"
                        id={listTypeId}
                        onChange={() => {
                            if (document.getElementById(listTypeId).value === "true"){
                                widget.ordered = true
                            } else {
                                widget.ordered = false
                            }
                            updateWidget(widget)
                        }}>
                    <option selected>{listType}</option>
                    <option value="true">Ordered list</option>
                    <option value="false">Unordered list</option>
                </select>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Widget Name</label>
                <input className="form-control col-10" placeholder={widget.title} type="text"
                       id={widgetNameId}
                       onChange={() => {
                           widget.title = document.getElementById(widgetNameId).value
                           updateWidget(widget)
                       }}></input>
            </div>

        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            {widget.ordered ===false &&
                <ul>
                    {widget.items.map(li =>
                        <li>{li}</li>
                    )}
                </ul>}
            {widget.ordered === true &&
            <ol>
                {widget.items.map(li =>
                    <li>{li}</li>
                )}
            </ol>}
        </div>
    </div>);
}}

export default WidList