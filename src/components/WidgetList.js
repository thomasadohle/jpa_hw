import React from 'react'
import LinkWidget from "./CourseEditor";
import ImageWidget from "./Widget-Image"
import ParagaphWidget from "./Widget-Paragraph";
import HeadingWidget from "./Widget-Heading"
import ListWidget from "./Widget-List"


const WidgetList = () =>

            <div className="row col-12 container"
                 id="wbdv-widget-container">
                <LinkWidget/>
                <ImageWidget/>
                <HeadingWidget/>
                <ParagaphWidget/>
                <ListWidget/>
            </div>



export default WidgetList;