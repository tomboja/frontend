import { createSlice } from "@reduxjs/toolkit"

// This is just a sample data
const initialState = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@miu.edu',
  role: 'STUDENT',
  userId: 1234356,
  admissionDate: "2021-01-01",
  courses: [
    { courseId: 'CS490', courseName: 'Project Management', credist: '4 crd', faculty: 'Prof. Somesh', offering: 'October 2022' },
    { courseId: 'CS410', courseName: 'MPP', credist: '4 crd', faculty: 'Prof. Coraza', offering: 'November 2022' },
    { courseId: 'CS390', courseName: 'FPP', credist: '4 crd', faculty: 'Prof. Coraza', offering: 'September 2022' }
  ]
}]

const studentReducer = createSlice({
  name: 'studentData',
  initialState,
  reducers: {
    saveUser: (userData, action) => {
      userData.push(action.payload)
    },
    deleteUser: () => { },
    loadUsers: () => { },
  }
})

// Action creators are generated for each case reducer function
export const { saveUser, deleteUser, loadUsers } = studentReducer.actions

export default studentReducer.reducer
