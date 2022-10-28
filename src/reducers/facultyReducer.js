import { createSlice } from "@reduxjs/toolkit"

// This is just a sample data
const initialState = [{
  facultyName: '',
  facultyNumber: ''
}]

const facultyReducer = createSlice({
  name: 'facultyData',
  initialState,
  reducers: {
    saveFaculty: (userData, action) => {
      userData.push(action.payload)
    },
    deleteFaculty: () => { },
    loadFaculty: (faculty, action) => { 
      return action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { saveFaculty, deleteFaculty, loadFaculty } = facultyReducer.actions

export default facultyReducer.reducer
