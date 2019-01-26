import React from 'react'


export default class HeadingWidget
    extends React.Component {
    render() {
        return (
            <div className="row col-10 container wbdv-heading-widget centered wbdv-widget"
                 data-name="sample-heading-widget">
                <div className="row col-lg-12 wbdv-widget-first-row">
                    <div className="col-lg-6 wbdv-widget-title">
                        <h3>Heading Widget</h3>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon name="arrow-round-up" size="large" className="wbdv-widget-move-icon"></ion-icon>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon name="arrow-round-down" size="large" className="wbdv-widget-move-icon"></ion-icon>
                    </div>
                    <div className="col-lg-3 wbdv-widget-select-widget-type">
                        <select className="custom-select custom-select-lg mb-3">
                            <option selected>Heading</option>
                            <option value="1">Paragraph</option>
                            <option value="2">List</option>
                            <option value="3">Image</option>
                        </select>
                    </div>
                    <div className="col-lg-1">
                        <ion-icon name="close-circle-outline" size="large" className="wbdv-widget-delete-icon"></ion-icon>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-heading">
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Heading text"></input>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-select-size">
                    <div className="col-12">
                        <select className="custom-select custom-select-lg mb-3">
                            <option selected>Choose size</option>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                        </select>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-name">
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Widget name"></input>
                    </div>
                </div>
                <div className="row col-lg-12">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12">
                    <h5>Heading Text</h5>
                </div>
            </div>

        );
    }
}