import React from "react"
import { COURSE, STUDENT_COURSES } from "../../texts"

const StudentCourseList = ({courses}) => {
  return <div>
    <div className="studentCourses">{STUDENT_COURSES}</div>
    <ul>{courses.map((course, index) => {
      return <li key={index}>{COURSE} {index}: {course.courseCode} - {course.courseTitle}</li>
    })}
    </ul>
  </div>
}

export default StudentCourseList