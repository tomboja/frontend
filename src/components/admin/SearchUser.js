import React, { useState } from "react"

const SearchUser = () => {
  const [userId, setUserId] = useState('')

  const searchUser = (e) => {
    const userId = e.target.value
    console.log('Value ', userId)
    setUserId(userId)
  }

  const searchUserById = (e) => {
    e.preventDefault()
    // Perform user search
  }

  return <div>
    <form onSubmit={searchUserById}>
      <input
        className="searchUser"
        type='text'
        onChange={searchUser}
        value={userId}
        placeholder="Search by user id" />
      <button type="button">Search</button>
    </form>

  </div>
}

export default SearchUser
