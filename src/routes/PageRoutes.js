import React from "react"
import { Routes, Route, NavLink } from "react-router-dom"

import LoginPage from "../components/admin/LoginPage"
import CourseOfferings from "../components/courses/CourseOfferingsPage"
import AboutPage from "../components/admin/AboutPage"
import { ABC_UNIVERSITY } from "../texts"
import UserMenus from "./UserMenus"
import RegistrationPage from "../components/admin/RegistrationPage"
import { useSelector } from "react-redux"
import AdminPage from "../components/admin/AdminPage"
import { ADMIN_USER, FACULTY_USER, REGISTRAR_USER, STUDENT_USER } from "../consts"
import RolebaseHomepage from "../componentUtils/homepageBasedOnRole"
import CreateCoursePage from "../components/registrar/CreateCoursePage"
import StudentCourseOfferings from "../components/courses/StudentCourseOfferingsPage"
import Payment from "../components/payment/Payment"
import SearchUser from "../components/admin/SearchUser"
import CreateCourseOffering from "../components/registrar/CreateCourseOffering"


const PageRoutes = () => {
  const activeUser = useSelector(state => state.activeUser)
  const role = activeUser ? activeUser.role : null
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
        {/* <Route path='/' element={<LoginPage />}></Route> */}
        {/* <Route path='/' element={<CourseOfferings />}></Route> */}
        {/* <Route path="/AddCourse" element={<AddCourse />}></Route> */}
        <Route exact path='/' element={<RolebaseHomepage role = {role}/>}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path='/courses' element={<CourseOfferings />}></Route>
        <Route path='/my_course_offerings' element={<StudentCourseOfferings />}></Route>
        <Route path='/createUser' element={<RegistrationPage />}></Route>
        <Route path='/create_course' element={<CreateCoursePage />}></Route>
        <Route path='/aboutus' element={<AboutPage />}></Route>
        <Route path="/searchUser" element={<SearchUser />}></Route>
        <Route path="/courses_list" element={<CourseOfferings />}/>
        <Route path="/create_course_offering" element={<CreateCourseOffering />}/>
      </Routes>
    </>
  )
}

export default PageRoutes
