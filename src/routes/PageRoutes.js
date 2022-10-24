import React from "react"
import { Routes, Route, NavLink } from "react-router-dom"

import LoginPage from "../components/admin/LoginPage"
import CourseOfferings from "../components/admin/CourseOfferingsPage"
import AboutPage from "../components/admin/AboutPage"
import { ABC_UNIVERSITY, ABOUT_US, COURSE_OFFERINGS } from "../texts"

const PageRoutes = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" className="logo" exact={true}>{ABC_UNIVERSITY}</NavLink></li>
          <span className="menu">
            <li><NavLink to="/courses" className="menuItem">{COURSE_OFFERINGS}</NavLink></li>
            <li><NavLink to="/aboutus" className="menuItem">{ABOUT_US}</NavLink></li>
          </span>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/courses' element={<CourseOfferings />}></Route>
        <Route path='/aboutus' element={<AboutPage />}></Route>
      </Routes>
    </>
  )
}

export default PageRoutes
