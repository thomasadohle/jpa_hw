import React from 'react'
import WidImage from './WidImage'
import WidParagraph from './WidParagraph'
import WidLink from "./WidLink"
import WidList from "./WidList"
import WidHeading from "./WidHeading"


const WidComponent = ({widget, deleteWidget, updateWidget, viewType, moveUp, moveDown, topic, saveWidget}) =>
    <div className="row col-10 container wbdv-heading-widget centered wbdv-widget"
         data-name="sample-image-widget">
        <div className="row col-lg-12 wbdv-widget-first-row">
            <div className="col-lg-4 wbdv-widget-title">
                <h3>{widget.title}</h3>
            </div>
            <div className="col-lg-1 ">
                <ion-icon className="wbdv-widget-move-icon" name="arrow-round-up" size="large"
                          onClick={() => {
                              console.log("clicked up")
                              moveUp(widget)
                          }
                          }></ion-icon>
            </div>
            <div className="col-lg-1 ">
                <ion-icon className="wbdv-widget-move-icon" name="arrow-round-down" size="large"
                          onClick={() => {
                              console.log("clicked down")
                              moveDown(widget)
                          }
                          }></ion-icon>
            </div>
            <div className="col-lg-3 wbdv-widget-select-widget-type">
                <select className="custom-select custom-select-lg mb-3" id={widget.id}
                        onChange={() => {
                            var id = widget.id
                            console.log("Widget with ID " + widget.id + "should become a " + document.getElementById(id).value)
                            widget.widgetType = document.getElementById(id).value.toUpperCase()
                            updateWidget(widget)
                        }}>
                    <option selected>{widget.widgetType}</option>
                    <option value="HEADING">Heading</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
                    <option value="PARAGRAPH">Pargraph</option>
                </select>
            </div>
            <div className="col-lg-2"
                onClick={() => saveWidget(widget,topic)}>
                <button type="button" className="btn btn-info">Save</button>
            </div>
            <div className="col-lg-1 " onClick={() => deleteWidget(widget, topic)}>
                <ion-icon className="wbdv-widget-delete-icon" name="close-circle-outline"
                          size="large">
                </ion-icon>
            </div>

        </div>
        {widget.widgetType === "IMAGE" &&
        <WidImage widget={widget}
                  updateWidget={updateWidget}
                  viewType={viewType}
                    saveWidget={saveWidget}/>}
        {widget.widgetType === "PARAGRAPH" &&
        <WidParagraph widget={widget}
                      updateWidget={updateWidget}
                      viewType={viewType}
                      saveWidget={saveWidget}/>}
        {widget.widgetType === "LIST" &&
        <WidList widget={widget}
                 updateWidget={updateWidget}
                 viewType={viewType}
                 saveWidget={saveWidget}/>}
        {widget.widgetType === "HEADING" &&
        <WidHeading widget={widget}
                    updateWidget={updateWidget}
                    viewType={viewType}
                    saveWidget={saveWidget}/>}

    </div>
export default WidComponent