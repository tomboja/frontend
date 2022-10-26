import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import assessementReducer from '../reducers/assessementReducer'
import courseReducer from '../reducers/courseReducer'
import loginReducer from '../reducers/loginReducer'
import selfAssessement from '../reducers/selfAssessement'
import userReducer from '../reducers/userReducer'

const reducer = combineReducers({
  selfAssement: selfAssessement,
  activeUser: loginReducer,
  assessements: assessementReducer,
  userData: userReducer,
  courseData:courseReducer
})

const store = configureStore({
  reducer,
})
export default store
