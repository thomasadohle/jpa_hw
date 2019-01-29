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
import "./Styling/course-editor.style.client.css"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      module: course.modules[0],
        lesson: course.modules[0].lessons[0],
        topic: course.modules[0].lessons[0].topics[0]
    }
    console.log(this.state.topic)
  }
  selectModule = module =>
        this.setState({
            module: module,
            lesson: module.lessons[0],
            topic: module.lessons[0].topics[0]
        })

    selectLesson = lesson =>{
        console.log(lesson)
        this.setState({
            lesson: lesson,
            topic: lesson.topics[0]

        })}


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
                   <ModuleList selectModule={this.selectModule} modules={this.state.course.modules}/>
                </div>
                <div className="col-10 wbdv-content-panel">

                    <LessonTabs lessons={this.state.module.lessons}
                                selectLesson={this.selectLesson}/>
                    <br/>
                    <div className="row col-12">
                        <TopicPills topics={this.state.lesson.topics}/>
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