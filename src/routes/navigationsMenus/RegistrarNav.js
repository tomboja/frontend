/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { CREATE_COURSE, LOGOUT, HOME, COURSE_OFFERINGS } from "../../texts"
import { NavLink } from "react-router-dom"
import { initialState } from "../../store/activeUserInitialState"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../reducers/loginReducer"

const RegistrarNav = () => {
  //const activeUser = useSelector(state => state.activeUser)
  // const { role } = activeUser
  // const dispatch = useDispatch()

  // const handleLogout = () => {
  //   // TODO: 1. Make API call to invalidate user's access_token
  //   // 2. Clean active user redux store
  //   dispatch(logout(initialState))
  // }

  return <>
    <li className="nav-item"><NavLink to="/create_course_offering" className="nav-link menuItem">Create Course Offering</NavLink></li>
    <li className="nav-item"><NavLink to="/create_course" className="nav-link menuItem">{CREATE_COURSE}</NavLink></li>
    <li className="nav-item"><NavLink to="/courses_list" className="nav-link menuItem">{COURSE_OFFERINGS}</NavLink></li>
    {/* <li className="logout">{role ?
      <span
        onClick={handleLogout}
        className="menuItem">{LOGOUT}</span>
      : null}</li> */}
  </>
}

export default RegistrarNav
