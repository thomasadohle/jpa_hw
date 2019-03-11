

class _CourseService {
    constructor() {
        this.baseUrl = "http://localhost:8080"
    }
/////////////////////////////////////////////////////////////////////////
    addCourse = course => {
        const url = this.baseUrl + "/api/courses"
        console.log("addCourse from CourseService called")
        fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(course),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Courses after addition: " + JSON.stringify(json)))
            .catch(error => console.log("error in addCourse " + error))
        return this.findAllCourses()
    }

    findCourseById = courseId => {
        const url = this.baseUrl + "/api/courses/" + courseId
        return fetch(url,{
            method: "GET",
            credentials: 'include'
        }).then(response => response.json())
            .then(json => json
            )
            .catch(error => console.log("error in findCourseById: " + error))
    }


    findAllCourses = () => {
        const url = this.baseUrl + "/api/courses"
        return fetch (url, {
            method: "GET",
            credentials: 'include'
        }).then(function(response){
            return response.json()
        }).then(function(json){
            return json
        }).catch(function(error){
            console.log("error in findAllCourses: " + error)
        })
    }


    deleteCourse = course =>{
        const courseId = course.id;
        const url = this.baseUrl + "/api/courses/"+courseId
        return fetch (url,{
            method: "DELETE",
            credentials: "include"
        })
    }
//////////////////////////////////////////////////////////////////////////////////

    findCourseModules = courseId => {
        const url = this.baseUrl + "/api/courses/" + courseId + "/modules"
        console.log("findCourseModules called with URL " + url)
        return fetch (url, {
            method: "GET",
            credentials: 'include'
        }).then(function(response){
            return response.json()
        }).then(function(json){
            return json
        }).catch(function(error){
            console.log("error in findCourseModules: " + error)
        })
    }

    addModule = (module, courseId) =>{
        const url = this.baseUrl + "/api/courses/" + courseId + "/modules"
        console.log("addModule from CourseService called with url " + url)
        fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(module),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Module added " + JSON.stringify(json)))
            .catch(error => console.log("error in addModule " + error))
        return this.findCourseModules(courseId)
    }

    deleteModule = module =>{
        const moduleId = module.id;
        const url = this.baseUrl + "/api/modules/"+moduleId
        return fetch (url,{
            method: "DELETE",
            credentials: "include"
        })
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    findLessons = moduleId => {
        var lessonArr = []
        for (var c in this.courses){
            for (var m in this.courses[c].modules){
                if (this.courses[c].modules[m].id === moduleId){
                    lessonArr.push(this.courses[c].modules[m].lessons)
                }
            }
        }
        return lessonArr
    }

    addLesson = (lesson, courseId,moduleId) =>{
        const lessonId = Math.random()*100
        const topicId = Math.random()*100
        lesson.id = lessonId
        lesson.topics = [
            {
                id: topicId,
                widgets: []
            }
        ]
        for (var c in this.courses){
            if (this.courses[c].id===courseId){
                for (var m in this.courses[c].modules){
                    if (this.courses[c].modules[m].id === moduleId){
                        this.courses[c].modules[m].lessons.push(lesson)
                        console.log(this.courses[c].modules[m].lessons)
                    }
                }
            }
        }

    }

    addTopic = (topic, courseId,moduleId,lessonId) =>{

        const topicId = Math.random()*100
        topic.id = topicId
        topic.widgets=[]
        for (var c in this.courses){
            if (this.courses[c].id===courseId){
                for (var m in this.courses[c].modules){
                    if (this.courses[c].modules[m].id === moduleId){
                        for(var l in this.courses[c].modules[m].lessons){
                            if (this.courses[c].modules[m].lessons[l].id===lessonId){
                                this.courses[c].modules[m].lessons[l].topics.push(topic)

                            }
                        }
                    }
                }
            }
        }

    }

    findTopics = lessons => {
        console.log(lessons)
        var topics = []
        for (var key in lessons){
            topics.push(lessons[0][key].topics)
        }
        console.log(topics)
        return topics
    }

    createWidget = (topicId, widget) =>{
        //
    }

    findWidgets = (topicId, signal="a") =>{
        console.log("findWidgets was called in course service")
        console.log("Signal is: " + signal)
        console.log("searching for topicId: " + topicId)
        for (var c in this.courses){

            for (var m in this.courses[c].modules){

                for (var l in this.courses[c].modules[m].lessons){
                    for (var t in this.courses[c].modules[m].lessons[l].topics){

                        if (this.courses[c].modules[m].lessons[l].topics[t].id === topicId){
                            console.log(this.courses[c].modules[m].lessons[l].topics[t].widgets)
                            return this.courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
        console.log("Failed to find widgets")
    }

    findWidget = (widgetId) =>{
        //
    }

    updateWidget = (widgetId, widget) => {
        //
    }

    deleteWidget = (widgetId) => {
        console.log("Looking for widget with id " + widgetId)
        for (var c in this.courses){
            for (var m in this.courses[c].modules){
                for (var l in this.courses[c].modules[m].lessons){
                    for (var t in this.courses[c].modules[m].lessons[l].topics){
                        for (var w in this.courses[c].modules[m].lessons[l].topics[t].widgets){
                            if (this.courses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId){
                                let newWidgets = this.courses[c].modules[m].lessons[l].topics[t].widgets
                                newWidgets.splice(w,1)
                                return newWidgets
                            }
                        }

                    }
                }
            }
        }
    }

    saveWidgets(updatedWidgets,topicId){
        console.log("made it to saveWidgets in CourseService")
        console.log("widgets: " + updatedWidgets)
        console.log("topicId: " + topicId)
        for (var c in this.courses){
            for (var m in this.courses[c].modules){
                for (var l in this.courses[c].modules[m].lessons){
                    for (var t in this.courses[c].modules[m].lessons[l].topics){
                        if (this.courses[c].modules[m].lessons[l].topics[t].id ===topicId){
                            this.courses[c].modules[m].lessons[l].topics[t].widgets = updatedWidgets;
                            console.log(this.courses[c].modules[m].lessons[l].topics[t].widgets)
                            return this.courses
                        }
                    }
                }
            }
        }
    }

    registerUser = (user) => {

    }
}
let service = new _CourseService()
export default service