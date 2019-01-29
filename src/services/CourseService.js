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
        this.courses.push(course)
        console.log("Made a new course called " + course.title);
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
    }
}
export default CourseService