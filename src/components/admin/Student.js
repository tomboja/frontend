import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStudents } from "../../api/studentsAPIs"
import { STUDENT_API_URI } from "../../consts"
import { saveUser } from "../../reducers/userReducer"

export const StudentsList = () => {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([])
  const studentsFromReduxStore = useSelector(state => state.userData)

  // Equivalent to ComponentDidMount() of class component
  useEffect(() => {
    // const studentData = () => {
    //   const { data } = await axios
    //     .get(STUDENT_API_URI)
    //     .then(result => result.data)
    //     .catch(error => {
    //     return 'Error fetching students data'
    //   })

    //   return getAllStudents()
    // }

    const students = getAllStudents()
    dispatch(saveUser(students[0]))
    setStudents(students)
  }, [dispatch])

  return (<div>
    <h4>List of Students</h4>
    <ol>
      {
        studentsFromReduxStore.map((student, index, array) => {
          return <li key={index}> Name: {student.firstName} Student Id: {student.userId} Addmission Date: {student.admissionDate}</li>
         })
      }
    </ol>

  </div>)
}

export default StudentsList
