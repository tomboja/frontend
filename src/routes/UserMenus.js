/**
 * Render specific user related menus
 */

import React from "react"

import { useSelector } from "react-redux"
import { ADMIN_USER, FACULTY_USER, REGISTRAR_USER, STUDENT_USER } from "../consts"

import DefaultNav from "./navigationsMenus/DefaultNav"
import FacultyNav from "./navigationsMenus/FacultyNav"
import RegistrarNav from "./navigationsMenus/RegistrarNav"
import AdminNav from "./navigationsMenus/AdminNav"
import StudentNav from "./navigationsMenus/StudentNav"

const UserMenus = () => {
  const user = useSelector(state => state.activeUser)

  if (user.role === STUDENT_USER) return <StudentNav />
  if (user.role === ADMIN_USER) return <AdminNav />
  if (user.role === FACULTY_USER) return <FacultyNav />
  if (user.role === REGISTRAR_USER) return <RegistrarNav />
  else return <DefaultNav />

}

export default UserMenus
