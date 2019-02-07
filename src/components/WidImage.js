import React from 'react'
import "./Styling/course-editor.style.client.css"


const WidImage = ({widget, updateWidget}) =>
    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">

        <div className="form-group row col-12">
            <label className="col-2 col-form-label">Image URL</label>
            <input className="form-control col-10"
                   placeholder={widget.image.url}
                   type="text"></input>
        </div>
        <div className="form-group row col-12">
            <label className="col-2 col-form-label">Widget name</label>
            <input className="form-control col-10" placeholder="Widget name" type="text"></input>
        </div>
        <button onClick={() => updateWidget(widget)}
                className="btn btn-primary">Update
        </button>
        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            <img
                className="wbdv-image-widget-image responsive"
                src={widget.image.url}></img>
        </div>
    </div>
export default WidImage