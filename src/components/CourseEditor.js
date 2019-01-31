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
      const modules = course.modules
      const lessons = modules.lessons
      console.log(lessons)
      console.log(modules)
    this.state = {
      course: course,
        modules: course.modules,
      module: course.modules[0],
        lesson: course.modules[0].lessons[0],
        topic: course.modules[0].lessons[0].topics[0],
    }
    console.log("this.state.lessons: " + this.state.lessons)
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


    createLesson = (lessonTitle) => {
      const newLesson = {
          "title": lessonTitle
      }
      this.state.module.lessons.push(newLesson)
        console.log(this.state.module.lessons)

        this.setState({
            newModule: true
        })
    }

    deleteLesson = (lesson) => {
        console.log("Made it to deleteLesson")
        const lessonsBeforeDelete = this.state.module.lessons
        const lessonsAfterDelete = lessonsBeforeDelete.filter(
            less => less.title !== lesson.title
        )
        console.log(lessonsAfterDelete)
        var newModule = this.state.module
        newModule.lessons=lessonsAfterDelete
        console.log(newModule)
        this.setState(
            {
                module: newModule
            }
        )
    }

    updateLesson = (lesson) => {
        const newName = prompt("What would you like to rename the lesson?")
        lesson.title = newName
        this.setState({
            modules: this.state.modules
        })
    }

    deleteTopic = (topic) => {
        console.log("Made it to deleteTopic")
        const topicsBeforeDelete = this.state.lesson.topics
        const topicsAfterDelete = topicsBeforeDelete.filter(
            top => top.title !== topic.title
        )
        console.log(topicsAfterDelete)
        var newLesson = this.state.lesson
        newLesson.topics=topicsAfterDelete
        console.log(newLesson)
        this.setState(
            {
                lesson: newLesson
            }
        )
    }

    updateTopic = (topic) => {
        const newName = prompt("What would you like to rename the topic?")
        topic.title = newName
        this.setState({
            modules: this.state.modules
        })
    }

    createTopic = (topicTitle) => {
        const newTopic = {
            "title": topicTitle
        }
        this.state.lesson.topics.push(newTopic)
        this.setState({
            newTopic: true
        })
    }


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
                                selectLesson={this.selectLesson}
                                createLesson={this.createLesson}
                                deleteLesson={this.deleteLesson}
                                updateLesson={this.updateLesson}/>
                    <br/>
                    <div className="row col-12">
                        <TopicPills topics={this.state.lesson.topics}
                                deleteTopic={this.deleteTopic}
                                updateTopic={this.updateTopic}
                                createTopic={this.createTopic}/>
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