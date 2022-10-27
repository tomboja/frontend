import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersByRole } from "../../api/userApi"
import { loadFaculty } from "../../reducers/facultyReducer"

const CreateCourseOffering = () => {
  const [faculties, setFaculties] = useState([])
  const [errors, setErrors] = useState({})

  const activeUser = useSelector(state => state.activeUser)
  const dispatch = useDispatch()


  const { role } = activeUser
  useEffect(() => {
    // Load all faulties
    const faculties = async (role) => {
      console.log('faculty load: ', role)
      await getAllUsersByRole(role).then((result) => {
        if (result.error) {
          setErrors({ facultyFetchingFailed: 'Fetching Faculties failed' + result.error })
        }
        else {
          const facultyData = result.data
          setErrors({ facultyFetchingFailed: null })
          dispatch(loadFaculty(facultyData.data))
        }
      })
    }

    faculties(role)

  }, [dispatch, role])

  return <>
  </>
}

export default CreateCourseOffering
