import axios from 'axios'
import { COURSE_API_URI, PAYMENT_URL } from '../consts'

/**
 * All calls student related APIs go inhere
 */
export const getPayment = () => {
  // This is how we make call when API is ready
  // return await axios.get(STUDENT_API_URI).then(result => result.data).catch((value) => {
  //  return 'Error message for data fetch failure'
  //})

  // Return mock data for now
  return [
    {
        paymentId:1,
        cardNumber:12323213131232,
        name:'TST',
        pin: 1234,
        expiry: "0924"
        
      },
      {
          paymentId:2,  
          cardNumber:32432423432423432,
          name:'MaPP',
          pin: 3444,
          expiry: "0926"
        },
        {
          paymentId:3,
          cardNumber:123213123213,
          name:'sdfwer ',
          pin: 2323,
          expiry: "0925"
        }
  ]
}

export const paymentDetails = async (paymentId) => {

}


export const makePayment = async (course) => {
  return await axios.post(PAYMENT_URL, course)
    .then(result => result.data)
    .catch(error => error.message)
}
