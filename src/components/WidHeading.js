import React from 'react'


const WidHeading = ({widget, updateWidget}) =>

    <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
        <div className="form-group col-12 row">
            <label className="col-2 col-form-label">Heading text</label>
            <input type="text" className="form-control col-10" placeholder={widget.heading.headingText}></input>
        </div>


        <div className="form-group row col-12">
            <label className="col-2 col-form-label">Select Size</label>
            <select className="custom-select custom-select-lg mb-3 col-10">
                <option selected>H{widget.heading.headingSize}</option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>
        </div>


        <div className="form-group col-12 row">
            <label className="col-2 col-form-label">Widget Name</label>
            <input type="text" className="form-control col-10" placeholder="Widget name"></input>
        </div>

        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            {widget.heading.headingSize ==1 &&
            <h1>{widget.heading.headingText}</h1>}
            {widget.heading.headingSize ==2 &&
            <h2>{widget.heading.headingText}</h2>}
            {widget.heading.headingSize ==3 &&
            <h3>{widget.heading.headingText}</h3>}

        </div>
    </div>

export default WidHeading