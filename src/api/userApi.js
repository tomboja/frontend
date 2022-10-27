import axios from "axios"
import { STUDENT_USER, CREATE_USER_URL, ADMIN_BASE_URL, FACULTY_USER, REGISTRAR_USER } from "../consts"

export const getUserById = async (userId) => {
  const url = CREATE_USER_URL + '/' + userId
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
  return await axios.post(URL, body)
    .then(res => res.data)
    .catch(error => error.message)
}
