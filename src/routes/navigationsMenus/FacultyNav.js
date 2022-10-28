/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { COURSE_OFFERINGS, LOGOUT, HOME } from "../../texts"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../reducers/loginReducer"
// import { initialState } from "../../store/activeUserInitialState"
import 'bootstrap/dist/js/bootstrap'

const FacultyNav = () => {

  // const activeUser = useSelector(state => state.activeUser)
  // const { role } = activeUser
  // const dispatch = useDispatch()

  // const handleLogout = () => {
  //   // TODO: 1. Make API call to invalidate user's access_token
  //   // 2. Clean active user redux store
  //   dispatch(logout(initialState))
  // }

  return <>
    {/* <li><NavLink to="/" className="menuItem col">{HOME}</NavLink></li> */}
    {/* <li><NavLink to="/courseOfferings" className="menuItem">{COURSE_OFFERINGS}</NavLink></li>*/}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Create
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Quiz</a></li>
        <li><a className="dropdown-item" href="#">Test</a></li>
        <li><a className="dropdown-item" href="#">Homework</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Assign
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Quiz</a></li>
        <li><a className="dropdown-item" href="#">Test</a></li>
        <li><a className="dropdown-item" href="#">Homework</a></li>
      </ul>
    </li>
    {/* <li className="logout nav-item">{role ?
      <span
        onClick={handleLogout}
        className="menuItem">{LOGOUT}</span>
      : null}</li> */}
  </>
}

export default FacultyNav
