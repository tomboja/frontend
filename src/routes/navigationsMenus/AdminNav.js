/**
 * Render ADMIN navigation menus
 */

import React from "react"

import { CREATE_USER, LOGOUT } from "../../texts"
import { NavLink } from "react-router-dom"

const AdminNav = () => {

  return <>
    <li><NavLink to="/createUser" className="menuItem">{CREATE_USER}</NavLink></li>
    <li><NavLink to="/logout" className="menuItem">{LOGOUT}</NavLink></li>
  </>
}

export default AdminNav
