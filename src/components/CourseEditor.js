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
import WidgetService from "../services/WidgetService"

const service = CourseService;


class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService
        this.widgetService = WidgetService
        this.courseId = parseInt(props.match.params.id)
        this.state = {
            course: {
                title: "",
                id: "",
                modules: []
            },
            modules: [],
            module: {
                title: "",
                id: "",
                lessons: []
            },
            lessons: [],
            lesson: {
                title: "",
                id: "",
                topics: []
            },
            topic: {
                title: "",
                id: ""
            },
            topics: []
        }
        const initialState = {
            topicId: null,
            widgets: null,
            viewType: "EDITOR"
        }
        this.store = createStore(widgetReducer, initialState);
    }

    componentDidMount() {
        this.courseService.findCourseById(this.courseId).then(course => {
            this.setState({
                course: course,
                 modules: course.modules,
            })
    })
        this.courseService.findCourseModules(this.courseId).then(courseModules =>{
            this.setState({
                modules: courseModules
            })
        })
    }


    addModule = (module) => {
        this.courseService.addModule(module, this.state.course.id)
    }

    selectModule = module =>{
        this.setState({
            module: module,
             lessons: module.lessons,
            topics: []
            // topic: module.lessons[0].topics[0]
        })
        this.courseService.findLessons(module.id).then(lessons => {
            this.setState({
                lessons: lessons
            })
        })
    }

    selectLesson = lesson => {
        this.setState({
            lesson: lesson,
        })
       this.courseService.findTopics(lesson.id).then(topics => {
           this.setState({
               topics: topics
           })
       })
    }


    createLesson = (lessonTitle) => {
        var actualTitle = lessonTitle
        if (actualTitle === "") {
            actualTitle = "New Lesson"
        }
        const newLesson = {
            "title": actualTitle
        }
        this.courseService.addLesson(newLesson,this.state.module.id).then(newLesson => {
            this.courseService.findLessons(this.state.module.id).then(lessons => {
                this.setState({
                    lessons: lessons
                })
            })
        })
    }


    deleteLesson = (lesson) => {
        this.courseService.deleteLesson(lesson).then(response => {
            this.courseService.findLessons(this.state.module.id).then(lessons => {
                this.setState({
                    lessons: lessons
                })
            })
        })
    }

    updateLesson = (lesson) => {
        const newName = prompt("What would you like to rename the lesson?")
        if (newName !== null){
            lesson.title = newName
        }
        this.courseService.updateLesson(lesson).then(updated => {
            this.courseService.findLessons(this.state.module.id).then(lessons => {
                this.setState({
                    lessons: lessons
                })
            })
        })
    }

    selectTopic = topic => {
        console.log("current topic is: " + topic)
        this.setState({
            topic: topic,
        })
        this.widgetService.findAllWidgets(this.state.topic.id).then(widgets => {
            this.setState({
                widgets: widgets
            })
        })
    }


    deleteTopic = (topic) => {
        this.courseService.deleteTopic(topic).then(resp =>{
            this.courseService.findTopics(this.state.lesson.id).then(response =>{
                this.setState({
                    topics: response
                })
            })
        })
    }

    updateTopic = (topic) => {
        const newName = prompt("What would you like to rename the topic?")
        topic.title = newName
        this.courseService.updateTopic(topic).then(response => {
            this.courseService.findTopics(this.state.lesson.id).then(topics => {
                this.setState({
                    topics: topics
                })
            })
        })
    }

    createTopic = (topicTitle) => {
        var actualTitle = topicTitle
        if (topicTitle === "") {
            actualTitle = "New Topic"
        }
        const newTopic = {
            "title": actualTitle
        }
        this.setState({
            newTopic: true
        })
        this.courseService.addTopic(newTopic, this.state.lesson.id).then(topics => {
            this.courseService.findTopics(this.state.lesson.id).then(topics => {
                this.setState({
                    topics: topics
                })
            })
        })
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="row col-12" id="wbdv-top-nav">
                    <div className="col-lg-10 col-sm-8" id="wbdv-course-title">{this.state.course.courseTitle}</div>

                </div>
                <div className="row">
                    <div className="col-3 wbdv-content-panel" id="wbdv-module-list-container">
                        <ModuleList selectModule={this.selectModule}
                                    modules={this.state.modules}
                                    activeModule={this.state.module}
                                    addModule={this.addModule}
                                    courseId={this.courseId}/>
                    </div>
                    <div className="col-9 wbdv-content-panel">

                        <LessonTabs lessons={this.state.lessons}
                                    selectLesson={this.selectLesson}
                                    createLesson={this.createLesson}
                                    deleteLesson={this.deleteLesson}
                                    updateLesson={this.updateLesson}/>
                        <br/>
                        <div className="row col-12">
                            <TopicPills topics={this.state.topics}
                                        deleteTopic={this.deleteTopic}
                                        updateTopic={this.updateTopic}
                                        createTopic={this.createTopic}
                                        selectTopic={this.selectTopic}/>
                        </div>
                        <div className="row col-12 container"
                             id="wbdv-widget-container">
                            <Provider store={this.store}>
                                <WidgetListContainer
                                    topicFromCourseEditor={this.state.topic}
                                />
                            </Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor