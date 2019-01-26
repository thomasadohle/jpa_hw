import React from 'react'
import "./Styling/course-editor.style.client.css"

export default class LinkWidget
    extends React.Component {
    render() {
        return(
            <div className="row col-10 container wbdv-heading-widget centered wbdv-widget"
                 data-name="sample-link-widget">
                <div className="row col-lg-12 wbdv-widget-first-row">
                    <div className="col-lg-6 wbdv-widget-title">
                        <h3>Link Widget</h3>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon className="wbdv-widget-move-icon" name="arrow-round-up" size="large"></ion-icon>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon className="wbdv-widget-move-icon" name="arrow-round-down" size="large"></ion-icon>
                    </div>
                    <div className="col-lg-3 wbdv-widget-select-widget-type">
                        <select className="custom-select custom-select-lg mb-3">
                            <option selected>Link</option>
                            <option value="1">Paragraph</option>
                            <option value="2">List</option>
                            <option value="3">Image</option>
                            <option value="4">Heading</option>
                        </select>
                    </div>
                    <div className="col-lg-1">
                        <ion-icon className="wbdv-widget-delete-icon" id="abc" name="close-circle-outline"
                                  size="large"></ion-icon>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
                    <div className="form-group col-12">
                        <input className="form-control" placeholder="https//reddit.com" type="text"></input>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
                    <div className="form-group col-12">
                        <input className="form-control" placeholder="Link text" type="text"></input>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-name">
                    <div className="form-group col-12">
                        <input className="form-control" placeholder="Widget name" type="text"></input>
                    </div>
                </div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <a href="http://reddit.com">Link Text</a>
                </div>
            </div>
        );}}