import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCourse } from "../../api/courseAPIs"
import { resetCourse, loadCourses } from "../../reducers/courseReducer"
import { Link } from "react-router-dom"
import { COURSE_DEPARTMENT, COURSE_ID, COURSE_CREDIT, COURSE_OFFERINGS, COURSE_TITLE, LIST_OF_COURSES, VIEW } from "../../texts"
import CourseDetail from "./CourseDetails"

export const CourseOfferings = () => {
  const dispatch = useDispatch();
  const [courses, setCourse] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const coursesFromReduxStore = useSelector(state => state.courseData)

  useEffect(() => {
    const fetchCourses = async () => await getAllCourse()
    fetchCourses()
      .then(result => {
        dispatch(loadCourses(result))
        setCourse(result)
      }).catch(error => {
        console.log('Error fetching ', error)
      })
    
    return () => {
      dispatch(resetCourse())
    }
  }, [dispatch])

  const renderCourseDetails = (course) => {
    setSelectedCourse(course)
  }

  if (selectedCourse) {
    return <CourseDetail selectedCourse={selectedCourse} />
  } else return <div className="container">
    <h1>{COURSE_OFFERINGS}</h1>
    <h4>{LIST_OF_COURSES}</h4>
    {/* <Link className ="btn btn-primary" to="/AddCourse">Add Course</Link> */}
    <table>
      <thead>
        <tr>
          <th className="tableheading">{COURSE_ID}</th>
          <th className="tableheading">{COURSE_TITLE}</th>
          <th className="tableheading">{COURSE_DEPARTMENT}</th>
          <th className="tableheading">{COURSE_CREDIT}</th>
          <th className="tableheading"></th>
        </tr>
      </thead>
      <tbody>
        {console.log('coursesFromReduxStore ', coursesFromReduxStore)}
        {

          coursesFromReduxStore.map((course, index, array) => {
            return <tr key={index}>
              <td className="tabledata">{course.courseNumber}</td>
              <td className="tabledata">{course.title}</td>
              <td className="tabledata">{course.level}</td>
              <td className="tabledata">{course.credit}</td>
              <td className="tabledata">
                <Link onClick={() => renderCourseDetails(course)} className="btn btn-prime">{VIEW}</Link>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  </div>
}

export default CourseOfferings
