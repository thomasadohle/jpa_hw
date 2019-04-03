import React from 'react'


const WidHeading = ({widget, updateWidget,viewType}) => {
    const headingTextId = "headingText" + widget.id
    const widgetNameId = "widgetName" + widget.id
    const headingSizeId = "headingSize" + widget.id

    if (viewType==="PREVIEW"){
        return (
            <div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    {widget.size == 1 &&
                    <h1>{widget.text}</h1>}
                    {widget.size == 2 &&
                    <h2>{widget.text}</h2>}
                    {widget.size == 3 &&
                    <h3>{widget.text}</h3>}

                </div>
            </div>
        );
    }

    else {
    return (
        <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Heading text</label>
                <input type="text" className="form-control col-10"
                       placeholder={widget.text}
                       id={headingTextId}
                       onChange={() => {
                           widget.text = document.getElementById(headingTextId).value
                           updateWidget(widget)
                       }}></input>
            </div>


            <div className="form-group row col-12">
                <label className="col-2 col-form-label">Select Size</label>
                <select className="custom-select custom-select-lg mb-3 col-10"
                        id={headingSizeId}
                        onChange={() => {
                            widget.size = document.getElementById(headingSizeId).value
                            updateWidget(widget)
                        }}>
                    <option selected>H{widget.size}</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
            </div>


            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Widget Name</label>
                <input type="text" className="form-control col-10" placeholder={widget.title}
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
                {widget.size == 1 &&
                <h1>{widget.text}</h1>}
                {widget.size == 2 &&
                <h2>{widget.text}</h2>}
                {widget.size == 3 &&
                <h3>{widget.text}</h3>}

            </div>
        </div>)
}}

export default WidHeading