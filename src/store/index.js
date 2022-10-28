import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import assessementReducer from '../reducers/assessementReducer'
import courseReducer from '../reducers/courseReducer'
import facultyReducer from '../reducers/facultyReducer'
import loginReducer from '../reducers/loginReducer'
import selectionsReducer from '../reducers/selectionsReducer'
import selfAssessement from '../reducers/selfAssessement'
import studentReducer from '../reducers/studentReducer'

const reducer = combineReducers({
  selfAssement: selfAssessement,
  activeUser: loginReducer,
  assessements: assessementReducer,
  studentData: studentReducer,
  courseData:courseReducer,
  selectedUser: selectionsReducer,
  facultyData: facultyReducer
})

const store = configureStore({
  reducer,
})
export default store
