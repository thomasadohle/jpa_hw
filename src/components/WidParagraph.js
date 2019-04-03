import React from 'react'

const widParagraph = ({widget, updateWidget, viewType}) =>{
    const textId = "textID" + widget.id
    const nameId = "nameID" + widget.id
    console.log("widParagraph viewType: " + viewType)
    if (viewType ==="PREVIEW"){
        return (
            <div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <p>{widget.text}</p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
                    <div className="form-group col-12 row">
                        <label className="col-2 col-form-label">Paragraph Text</label>
                        <textarea className="form-control col-10" placeholder={widget.text}
                                  id={textId}
                                  onChange={() => {
                                      widget.text = document.getElementById(textId).value
                                      updateWidget(widget)
                                  }}>
                          </textarea>
                    </div>
                </div>


                <div className="form-group row col-12">
                    <label className="col-2 col-form-label">Widget Name</label>
                    <input className="form-control col-10" placeholder={widget.title} type="text"
                           id={nameId}
                           onChange={() => {
                               widget.title = document.getElementById(nameId).value
                               updateWidget(widget)
                           }}></input>
                </div>

                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <p>{widget.text}</p>
                </div>
            </div>)
    }


}
export default widParagraph