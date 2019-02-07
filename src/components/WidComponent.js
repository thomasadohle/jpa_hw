import React from 'react'
import WidHeading from './WidHeading'
import WidImage from './WidImage'
//
// const WidComponent = ({widget, deleteWidget, updateWidget}) =>
//     <div>
//         <button onClick={() => deleteWidget(widget)}>Delete</button>
//         <select
//             onChange={(event) => {
//                 widget.type = event.target.value
//                 updateWidget(widget)
//             }}
//             className="form-control" value={widget.type}>
//             <option value="HEADING">Heading</option>
//             <option value="IMAGE">Image</option>
//         </select>
//         {
//             widget.type=='HEADING' &&
//             <Widget-Heading
//                 updateWidget={updateWidget}
//                 widget={widget}/> ||
//             widget.type=='IMAGE'   && <WidImage   widget={widget}/>
//         }
//     </div>




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
                <select className="custom-select custom-select-lg mb-3">
                    <option selected>{widget.type}</option>
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
        {widget.type ==="IMAGE" &&
        <WidImage widget={widget}
                  updateWidet={updateWidget}/>}

    </div>
export default WidComponent