import React from 'react'

const LessonTabs = ({lessons, selectLesson, createLesson, deleteLesson, updateLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li key={lesson.id} className="nav-item lessonListItem" id="lessonListItem">

                        <div className="col-12" id="divInsideLessonListItemRow">
                            <button type="button" className="btn btn-warning" id="lessonButton"
                                    onClick={() => {
                                        selectLesson(lesson)
                                    }
                                    }>{lesson.title}</button>
                            <ion-icon name="close-circle-outline" size="large" id="deleteButtonn"
                                      onClick={() => {
                                          deleteLesson(lesson)
                                      }
                                      }
                            >
                            </ion-icon>
                            <ion-icon name="create" size="large" id="updateButtonn"
                                      onClick={() => {
                                          updateLesson(lesson)
                                      }
                                      }
                            />
                        </div>
                </li>
            )
        }
        <li className="list-group-item nav-item" id="addNewLesson">
            <div className = "col-12 form-inline " id="addNewLessonDiv">
                <input
                    id="newLessonName"
                    className="form-control form-group"/>
                <ion-icon name="add-circle-outline" size="large" className="form-group"
                          onClick={() => {
                              const newTitle = document.getElementById("newLessonName").value
                              createLesson(newTitle)
                          }}/>
            </div>
        </li>
    </ul>
export default LessonTabs



/*
<div className="col-lg-12 row">
    <div className="col-6">
    <button type="button" className="btn btn-warning" id={lesson.title}
onClick={() => {
    document.getElementById(module.title).classList.add("active")
    selectLesson(lesson)
}
}>{lesson.title}</button>
</div>


<div className="col-1" >
</div>
<div className={"col-1"} onClick={() => {
    deleteLesson(lesson)
}
}>
<ion-icon name="close-circle-outline" size="large"
    >
    </ion-icon>
</div>



</div> */