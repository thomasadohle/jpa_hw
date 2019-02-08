import setUp from "../reducers/InitialState"


class _CourseService {
    constructor() {
            console.log("creating instance")
            this.courses = setUp();
            this.id = Math.random()*10;
        console.log("Service ID: " + this.id)
        console.log("In the constructor: " + (this.courses[0]) + " " + this.courses[1] + " " + this.courses[2])
    }
    addCourse = course => {
        if(course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        const moduleId = Math.random()*100
        const lessonId = Math.random()*100
        const topicId = Math.random()*100
        course.id = (new Date()).getTime()
        course.modules = [
            {
                id: moduleId,
                title: "First Module",
                lessons: [
                    {
                        id: lessonId,
                        title: "First lesson",
                        topics: [
                            {
                                id: topicId,
                                title: "First topic",
                                widgets: [
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        this.courses.push(course)
        console.log("New course added: " + JSON.stringify(this.courses[this.courses.length-1]))
        return this.courses
    }

    findCourseById = courseId =>
        this.courses.find(
            course => course.id === courseId
        )
    findAllCourses = () =>
        this.courses;
    deleteCourse = deleteCourse =>{
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )
        console.log("Course deleted");
        console.log(this.courses);
        return this.courses;
    }

    findCourseModules = courseId => {
        var modules = []
        for (var key in this.courses){
            if (this.courses[key].id === courseId) {
                modules.push(this.courses[key].modules)
            }
        }
        console.log(modules)
        return modules;
    }

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

    findTopics = lessons => {
        console.log(lessons)
        var topics = []
        for (var key in lessons){
            topics.push(lessons[0][key].topics)
        }
        console.log(topics)
        return topics
    }

    createWidget = (topiId, widget) =>{
        //
    }

    findWidgets = (topicId) =>{
        console.log("findWidgets was called in course service")
        console.log("searching for topicId: " + topicId)
        console.log(this.courses)
        for (var c in this.courses){
            console.log(this.courses)
            console.log("Current course: " + this.courses[c])
            for (var m in this.courses[c].modules){
                console.log("Current module: " + this.courses[c].modules[m])
                for (var l in this.courses[c].modules[m].lessons){
                    for (var t in this.courses[c].modules[m].lessons[l].topics){
                        console.log("Current topic: " + t)
                        console.log("Current topic ID: " +this.courses[c].modules[m].lessons[l].topics[t].id)
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
                            console.log("Widget id is " + this.courses[c].modules[m].lessons[l].topics[t].widgets[w].id)
                            if (this.courses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId){
                                console.log("Found it!")
                                let newWidgets = this.courses[c].modules[m].lessons[l].topics[t].widgets
                                console.log(newWidgets)
                                newWidgets.splice(w,1)
                                console.log(newWidgets)
                                return newWidgets
                            }
                        }

                    }
                }
            }
        }
    }
}
let service = new _CourseService()
export default service