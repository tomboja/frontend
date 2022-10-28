import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse, getAllCourses, saveCourseOffering } from '../../api/courseAPIs'
import { getAllUsersByRole } from '../../api/userApi'
import { loadCourses } from '../../reducers/courseReducer'
import { loadFaculty } from '../../reducers/facultyReducer'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getCourseMapping, getFacultyMapping, classrooms } from '../../utils/functionUtils'

const initialState = {
  courseNumber: '',
  faculty: '',
  startDate: '',
  endDate: '',
  classroom: ''
}
const CreateCourseOffering = () => {
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [offering, setOffering] = useState(initialState)

  const activeUser = useSelector(state => state.activeUser)
  const dispatch = useDispatch()
  const allCourses = useSelector(state => state.courseData)
  const allFaculties = useSelector(state => state.facultyData)

  let courseMapping = (data) => getCourseMapping(data)
  let facultyMapping = (data) => getFacultyMapping(data)
  const { role } = activeUser

  useEffect(() => {
    // Load all faulties
    const faculties = async (role) => {
      await getAllUsersByRole(role).then((result) => {
        if (result.error) {
          setErrors({ facultyFetchingFailed: 'Fetching Faculties failed' + result.error })
        }
        else {
          const facultyData = result.data
          setErrors({ facultyFetchingFailed: null })
          dispatch(loadFaculty(facultyData))
        }
      })
    }
    // Fetch all courses
    const fetchCourses = async () => await getAllCourses()
      .then(result => {
        if (result.error) {
          setErrors({ fetchingCoursesfailed: 'Fetching courses failed ' + result.error })
        } else {
          dispatch(loadCourses(result.data))
          
        }
      })

    faculties(role)
    fetchCourses()

  }, [dispatch, role])

  const handleClose = () => setShowModal(false);

  const setCourseOffering = (data) => {
    setOffering({ ...offering, courseNumber: data.target.value })
  }

  const setOfferingFaculty = (e) => {
    setOffering({ ...offering, faculty: e.target.value })
  }

  const setClassRoom = (e) => {
    setOffering({ ...offering, classroom: e.target.value })
  }

  const setStartdate = (startDate) => {
    setOffering({...offering, startDate: startDate.target.value})
  }

  const setDate = (endDate) => {
    setOffering({...offering, endDate: endDate.target.value})
  }

  const submitForm = async (e) => {
    e.preventDefault()
    await saveCourseOffering(offering).then(result => {
      if (result.error) {
        setErrors({...errors, courseOfferingFailure: 'Creating course Offering failed' + result.error})
      } else {
        setErrors({ ...errors, courseOfferingFailure : null})
        setSuccess({ ...result.data })
        setShowModal(true)
      }
    })
  }

  return <form onSubmit={submitForm}>
    <div className='container courseOffering'>
      <h1>Create Course Offering</h1>
      <div className='mb-3'>
        <label
          htmlFor='dept'
          className='form-label'><b>Select Course</b>
        </label>
        <select
          onChange={(e) => setCourseOffering(e)}
          className='form-select'
          name='course_level'
          value={offering.courseNumber}>
          {courseMapping(allCourses).map((course, index) => {
            return <option
              key={index}
              value={course.value}>
              {course.label}</option>
          })}
        </select>
      </div>

      <div className='mb-3'>
        <label
          htmlFor='dept'
          className='form-label'><b>Select Faculty</b>
        </label>
        <select
          onChange={(e) => setOfferingFaculty(e)}
          className='form-select'
          name='course_level'
          value={offering.faculty}>
          {facultyMapping(allFaculties).map((level, index) => {
            return <option
              key={index}
              value={level.value}>{level.label}</option>
          })}
        </select>
      </div>

      <div className='mb-3'>
        <label
          htmlFor='dept'
          className='form-label'><b>Select Select Classroom</b>
        </label>
        <select
          onChange={(e) => setClassRoom(e)}
          className='form-select'
          name='course_level'
          value={offering.classroom}>
          {classrooms.map(cl => <option
            key={cl.label}
            value={cl.value}>{cl.label}</option>)}
        </select>
      </div>
      
        <label>Select Start Date</label>
      <input type="date"
        id="start"
        value={offering.startDate}
        onChange={date => setStartdate(date)} />
      
      <label>Select End Date</label>
      <input type="date"
        value={offering.endDate}
        onChange={(date) => setDate(date)} />

      <button
        type='submit'
        className='btn btn-prime createbutton'>Create</button>
      
      {success &&
        <Modal show={showModal} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Course with following information created</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div><span>Course Number: </span> {success.courseNumber}</div>
            <div><span>Course Title: </span> {success.title}</div>
            <div><span>Course Credits: </span> {success.creditHours}</div>
            <div><span>Course Level: </span> {success.level}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>}
    </div>

  </form>
}

export default CreateCourseOffering
