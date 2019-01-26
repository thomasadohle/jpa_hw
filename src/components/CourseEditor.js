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
        <div>
          <h2>Course Editor: {this.state.course.title}</h2>
          <div className="row">
            <div className="col-4">
              <ModuleList
                  selectModule={this.selectModule}
                  modules={this.state.course.modules}/>
            </div>
            <div className="col-8">
              <LessonTabs
                  lessons={this.state.module.lessons}/>
              <TopicPills/>
              <LinkWidget/>
              <ImageWidget/>
              <HeadingWidget/>
              <ParagaphWidget/>
              <ListWidget/>
            </div>
          </div>
        </div>
    )
  }
}
export default CourseEditor