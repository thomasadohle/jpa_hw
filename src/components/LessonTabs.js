import React from 'react'

const LessonTabs = ({lessons, selectLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li key={lesson.id} className="nav-item"
                    onClick={() => selectLesson(lesson)}>

                    <a className="nav-link active"
                       href="#">{lesson.title}
                    </a>
                </li>
            )
        }
        <li className="form-control"></li>
    </ul>
export default LessonTabs