import axios from 'axios'
import { COURSE_API_URI, CREATE_COURSE_URL, UPDATE_COURSE_URL } from '../consts'

/**
 * All calls student related APIs go inhere
 */
export const getAllCourse = () => {
  // This is how we make call when API is ready
  // return await axios.get(STUDENT_API_URI).then(result => result.data).catch((value) => {
  //  return 'Error message for data fetch failure'
  //})

  // Return mock data for now
  return [
    {
        courseNumber:'CS390',
        title:'FPP',
        credit: 4,
        level: 'compro',
        enrolment_id:5,
        enroll_status:0
      },
      {
          courseNumber:'CS490',
          title:'MPP',
          credit: 4,
          level: 'compro',
          enrolment_id:2,
          enroll_status: 1
        },
        {
          courseNumber:'CS590',
          title:'CPP',
          credit: 4,
          level: 'compro',
          enrolment_id:3,
          enroll_status: 1
        }
  ]
}

export const courseDetails = async (courseId) => {

}


export const createCourse = async (course) => {
  return await axios.post(CREATE_COURSE_URL, course)
    .then(result => result.data)
    .catch(error => error.message)
}

export const updateCourse = async (course) => {
  console.log(course)
  return await axios.put(CREATE_COURSE_URL+"/"+course.courseNumber, course)
    .then(result => result.data)
    .catch(error => error.message)
}
