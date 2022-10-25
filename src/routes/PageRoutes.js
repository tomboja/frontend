import React from "react"
import { Routes, Route, NavLink } from "react-router-dom"

import LoginPage from "../components/admin/LoginPage"
import CourseOfferings from "../components/courses/CourseOfferingsPage"
import AboutPage from "../components/admin/AboutPage"
import { ABC_UNIVERSITY } from "../texts"
import UserMenus from "./UserMenus"
import RegistrationPage from "../components/admin/RegistrationPage"

const PageRoutes = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" className="logo">{ABC_UNIVERSITY}</NavLink></li>
          <span className="menu">
            <UserMenus />
          </span>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/courses' element={<CourseOfferings />}></Route>
        <Route path='/createUser' element={<RegistrationPage />}></Route>
        <Route path='/aboutus' element={<AboutPage />}></Route>
        <Route path="/createUser" element={<RegistrationPage />}></Route>
      </Routes>
    </>
  )
}

export default PageRoutes
