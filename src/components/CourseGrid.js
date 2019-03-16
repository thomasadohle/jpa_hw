import React from 'react'
import CourseCard from './CourseCard'
import "./Styling/course-grid.style.client.css"
import NewCourseCard from "./NewCourseCard";
import CourseService from '../services/CourseService'

//const CourseGrid = ({courses, deleteCourse, addCourse}) =>

class CourseGrid extends React.Component{
    constructor(props){
        super(props)
        this.courseService = CourseService
        this.state= {
            courses: this.props.courses
        }
    }

    componentDidMount() {
        this.courseService.findAllCourses().then(courses => {
            this.setState({
                courses: courses
            })
            console.log("state in Whiteboard -> courses: " + JSON.stringify(this.state.courses))
        })
    }


    createNewCourse = () => {
        let course = this.state.course
        this.courseService.addCourse(course).then(courses => {
            this.courseService.findAllCourses().then(courses => {
                console.log("Courses found: " + JSON.stringify(courses))
                this.setState({
                    courses: courses
                })
            })
        })
    }

    newCourseTitleChanged = (event) => {
        this.setState(
            {
                course: {courseTitle: event.target.value}
            });
    }

    courseDeleted = (course) => {
        this.courseService.deleteCourse(course).then(response => {
                this.courseService.findAllCourses().then(courses => {
                    this.setState({
                        courses: courses
                    })
                })
            }
        )

    }


    render() {
        return(
            <div className="container-fluid" id="wbdv-page-container">

                <form>
                    <div className="form-group row col-lg-12" id="wbdv-top-nav">
                        <nav className="navbar col-12">
                            <div className="col-sm-4 col-lg-3 text-right" id='wbdv-title'>
                                Course Manager
                            </div>
                            <div className="col-sm-6 col-lg-6" id="wbdv-new-course">
                                <input type="text" className="form-control"
                                       id="wbdv-new-course-title" placeholder="New course title"
                                       onChange={this.newCourseTitleChanged}></input>
                            </div>
                            <div className="col-2">
                                <ion-icon name="add-circle" size="large" id="wbdv-add-button"
                                          onClick={this.createNewCourse}
                                />
                            </div>
                        </nav>

                    </div>
                </form>
                    <div className="card-deck col-12">
                        {
                            this.state.courses.map(course =>
                                <CourseCard
                                    deleteCourse={this.props.deleteCourse}
                                    course={course}
                                    key={course.id}
                                    courseDeleted={this.courseDeleted}/>
                            )
                        }

                    </div>
            </div>
        ) }
}

export default CourseGrid