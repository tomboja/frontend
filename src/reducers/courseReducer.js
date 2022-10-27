import { createSlice } from "@reduxjs/toolkit"

// This is just a sample data
const initialState = []

const courseReducer = createSlice({
  name: 'courseData',
  initialState,
  reducers: {
    saveCourse: (courseData, action) => {
        courseData.push(...action.payload)
    },
    deleteCourse: () => { },
    loadCourses: (courses, action) => action.payload,
    resetCourse: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { saveCourse, deleteCourse, loadCourses, resetCourse } = courseReducer.actions

export default courseReducer.reducer
