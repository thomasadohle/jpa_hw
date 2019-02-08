import React from 'react'
import WidImage from './WidImage'
import WidParagraph from './WidParagraph'
import WidLink from "./WidLink"
import WidList from "./WidList"
import WidHeading from "./WidHeading"



const WidComponent = ({widget, deleteWidget, updateWidget}) =>
    <div className="row col-10 container wbdv-heading-widget centered wbdv-widget"
         data-name="sample-image-widget">
        <div className="row col-lg-12 wbdv-widget-first-row">
            <div className="col-lg-6 wbdv-widget-title">
                <h3>{widget.title}</h3>
            </div>
            <div className="col-lg-1 ">
                <ion-icon className="wbdv-widget-move-icon" name="arrow-round-up" size="large"></ion-icon>
            </div>
            <div className="col-lg-1 ">
                <ion-icon className="wbdv-widget-move-icon" name="arrow-round-down" size="large"></ion-icon>
            </div>
            <div className="col-lg-3 wbdv-widget-select-widget-type">
                <select className="custom-select custom-select-lg mb-3" id={widget.id}
                    onChange={() => {
                        var id = widget.id
                        console.log("Widget with ID " + widget.id+ "should become a " + document.getElementById(id).value)
                        widget.type = document.getElementById(id).value.toUpperCase()
                        updateWidget(widget)
                }}>
                    <option selected>{widget.type}</option>
                    <option value="HEADING">Heading</option>
                    <option value="LIST">List</option>
                    <option value="IMAGE">Image</option>
                    <option value="LINK">Link</option>
                    <option value="PARAGRAPH">Pargraph</option>
                </select>
            </div>
            <div className="col-lg-1 " onClick={() => deleteWidget()}>
                <ion-icon className="wbdv-widget-delete-icon" name="close-circle-outline"
                          size="large" ></ion-icon>
            </div>

        </div>
        {widget.type ==="IMAGE" &&
        <WidImage widget={widget}
                  updateWidget={updateWidget}/>}
        {widget.type ==="PARAGRAPH" &&
        <WidParagraph widget={widget}
                  updateWidget={updateWidget}/>}
        {widget.type ==="LINK" &&
        <WidLink widget={widget}
                      updateWidget={updateWidget}/>}
        {widget.type ==="LIST" &&
        <WidList widget={widget}
                 updateWidget={updateWidget}/>}
        {widget.type ==="HEADING" &&
        <WidHeading widget={widget}
                 updateWidget={updateWidget}/>}

    </div>
export default WidComponent