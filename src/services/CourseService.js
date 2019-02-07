import setUp from "../reducers/InitialState"
class CourseService {
    constructor() {
        this.courses = setUp();
    }
    addCourse = course => {
        if(course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        course.id = (new Date()).getTime()
        this.courses.push(course)
        console.log("Made a new course called " + course.title);
        console.log("New Course ID is: " + course.id);
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
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

    findLessons = modules => {
        console.log(modules)
        var lessonArr = []
        for (var key in modules){
            lessonArr.push(modules[0][key].lessons)
            console.log(modules[0][0].lessons)
        }
        console.log(lessonArr)
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
        console.log("findWidgets was called")
        console.log(this.courses)
        for (var c in this.courses){
            console.log("Current course: " + this.courses[c].title)
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
        return this.state.widgets.filter(widget => widget.id !== widgetId)
    }
}
export default CourseService;