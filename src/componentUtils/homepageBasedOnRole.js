import React from "react"
import AdminPage from "../components/admin/AdminPage"
import LoginPage from "../components/admin/LoginPage"
import { ADMIN_USER, FACULTY_USER, REGISTRAR_USER, STUDENT_USER } from "../consts"

const RolebaseHomepage = ({ role }) => {
  return role === ADMIN_USER
    ? <AdminPage />
    : role === STUDENT_USER
      ? '' // Render student homepage
      : role === FACULTY_USER
        ? '' // Render faculty homepage
        : role === REGISTRAR_USER
          ? '' // Render registrar homepage 
          : <LoginPage />
}

export default RolebaseHomepage