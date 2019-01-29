import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse, courseDeleted}) =>
    <div className="card col-lg-2 col-md-5 col-sm-12"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Card text.</p>
            <Link className="btn btn-primary" to={`/course/${course.id}`}>Edit</Link>
            <a onClick={() => {
                deleteCourse(course)
                courseDeleted()
            }}
               className="btn btn-danger">Delete</a>
        </div></div>
export default CourseCard;