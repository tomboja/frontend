import axios from 'axios'
import { COURSE_API_URI, CREATE_COURSE_URL } from '../consts'

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
        courseId:'CS390',
        courseTitle:'FPP',
        creditHours: 4,
        department: 'compro'
      },
      {
          courseId:'CS490',
          courseTitle:'MPP',
          creditHours: 4,
          department: 'compro'
        },
        {
          courseId:'CS590',
          courseTitle:'CPP',
          creditHours: 4,
          department: 'compro'
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
