import React from 'react'
import "./Styling/course-editor.style.client.css"

const WidLink = ({widget, updateWidget}) =>

    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">

            <div className="form-group row col-12 ">
                <label className="col-2 col-form-label">URL Address</label>
                <input className="form-control col-10" placeholder={widget.link.url} type="text"></input>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Link Text</label>
                <input className="form-control col-10" placeholder={widget.link.linkText} type="text"></input>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Widget Name</label>
                <input className="form-control col-10" placeholder={widget.title} type="text"></input>
            </div>

        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            <a href={widget.link.url}>Link Text</a>
        </div>
    </div>

export default WidLink