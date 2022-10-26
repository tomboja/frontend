/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { CREATE_USER, LOGOUT, HOME } from "../../texts"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../reducers/loginReducer"
import { initialState } from "../../store/activeUserInitialState"
import '../../resources/styles/styles.css'

const StudentNav = () => {
  const activeUser = useSelector(state => state.activeUser)
  const { role } = activeUser
  const dispatch = useDispatch()

  const handleLogout = (user) => {
    // TODO: 1. Make API call to invalidate user's access_token
    // 2. Clean active user redux store
    dispatch(logout(initialState))
  }

  return <>
    <li><NavLink to="/" className="menuItem">{HOME}</NavLink></li>
    <li><NavLink to="/createUser" className="menuItem">{CREATE_USER}</NavLink></li>
    <li className="logout">{role ?
      <span
        onClick={handleLogout}
        className="menuItem">{LOGOUT}</span>
      : null}</li>
  </>
}

export default StudentNav
