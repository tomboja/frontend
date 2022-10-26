import { createSlice } from "@reduxjs/toolkit"

// This is just a sample data
const initialState = {}

const selectedUserReducer = createSlice({
  name: 'selectedUser',
  initialState,
  reducers: {
    setSelectedUser: (user, action) => {
      return action.payload
    },
    clearSelectedUser: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedUser, clearSelectedUser } = selectedUserReducer.actions

export default selectedUserReducer.reducer
