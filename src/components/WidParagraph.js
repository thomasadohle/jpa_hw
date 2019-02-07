import React from 'react'

const widParagraph = ({widget, updateWidget}) =>
    <div>
        <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
            <div className="form-group col-12 row">
                <label className="col-2 col-form-label">Paragraph Text</label>
                          <textarea className="form-control col-10" placeholder={widget.paragraph.paragraphText}>
                          </textarea>
            </div>
        </div>

        <div className="row col-lg-12 wbdv-heading-widget-enter-name">
            <div className="form-group row col-12">
                <label className="col-2 col-form-label">Widget Name</label>
                <input className="form-control col-10" placeholder={widget.title} type="text"></input>
            </div>
        </div>
        <div className="row col-lg-12">
            <h3>Preview</h3>
        </div>
        <div className="row col-lg-12">
            <p>{widget.paragraph.paragraphText}</p>
        </div>
    </div>

export default widParagraph