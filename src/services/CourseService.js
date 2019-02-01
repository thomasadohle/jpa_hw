import courses from './courses.json'
class CourseService {
    constructor() {
        this.courses = courses;
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
}
export default CourseService;