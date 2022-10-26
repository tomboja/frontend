import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCourse } from "../../api/courseAPIs"
import { COURSE_API_URI } from "../../consts"
import { saveCourse, resetCourse } from "../../reducers/courseReducer"
import {Link} from "react-router-dom"
import { COURSE_DEPARTMENT, COURSE_ID, COURSE_TITLE } from "../../texts"

export const CourseOfferings = () => {
  const dispatch = useDispatch();
  const [courses, setCourse] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const coursesFromReduxStore = useSelector(state => state.courseData)

 
  


useEffect(() => {
  // const studentData = () => {
  //   const { data } = await axios
  //     .get(STUDENT_API_URI)
  //     .then(result => result.data)
  //     .catch(error => {
  //     return 'Error fetching students data'
  //   })

  //   return getAllStudents()
  // }

  const courses = getAllCourse()
  dispatch(saveCourse(courses))
  setCourse(courses)
  return () => {
    dispatch(resetCourse())
  }
}, [])

const renderCourseDetails = (course) => {
  setSelectedCourse(course)
}

if (selectedCourse) {
  return <div>
    <h1></h1>
   <p>{COURSE_ID}: {selectedCourse.courseId}</p>
   <p>{COURSE_TITLE}: {selectedCourse.courseTitle}</p>
   <p>{COURSE_DEPARTMENT}: {selectedCourse.department}</p>
  </div>
} else return <div className="container">
    <h1>Course Offerings Page</h1>
    <h4>List of courses</h4>
  {/* <Link className ="btn btn-primary" to="/AddCourse">Add Course</Link> */}
  <table> 
        <thead>
            <tr>
            <th>{COURSE_ID}</th>
          <th>{COURSE_TITLE}</th>
          <th>{COURSE_DEPARTMENT}</th>
            </tr>
        </thead>
        <tbody>
         
        
    {
      coursesFromReduxStore.map((course, index, array) => {
        return  <tr key = {course.courseId}>
           <td>{course.courseId}</td>
            <td>{course.courseTitle}</td>
            <td>{course.department}</td>
            <td>
               <Link onClick={() => renderCourseDetails(course)} className ="btn btn-primary">View</Link>
               
            </td>
            
        </tr>
          
       })
    }
    </tbody>
           </table>
  </div>

  }
export default CourseOfferings;
