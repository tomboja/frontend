import axios from "axios"

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