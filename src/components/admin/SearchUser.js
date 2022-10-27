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
    return userId.length === 9
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
      setFoundUser(userInfo)
    } else {
      setError(USER_ID_NOT_CORRECT)
    }
  }

  return <div>
    <form className="row g-3" onSubmit={searchUserById}>
      {error ? <ErrorComponent
        style={{display: 'flex'}}
        errorId='searchUserError'
        errorMessage={error} />
        : null}
      <div className="col">
        <input
          className="form-control"
          type='search'
          onChange={searchUser}
          value={userId}
          placeholder={SEARCH_BY_USER_ID} />
      </div>
      <div className="col">
        <button className="btn btn-prime" type="submit">{SEARCH}</button>
      </div>
    </form>
    {foundUser ? <div className="foundUser">
      <p>User details found in database: </p>
      <div>User Number: {foundUser.userNumber}</div>
      <div>First Name: {foundUser.firstName}</div>
      <div>Last Name: {foundUser.lastName}</div>
      <div>User Email: {foundUser.email}</div>
      <div>Addmission Date: {foundUser.admissionDate}</div>
      <div>Addmission Date: {foundUser.phone_number}</div>
    </div> : null}
  </div>
}

export default SearchUser
