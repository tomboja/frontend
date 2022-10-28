import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getAllCourse } from "../../api/courseAPIs"
import { resetCourse, loadCourses } from "../../reducers/courseReducer"
import { Link } from "react-router-dom"
import { COURSE_DEPARTMENT, COURSE_ID, COURSE_CREDIT, COURSE_OFFERINGS, COURSE_TITLE, LIST_OF_COURSES, VIEW, COURSE_ACTION, COURSE_EDIT_BUTTON, COURSE_DELETE_BUTTON } from "../../texts"
import { DELETE_COURSE_URL } from '../../consts'
import CourseDetail from "./CourseDetails"
import CourseUpdate from "./CourseUpdate"

export const CourseOfferings = () => {
  const dispatch = useDispatch();
  const [courses, setCourse] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [updateCourse, setUpdateCourse] = useState(null)
  const [deleteCourse, setDeleteCourse] = useState(null)
  const coursesFromReduxStore = useSelector(state => state.courseData)
  const coursesDataInRedux = useSelector(state => state.courseData)

  useEffect(() => {
    const fetchCourses = async () => await getAllCourse()
    fetchCourses()
      .then(result => {
        dispatch(loadCourses(result))
        setCourse(coursesDataInRedux)
      }).catch(error => {
        console.log('Error fetching ', error)
      })

    return () => {
      //dispatch(resetCourse())
    }
  }, [dispatch])

  const renderCourseDetails = (course) => {
    setSelectedCourse(course)
  }

  const renderCourseUpdate = (course) => {
    setUpdateCourse(course)
  }
  const renderCourseDelete = (course) => {
    setDeleteCourse(course)
    return <CourseUpdate updateCourse={updateCourse} />
  }

  const onDelete = (courseNumber) => {
    axios.delete(DELETE_COURSE_URL + "/" + courseNumber)
  }

  if (selectedCourse) {
    return <CourseDetail selectedCourse={selectedCourse} />
  }
  else if (updateCourse) {
    return <CourseUpdate updateCourse={updateCourse} />
  }
  else return <div className="container">
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
          <th className="tableheading">{COURSE_ACTION}</th>
        </tr>
      </thead>
      <tbody>
        {

          coursesFromReduxStore.map((course, index, array) => {
            return <tr key={index}>
              <td className="tabledata">{course.courseNumber}</td>
              <td className="tabledata">{course.title}</td>
              <td className="tabledata">{course.level}</td>
              <td className="tabledata">{course.credit}</td>
              <td className="tabledata">
                <Link onClick={() => renderCourseDetails(course)} className="btn btn-prime">{VIEW}</Link>
                <Link onClick={() => renderCourseUpdate(course)} className="btn btn-prime">{COURSE_EDIT_BUTTON}</Link>
                <Link onClick={() => onDelete(course.courseNumber)} className="btn btn-danger">{COURSE_DELETE_BUTTON}</Link>

              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  </div>
}

export default CourseOfferings
