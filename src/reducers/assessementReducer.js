import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  assessementId: '',
  assessementName: '',
  courseName: ''
}

export const assessementReducer = createSlice({
  name: 'assessement',
  initialState,
  reducers: {
    loadAssessements: {},
    createAssessement: {},
    updateAssement: {}
  }
})

export const { loadAssessements, createAssessement, updateAssement } = assessementReducer.actions

export default assessementReducer.reducer