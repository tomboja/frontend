/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { CREATE_COURSE, LOGOUT, HOME } from "../../texts"
import { NavLink } from "react-router-dom"

const RegistrarNav = () => {

  return <>
    <li><NavLink to="/" className="menuItem">{HOME}</NavLink></li>
    <li><NavLink to="/createUser" className="menuItem">{CREATE_COURSE}</NavLink></li>
    <li><NavLink to="/logout" className="menuItem">{LOGOUT}</NavLink></li>
  </>
}

export default RegistrarNav
