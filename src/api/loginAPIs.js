import axios from "axios"
import { ERROR_DURING_LOGIN } from "../texts"
import {CREATE_USER_URL} from "../consts"

export const loginUserApi = async (body) => {
  return await axios.get('https://www.boredapi.com/api/activity', body)
    .then(res => res.data)
    .catch(error => `${ERROR_DURING_LOGIN} ${error.message}`)
}

export const createUser = async (body) => {
  return await axios.post(CREATE_USER_URL, body)
    .then(res => res.data)
    .catch(error => error.message)
}
