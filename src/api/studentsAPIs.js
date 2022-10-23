import axios from 'axios'
import { STUDENT_API_URI } from '../consts'

/**
 * All calls student related APIs go inhere
 */
export const getAllStudents = () => {
  // This is how we make call when API is ready
  // return await axios.get(STUDENT_API_URI).then(result => result.data).catch((value) => {
  //  return 'Error message for data fetch failure'
  //})

  // Return mock data for now
  return [
    {
      id: 1,
      userId: '631425',
      firstName: 'Mohamed',
      lastName: 'Tirha',
      email: 'tirha10@gmail.com',
      phone_number: '65412523',
      role: 'STUDENT',
      address: { street: '1105 Meadow Lark Ln.', state: 'IA', zip: 52556, city: 'Fairfield' },
      admissionDate: '2021-01-01',
      dob: '1978-02-17'
    },
    {
      id: 1,
      userId: '631466',
      firstName: 'Temesgen',
      lastName: 'Boja',
      email: 'temesgen@gmail.com',
      phone_number: '65412777',
      role: 'STUDENT',
      address: { street: '1000N 4th St.', state: 'IA', zip: 52557, city: 'Fairfield' },
      admissionDate: '2021-01-04',
      dob: '1990-04-10'
    }
  ]
}

export const getStudentDetails = async (studentId) => {

}
