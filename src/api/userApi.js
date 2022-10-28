import axios from "axios"
import { STUDENT_USER, CREATE_STUDENT_URL, ADMIN_BASE_URL, FACULTY_USER, REGISTRAR_USER, CREATE_FACULTY_URL, CREATE_REGISTRAR_URL } from "../consts"

const getUrl = (role) => {
  return role === STUDENT_USER
    ? `${ADMIN_BASE_URL}/students`
    : role === FACULTY_USER ?
      `${ADMIN_BASE_URL}/faculties`
      : role === REGISTRAR_USER ?
        `${ADMIN_BASE_URL}/registrars`
        : null
}

export const getUserById = async (userId) => {
  const BASE_URL = userId.startsWith('STU')
    ? CREATE_STUDENT_URL
    : userId.startsWith('FAC')
      ? CREATE_FACULTY_URL
      : userId.startsWith('REG')
        ? CREATE_REGISTRAR_URL : null

  const url = BASE_URL + '/' + userId
  return await axios.get(url)
    .then(result => result.data)
    .catch(error => error.message)
}


export const createUser = async (body) => {
  const URL = body.role === STUDENT_USER
    ? `${ADMIN_BASE_URL}/students`
    : body.role === FACULTY_USER ?
      `${ADMIN_BASE_URL}/faculties`
      : body.role === REGISTRAR_USER ?
        `${ADMIN_BASE_URL}/registrars`
        : null
  let data = {}
  await axios.post(URL, body)
    .then(res => {
      data = res.data
    })
    .catch(error => error.message)
  console.log('Data: ', data)
  return data
}

/**
 * fetches all users based on role
 * @param {string} role - user role. eg. STUDENT, ADMIN, FACULTY OR REGISTRAR
 * @returns 
 */
export const getAllUsersByRole = async (role) => {

  const url = 'http://localhost:8081/api/v1/admin/faculties'
  const response = {}
  await axios.get(url).then(result => {
    response.data = result.data
  }).catch(error => {
    response.error = error.message
  })
  console.log('RESPONSEEEE ', response)
  return response
}
