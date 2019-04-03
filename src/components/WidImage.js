import React from 'react'
import "./Styling/course-editor.style.client.css"



const WidImage = ({widget, updateWidget,viewType}) =>{

    const urlFieldID = "urlField" + widget.id;
    const widgetNameId = "widgetName" + widget.id
    if (viewType === "PREVIEW"){
        return (
            <div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <img
                        className="wbdv-image-widget-image responsive"
                        src={widget.source}>
                    </img>
                </div>
            </div>
        );
    }

    else{
    return(
    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">

        <div className="form-group row col-12">
            <label className="col-2 col-form-label">Image URL</label>
            <input className="form-control col-10" id={urlFieldID}
                   placeholder={widget.source}
                   type="text"
                   onChange={() => {
                       console.log(document.getElementById(urlFieldID).value)
                       widget.source = document.getElementById(urlFieldID).value
                       updateWidget(widget)
                   }}>
            </input>
        </div>
        <div className="form-group row col-12">
            <label className="col-2 col-form-label">Widget name</label>
            <input className="form-control col-10" placeholder={widget.title} type="text" id={widgetNameId}
                   onChange={() => {
                       widget.title = document.getElementById(widgetNameId).value
                       updateWidget(widget)
                   }}>
            </input>
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
                src={widget.source}>
            </img>
        </div>
    </div>);

}}
export default WidImage