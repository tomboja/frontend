import React from "react"
import { COURSE_DEPARTMENT, COURSE_ID, COURSE_TITLE, COURSE_LEVEL } from "../../texts"

const CourseDetail = (props) => {

  return <div className="container">
    <p><span className="coursedetails">{COURSE_ID}</span>: {props.selectedCourse.courseNumber}</p>
    <p><span className="coursedetails">{COURSE_TITLE}</span>: {props.selectedCourse.title}</p>
    <p><span className="coursedetails">{COURSE_LEVEL}</span>: {props.selectedCourse.level}</p>
    <p><span className="coursedetails">{COURSE_DEPARTMENT}</span>: {props.selectedCourse.credit}</p>
  </div>
}

export default CourseDetail
