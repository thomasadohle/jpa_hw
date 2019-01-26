import React from 'react'
import "./Styling/course-editor.style.client.css"



export default class ImageWidget
    extends React.Component {

    render() {
        return(
            <div className="row col-10 container wbdv-heading-widget centered wbdv-widget"
                 data-name="sample-image-widget">
                <div className="row col-lg-12 wbdv-widget-first-row">
                    <div className="col-lg-6 wbdv-widget-title">
                        <h3>Image Widget</h3>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon className="wbdv-widget-move-icon" name="arrow-round-up" size="large"></ion-icon>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon className="wbdv-widget-move-icon" name="arrow-round-down" size="large"></ion-icon>
                    </div>
                    <div className="col-lg-3 wbdv-widget-select-widget-type">
                        <select className="custom-select custom-select-lg mb-3">
                            <option selected>Image</option>
                            <option value="1">Heading</option>
                            <option value="2">List</option>
                            <option value="3">Image</option>
                            <option value="4">Link</option>
                        </select>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon className="wbdv-widget-delete-icon" name="close-circle-outline"
                                  size="large"></ion-icon>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
                    <div className="form-group col-12">
                        <input className="form-control" placeholder="https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/2017_GameOfThrones_HBO_220817.jpg"
                               type="text"></input>
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
                    <img
                        className="wbdv-image-widget-image responsive"
                        src='https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/2017_GameOfThrones_HBO_220817.jpg'></img>
                </div>
            </div>
        );}}