import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList"
import CourseService from "../services/CourseService"
import WidgetListContainer from '../containers/WidgetListContainer'
import widgetReducer from '../reducers/WidgetReducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import "./Styling/course-editor.style.client.css"
import setUp from "../reducers/InitialState"

const service = CourseService;
const initialState = service.courses
console.log("Initial state in course editor: " +initialState[0].title +initialState[1].title+initialState[2].title)

const store = createStore(widgetReducer, initialState);

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = CourseService
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
      const modules = this.courseService.findCourseModules(courseId)
      //const lessons = this.courseService.findLessons(modules[0])
    this.state = {
      course: course,
        modules: modules,
      module: course.modules[0],
        lesson: course.modules[0].lessons[0],
        topic: course.modules[0].lessons[0].topics[0],
    }
  }

  addModule = (module) =>{
      this.courseService.addModule(module,this.state.course.id)
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
      var actualTitle = lessonTitle
        if(actualTitle===""){
            actualTitle = "New Lesson"
        }
      const newLesson = {
          "title": actualTitle
      }
      //this.state.module.lessons.push(newLesson)

        this.setState({
            newModule: true
        })
        this.courseService.addLesson(newLesson,this.state.course.id,this.state.module.id)
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
      var actualTitle = topicTitle
        if(topicTitle===""){
            actualTitle = "New Topic"
        }
        const newTopic = {
            "title": actualTitle
        }
       // this.state.lesson.topics.push(newTopic)
        this.setState({
            newTopic: true
        })
        this.courseService.addTopic(newTopic,this.state.course.id, this.state.module.id, this.state.lesson.id)
    }


  render() {
    return (
        <div className="container-fluid">
            <div className="row col-12" id="wbdv-top-nav">
                <div className="col-lg-10 col-sm-8" id="wbdv-course-title">{this.state.course.title}</div>
                <div className="col-lg-2 col-sm-2">
                    <button type="button" className="btn btn-success" id="wbdv-add-widget-button">Add Widget</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3 wbdv-content-panel" id="wbdv-module-list-container">
                   <ModuleList selectModule={this.selectModule}
                               modules={this.state.course.modules}
                               activeModule={this.state.module}
                                addModule={this.addModule}/>
                </div>
                <div className="col-9 wbdv-content-panel">

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
                        <Provider store={store}>
                            <WidgetListContainer
                                topicId = {this.state.topic.id}/>
                        </Provider>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default CourseEditor