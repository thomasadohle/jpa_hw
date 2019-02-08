import React from 'react'
import "./Styling/course-editor.style.client.css"

const WidLink = ({widget, updateWidget,viewType}) =>{
    const urlId = "urlField" + widget.id
    const linkTextId = "linkTextField" + widget.id
    const widgetNameId = "widgetNameField" + widget.id

    if (viewType==="PREVIEW"){
        return (
            <div>

                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <a href={widget.link.url}>{widget.link.linkText}</a>
                </div>
            </div>
        );
    }
    else
   { return (
    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">

            <div className="form-group row col-12 ">
                <label className="col-2 col-form-label">URL Address</label>
                <input className="form-control col-10"
                       placeholder={widget.link.url}
                       type="text"
                        id={urlId}
                       onChange={() => {
                           widget.link.url = document.getElementById(urlId).value
                           updateWidget(widget)
                       }}>
                </input>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Link Text</label>
                <input className="form-control col-10"
                       placeholder={widget.link.linkText}
                       type="text"
                       id = {linkTextId}
                       onChange={() => {
                           widget.link.linkText = document.getElementById(linkTextId).value
                           updateWidget(widget)
                       }}></input>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Widget Name</label>
                <input className="form-control col-10"
                       placeholder={widget.title}
                       type="text"
                       id = {widgetNameId}
                       onChange={() => {
                           widget.title = document.getElementById(widgetNameId).value
                           updateWidget(widget)
                       }}></input>
            </div>

        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            <a href={widget.link.url}>{widget.link.linkText}</a>
        </div>
    </div>);
}}
export default WidLink