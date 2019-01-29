import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course_, deleteCourse, courseDeleted}) =>
    <tr id={course_.id}>
        <td scope="row">
            <Link to={`/course/${course_.id}`}>
                <ion-icon name="apps" size="large"></ion-icon>
            </Link>
        </td>
        <td>{course_.title}</td>
        <td>me</td>
        <td>5:30 AM</td>
        <td>
            <ion-icon name="close-circle-outline" size="large" className="wbdv-delete-icon"
                      onClick={() => {
                          deleteCourse(course_)
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