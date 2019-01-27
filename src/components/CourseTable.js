import React from 'react'
import CourseRow from './CourseRow'

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div className="container-fluid" id="wbdv-page-container">

        <form>
            <div className="form-group row col-lg-12" id="wbdv-top-nav">
                <nav className="navbar col-12">
                    <div className="col-sm-4 col-lg-3 text-right" id='wbdv-title'>
                        Course Manager
                    </div>
                    <div className="col-sm-6 col-lg-6" id="wbdv-new-course">
                        <input type="text" className="form-control"
                               id="wbdv-new-course-title" placeholder="New course title"></input>
                    </div>
                    <div className="col-2">
                        <ion-icon name="add-circle" size="large" id="wbdv-add-button"></ion-icon>
                    </div>
                </nav>

            </div>
        </form>

        <div className="row card" id="wbdv-page-background">
            <div className="container col-lg-9 col-sm-12 table-responsive" id="wbdv-table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Update</th>
                        <th scope="col">Title</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses.map(course =>
                            <CourseRow
                                deleteCourse={deleteCourse}
                                course={course}
                                key={course.id}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>


                    export default CourseTable