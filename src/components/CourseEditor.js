import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"
import WidgetAbstract from "./Widget-Abstract";
import ParagaphWidget from "./Widget-Paragraph";
import HeadingWidget from "./Widget-Heading";
import ImageWidget from "./Widget-Image";
import ListWidget from "./Widget-List";
import LinkWidget from "./Widget-Link";

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      module: course.modules[0]
    }
  }
  selectModule = module =>
      this.setState({
        module: module
      })
  render() {
    return (
        <div className="container-fluid">
            <div className="row col-12" id="wbdv-top-nav">
                <div className="col-lg-10 col-sm-8" id="wbdv-course-title">CS5610 - Web Dev</div>
                <div className="col-lg-2 col-sm-2">
                    <button type="button" className="btn btn-success" id="wbdv-add-widget-button">Add Widget</button>
                </div>
            </div>
            <div className="row">
                <div className="col-2 wbdv-content-panel" id="wbdv-module-list-container">
                    <ul className="nav flex-column nav-pills">
                        <a className="nav-link active wbdv-module-selector wbdv-module-list-item" href="#">Module 1 -
                            jQuery</a>
                        <a className="nav-link wbdv-module-list-item" href="#">Module 2 - React</a>
                        <a className="nav-link wbdv-module-list-item" href="#">Module 3 - Redux</a>
                        <a className="nav-link wbdv-module-list-item" href="#">Module 4 - Respect</a>
                    </ul>
                </div>
                <div className="col-10 wbdv-content-panel">

                    <ul className="nav nav-tabs">
                        <li className="nav-item wbdv-lesson-link">
                            <a className="nav-link active " href="#">Lesson 1</a>
                        </li>
                        <li className="nav-item wbdv-lesson-link">
                            <a className="nav-link" href="#">Lesson 2</a>
                        </li>
                        <li className="nav-item wbdv-lesson-link">
                            <a className="nav-link" href="#">Lesson 3</a>
                        </li>
                    </ul>
                    <br/>
                    <div className="row col-12">
                        <TopicPills/>
                    </div>
                    <div className="row col-12 container"
                         id="wbdv-widget-container">

                        <LinkWidget/>
                        <ImageWidget/>
                        <HeadingWidget/>
                        <ParagaphWidget/>
                        <ListWidget/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default CourseEditor