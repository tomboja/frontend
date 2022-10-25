import axios from "axios"
import { ERROR_DURING_LOGIN } from "../texts"

export const loginUserApi = async (body) => {
  return await axios.get('https://www.boredapi.com/api/activity', body)
    .then(res => res.data)
    .catch(error => `${ERROR_DURING_LOGIN} ${error.message}`)
}
