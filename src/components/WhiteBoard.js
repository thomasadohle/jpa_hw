import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import "./Styling/course-editor.style.client.css"
import "./Styling/course-list.style.client.css"
var grid = "grid"
var table = "table"
class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService()
        var modules = this.courseService.findCourseModules(123)
        var lessons = this.courseService.findLessons(modules)
        var topics = this.courseService.findTopics(lessons)

        this.state = {
            courses: this.courseService.findAllCourses(),
            courseView: grid
        }
    }
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course),
        })
    addCourse = () =>
        this.setState({
            courses: this.courseService.addCourse(null)
        })

    toggleViews = () => {

        if (this.state.courseView === grid) {
            console.log("Before event: " + this.state.courseView)
            this.setState({
                courseView: table
            })
            console.log("After event: " + this.state.courseView)
            return "/table"
        } else {
            console.log("Before event: " + this.state.courseView)
            this.setState({
                courseView: grid
            })
            console.log("After event: " + this.state.courseView)
            return "/"
        } 
    }


    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to={this.toggleViews}>Course Grid</Link> |
                        <Link to="/table">Course Table</Link>
                        {this.state.courseView ===grid &&
                        <Link to="/table">
                            <button className="btn btn-primary"
                                    onClick={this.toggleViews}>
                                Toggle</button>
                        </Link>
                        }
                        {this.state.courseView ===table &&
                        <Link to="/">
                            <button className="btn btn-primary"
                                    onClick={this.toggleViews}>
                                Toggle</button>
                        </Link>
                        }

                        <Route path='/' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}
                                       courseService={this.courseService}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table'
                               render={() => <CourseTable
                                                courses={this.state.courses}
                                                addCourse={this.addCourse}
                                                deleteCourse={this.deleteCourse}
                                                courseService={this.courseService}/>}/>
                    </div>
                </Router>
            </div>
        );
    };
}

export default WhiteBoard;