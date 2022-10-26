/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { COURSE_OFFERINGS, LOGOUT, HOME } from "../../texts"
import { NavLink } from "react-router-dom"

const FacultyNav = () => {

  return <>
    <li><NavLink to="/" className="menuItem">{HOME}</NavLink></li>
    <li><NavLink to="/courseOfferings" className="menuItem">{COURSE_OFFERINGS}</NavLink></li>
    <li><NavLink to="/logout" className="menuItem">{LOGOUT}</NavLink></li>
  </>
}

export default FacultyNav
