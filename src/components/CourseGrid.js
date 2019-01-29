import React from 'react'
import CourseCard from './CourseCard'
import NewCourseCard from "./NewCourseCard";
//const CourseGrid = ({courses, deleteCourse, addCourse}) =>

class CourseGrid extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            courses: this.props.courses
        }
    }

    courseDeleted = () =>{
        console.log("Before updating, the courses are: " + this.state.courses)
        console.log("The coureses in the service are: " + this.props.courseService.courses)
        this.setState({
            courses: this.props.courseService.courses

        })
        console.log("After updating, the courses are: " + this.state.courses )
    }

    createNewCourse = () => {
        this.props.courseService.addCourse(this.state.course)
        this.setState(
            {
                courses: this.state.courses
            }
        )
    }

    newCourseTitleChanged = (event) => {
        this.setState(
            {
                course: {title: event.target.value}
            });
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
                    <div className="card-deck">
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