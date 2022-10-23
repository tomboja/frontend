import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import assessementReducer from '../reducers/assessementReducer'
import loginReducer from '../reducers/loginReducer'
import selfAssessement from '../reducers/selfAssessement'
import userReducer from '../reducers/userReducer'

const reducer = combineReducers({
  selfAssement: selfAssessement,
  activeUser: loginReducer,
  assessements: assessementReducer,
  userData: userReducer,
})

const store = configureStore({
  reducer,
})
export default store
