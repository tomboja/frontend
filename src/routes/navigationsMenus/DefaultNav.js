/**
 * Render Default navigation menus
 */

import React from "react"

import { COURSE_OFFERINGS, ABOUT_US } from "../../texts"
import { NavLink } from "react-router-dom"

const DefaultNav = () => {

  return <>
    <li><NavLink to="/courses" className="menuItem">{COURSE_OFFERINGS}</NavLink></li>
    <li><NavLink to="/aboutus" className="menuItem">{ABOUT_US}</NavLink></li>
  </>
}

export default DefaultNav
