import React from "react"
import { Routes, Route, NavLink, useNavigate } from "react-router-dom"

import LoginPage from "../components/admin/LoginPage"
import CourseOfferings from "../components/courses/CourseOfferingsPage"
import AboutPage from "../components/admin/AboutPage"
import CreateQuizPage from "../components/faculty/CreateQuizPage"
import { ABC_UNIVERSITY, LOGOUT } from "../texts"
import UserMenus from "./UserMenus"
import RegistrationPage from "../components/admin/RegistrationPage"
import { useDispatch, useSelector } from "react-redux"
import AdminPage from "../components/admin/AdminPage"
import { ADMIN_USER, FACULTY_USER, REGISTRAR_USER, STUDENT_USER } from "../consts"
import RolebaseHomepage from "../componentUtils/homepageBasedOnRole"
import CreateCoursePage from "../components/registrar/CreateCoursePage"
import StudentCourseOfferings from "../components/courses/StudentCourseOfferingsPage"
import Payment from "../components/payment/Payment"
import SearchUser from "../components/admin/SearchUser"
import CreateCourseOffering from "../components/registrar/CreateCourseOffering"
import { logout } from "../reducers/loginReducer"
import { initialState } from "../store/activeUserInitialState"


const PageRoutes = () => {
  const activeUser = useSelector(state => state.activeUser)
  const role = activeUser ? activeUser.role : null
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: 1. Make API call to invalidate user's access_token
    // 2. Clean active user redux store
    navigate("/")
    dispatch(logout(initialState))
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-prime">
        <div className="container-fluid">
          <NavLink to="/" className="logo navbar-brand">{ABC_UNIVERSITY}</NavLink>
          {/* <a className="navbar-brand" href="#">ABC University</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">About</NavLink>
                {/* <a className="nav-link" href="#">About</a> */}
              </li>
              <UserMenus />
            </ul>
            <ul className="logout navbar-nav">
              <li className="nav-item">
              {role ?
                <a
                  onClick={handleLogout}
                  className="nav-link menuItem">{LOGOUT}</a>
                : null}
              </li>
            </ul>
          </div>
          
        </div>
      </nav>

      {/* <nav className="nav">
        <ul>
          <li><NavLink to="/" className="logo">{ABC_UNIVERSITY}</NavLink></li>
          <span className="menu">
            <UserMenus />
          </span>
        </ul>
      </nav> */}
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
        <Route path='/create_quiz' element={<CreateQuizPage />}></Route>
        <Route path='/aboutus' element={<AboutPage />}></Route>
        <Route path="/searchUser" element={<SearchUser />}></Route>
        <Route path="/courses_list" element={<CourseOfferings />}/>
        <Route path="/create_course_offering" element={<CreateCourseOffering />}/>
      </Routes>
    </>
  )
}

export default PageRoutes
