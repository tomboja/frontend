import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const selfAssessement = createSlice({
  name: 'selfAssessement',
  initialState,
  reducers: {
    saveSelfAssessement: (assessement, action) => {
      return assessement
    },
    loadSelfAssessement: () => { },
  }
})

// Action creators are generated for each case reducer function
export const { saveSelfAssessement, loadSelfAssessement } = selfAssessement.actions

export default selfAssessement.reducer
