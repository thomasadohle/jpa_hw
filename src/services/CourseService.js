

class _CourseService {
    constructor() {
        this.baseUrl = "http://localhost:8080"
    }
/////////////////////////////////////////////////////////////////////////
    addCourse = course => {
        const url = this.baseUrl + "/api/courses"
        console.log("addCourse from CourseService called")
        return fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(course),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Courses after addition: " + JSON.stringify(json)))
            .catch(error => console.log("error in addCourse " + error))
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
        return fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(module),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Module added " + JSON.stringify(json)))
            .catch(error => console.log("error in addModule " + error))

    }

    deleteModule = module =>{
        const moduleId = module.id;
        const url = this.baseUrl + "/api/modules/"+moduleId
        console.log("deleteModule in CourseService called with url " + url)
        return fetch (url,{
            method: "DELETE",
            credentials: "include"
        })
    }

    updateModule = module => {
        const moduleId = module.id;
        const url = this.baseUrl + "/api/modules/" + moduleId;
        console.log("updateModule in CourseService called")
        return fetch (url,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(module),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    findLessons = moduleId => {
        const url = this.baseUrl + "/api/modules/" + moduleId + "/lessons"
        console.log("findLessons called with URL " + url)
        return fetch (url, {
            method: "GET",
            credentials: 'include'
        }).then(function(response){
            return response.json()
        }).then(function(json){
            return json
        }).catch(function(error){
            console.log("error in findLessons: " + error)
        })
    }

    addLesson = (lesson, moduleId) =>{
        const url = this.baseUrl + "/api/modules/" + moduleId + "/lesson"
        console.log("addLesson from CourseService called with url " + url)
        return fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(lesson),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Lesson added " + JSON.stringify(json)))
            .catch(error => console.log("error in addLesson " + error))

    }

    deleteLesson = lesson =>{
        const lessonId = lesson.id;
        const url = this.baseUrl + "/api/lessons/"+lessonId
        console.log("deleteLesson in CourseService called with url " + url)
        return fetch (url,{
            method: "DELETE",
            credentials: "include"
        })
    }

    updateLesson = lesson => {
        const lessonId = lesson.id;
        const url = this.baseUrl + "/api/lessons/" + lessonId;
        console.log("updateLesson in CourseService called")
        return fetch (url,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(lesson),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    findTopics = lessonId => {
        const url = this.baseUrl + "/api/lessons/" + lessonId + "/topics"
        console.log("findTopics called with URL " + url)
        return fetch (url, {
            method: "GET",
            credentials: 'include'
        }).then(function(response){
            return response.json()
        }).then(function(json){
            return json
        }).catch(function(error){
            console.log("error in findTopics: " + error)
        })
    }

    addTopic = (topic, lessonId) =>{
        const url = this.baseUrl + "/api/lessons/" + lessonId + "/topic"
        console.log("addTopic from CourseService called with url " + url)
        return fetch(url,{
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(topic),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
            .then(json => console.log("Topic added " + JSON.stringify(json)))
            .catch(error => console.log("error in addTopic " + error))
    }

    deleteTopic = topic =>{
        const topicId = topic.id;
        const url = this.baseUrl + "/api/topics/"+topicId
        console.log("deleteTopic in CourseService called with url " + url)
        return fetch (url,{
            method: "DELETE",
            credentials: "include"
        })
    }

    updateTopic = topic => {
        const topicId = topic.id;
        const url = this.baseUrl + "/api/topics/" + topicId;
        console.log("updateTopic in CourseService called")
        return fetch (url,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(topic),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////


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