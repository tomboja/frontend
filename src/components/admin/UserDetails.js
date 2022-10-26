import React from "react"

import '../../resources/styles/styles.css'
import { FULL_NAME, ROLE, USER_ID } from "../../texts"
import { STUDENT_USER } from '../../consts'
import StudentCourseList from "../courses/StudentCourseList"

const UserDetailComponent = ({ user }) => {

  return <div className="userDetails">
    <p className="userDetail">{FULL_NAME}: {user.firstName} {user.lastName}</p>
    <p className="userDetail">{USER_ID}: {user.userid}</p>
    <p className="userDetail">{ROLE}: {user.role}</p>
    {user.role === STUDENT_USER ? <StudentCourseList courses={user.courses}/> : null}
  </div>
}

export default UserDetailComponent
