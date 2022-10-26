
import { ADMIN_USER, FACULTY_USER, REGISTRAR_USER, STUDENT_USER } from "../consts"
import { ADMIN, STUDENT, REGISTRAR, FACULTY } from "../texts"

export const roleOptions = [{
  label: ADMIN,
  value: ADMIN_USER
},
{
  value: STUDENT_USER,
  label: STUDENT
},
{
  value: REGISTRAR_USER,
  label: REGISTRAR
},
{
  value: FACULTY_USER,
  label: FACULTY
  }]

export const roleWithoutAdmin = [
{
  value: STUDENT_USER,
  label: STUDENT
},
{
  value: REGISTRAR_USER,
  label: REGISTRAR
},
{
  value: FACULTY_USER,
  label: FACULTY
}]

export const courseLevels = [
  {
    value: 300,
    label: 300
  },
  {
    value: 400,
    label: 400
  },
  {
    value: 500,
    label: 500
  }
]