import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse, courseDeleted}) =>
    <tr id={course.id}>
        <td scope="row">
            <Link to={`/course/${course.id}`}>
                <ion-icon name="apps" size="large"></ion-icon>
            </Link>
        </td>
        <td><Link to={`/course/${course.id}`}>
            {course.courseTitle}
            </Link>
        </td>
        <td>me</td>
        <td>5:30 AM</td>
        <td>
            <ion-icon name="close-circle-outline" size="large" className="wbdv-delete-icon"
                      onClick={() => {
                          deleteCourse(course)
                          courseDeleted()
                      }}></ion-icon>
        </td>
    </tr>
export default CourseRow;














/*

<tr>
    <td scope="row">
        <Link to={`/course/${course.id}`}>
            <ion-icon name="apps" size="large"></ion-icon>
        </Link>
    </td>
    <td>{course.title}</td>
    <td>me</td>
    <td>5:30 AM</td>
    <td>
        <ion-icon name="close-circle-outline" size="large" className="wbdv-delete-icon"
            onClick={() => deleteCourse(course)}></ion-icon>
    </td>
</tr>
*/