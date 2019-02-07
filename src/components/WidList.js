import React from 'react'
import "./Styling/course-editor.style.client.css"

const generatePreview = (wid) => {
    let placeholder = ""
    for (var item in wid.list.listItems){
        placeholder += wid.list.listItems[item]
        placeholder += "\n"
    }
    return placeholder
}

const WidList = ({widget, updateWidget}) =>

    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
        <p>Enter each item on a separate row</p>
        <div className="form-group col-12 row">
            <label className="col-2 col-form-label">List Items</label>
                          <textarea className="form-control col-10" placeholder={generatePreview(widget)}
                                    type="text">

                          </textarea>
        </div>


            <div className="col-12 row">
                <label className="col-2 col-form-label">List Type</label>
                <select className="custom-select custom-select-lg mb-3 col-10">
                    <option selected>{widget.list.listType}</option>
                    <option value="1">Ordered list</option>
                </select>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">List Type</label>
                <input className="form-control col-10" placeholder="Widget name" type="text"></input>
            </div>

        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            {widget.list.listType ==="UNORDERED" &&
                <ul>
                    {widget.list.listItems.map(li =>
                        <li>{li}</li>
                    )}
                </ul>}
            {widget.list.listType ==="ORDERED" &&
            <ol>
                {widget.list.listItems.map(li =>
                    <li>{li}</li>
                )}
            </ol>}
        </div>
    </div>

export default WidList