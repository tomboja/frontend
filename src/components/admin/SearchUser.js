import React, { useEffect, useState } from "react"
import { getUserById } from "../../api/userApi"
import { SEARCH, SEARCH_BY_USER_ID, USER_ID_NOT_CORRECT } from "../../texts"
import ErrorComponent from "../ErrorComponent/ErrorComponent"
import '../../resources/styles/Login.css'
import { useDispatch } from "react-redux"
import { clearSelectedUser, setSelectedUser } from "../../reducers/selectionsReducer"

const SearchUser = () => {
  const [userId, setUserId] = useState('')
  const [error, setError] = useState(null)
  const [foundUser, setFoundUser] = useState(null)
  const dispatch = useDispatch()
  
  const validateUserId = (userId) => {
    // UserId Valid Logic
    return userId.length === 6
  }

  useEffect(() => {
    // Clear selected user when component unmounts
    return () => {
      dispatch(() => clearSelectedUser())
    }
  })

  const searchUser = (e) => {
    const userId = e.target.value
      setUserId(userId)
  }

  const searchUserById = async (e) => {
    e.preventDefault()
    // Perform user search
    if (validateUserId(userId)) {
      setUserId(userId)
      setError(null)
      const userInfo = await getUserById(userId)
      dispatch(setSelectedUser(userInfo))
    } else {
      setError(USER_ID_NOT_CORRECT)
    }
  }

  return <div>
    <form onSubmit={searchUserById}>
      {error ? <ErrorComponent
        style={{display: 'flex'}}
        errorId='searchUserError'
        errorMessage={error} />
        : null}
      
      <input
        className="searchUser"
        type='text'
        onChange={searchUser}
        value={userId}
        placeholder={SEARCH_BY_USER_ID} />
      <button type="submit">{SEARCH}</button>
    </form>
  </div>
}

export default SearchUser
