import React from 'react'
import WidHeading from './WidHeading'
import WidImage from './WidImage'

const WidComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>
        <button onClick={() => deleteWidget(widget)}>Delete</button>
        <select
            onChange={(event) => {
                widget.type = event.target.value
                updateWidget(widget)
            }}
            className="form-control" value={widget.type}>
            <option value="HEADING">Heading</option>
            <option value="IMAGE">Image</option>
        </select>
        {
            widget.type=='HEADING' &&
            <Widget-Heading
                updateWidget={updateWidget}
                widget={widget}/> ||
            widget.type=='IMAGE'   && <WidImage   widget={widget}/>
        }
    </div>

export default WidComponent