import axios from "axios"
import { STUDENT_USER, ADMIN_BASE_URL, FACULTY_USER, REGISTRAR_USER } from "../consts"

export const getUserById = async (userId) => {
  // await axios.get(`localhost:8080/student/?userId`)
  // return await axios.get(`https://www.boredapi.com/api/activity`)
  //   .then(result => result.data)
  //   .catch(error => error.message)
  return {
    firstName: 'Mihamed',
    lastName: 'Tirha',
    userid: '67834',
    role: 'STUDENT',
    courses: [
      { courseCode: 'CS490', courseTitle: 'Project Management' },
      { courseCode: 'CS410', courseTitle: 'Algorithms' },
      { courseCode: 'CS550', courseTitle: 'Modern Web Applications' }
    ]
  }
}


export const createUser = async (body) => {
  console.log('===========')
  console.log('=========== yvwufdy ', body)
  console.log('===========')
  console.log('Called ', body)
  const URL = body.role === STUDENT_USER
    ? `${ADMIN_BASE_URL}/students`
    : body.role === FACULTY_USER ?
      `${ADMIN_BASE_URL}/faculties`
      : body.role === REGISTRAR_USER ?
        `${ADMIN_BASE_URL}/registrars`
        : null
      
  console.log('URL ', URL)
  console.log('BODY ', body)
  return await axios.post(URL, body)
    .then(res => res.data)
    .catch(error => error.message)
}
