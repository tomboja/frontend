import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUserData } from '../../reducers/loginReducer'
import { WELCOME_MESSAGE, STUDENT_LOGIN_FORM_HEADING, EMAIL, PASSWORD, ROLE, LOGIN, ERROR_DURING_LOGIN } from '../../texts'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { STUDENT_LOGIN_TXT, STUDENT_LOGIN_FORM_HEADING } from "../../texts"
import { ADMIN_USER, STUDENT_USER, FACULTY_USER, REGISTRAR_USER } from "../../consts"
import '../../resources/styles/Login.css'
import { roleOptions } from '../../dataMapping'
import { loginUserApi } from '../../api/loginAPIs'

const LoginPage = () => {
  const dispatch = useDispatch()
  const activeUser = useSelector(state => state.activeUser)
  const initialState = {
    access_token: '',
    refresh_token: '',
    email: '',
    password: '',
    role: roleOptions[0].value
  }

  const [userData, setUserData] = useState(initialState)
  const [error, setError] = useState(null)

  const setEmail = (e) => {
    const email = e.target.value
    setUserData((oldData) => {
      return { ...oldData, email }
    })
  }

  const setPassword = (e) => {
    const password = e.target.value
    setUserData((oldData) => {
      return { ...oldData, password }
    })
  }

  const setRole = (e) => {
    const role = e.target.value
    setUserData((oldData) => {
      return { ...oldData, role }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = { email: userData.email, password: userData.password, role: userData.role }
    const response = await loginUserApi(body)
    dispatch(setActiveUserData(userData))
    if (!response.error) {
      setUserData(initialState)
      setError(null)
    } else {
      setError(response.error)
     }
  }

  return (
    <div className='container'>
      <h4>{WELCOME_MESSAGE}</h4>
      <form className='row border loginForm' onSubmit={handleSubmit}>
        <h4>{STUDENT_LOGIN_FORM_HEADING}</h4>
        <div className='row mb-6 loginField'>
          <label htmlFor='email' className='col-2 col-form-label'>{EMAIL}</label>
          <div className='col-9'>
            <input onChange={setEmail} className='form-control' type='email' placeholder='Email' required value={userData.email} />
          </div>
        </div>
        <div className='row mb-6 loginField'>
          <label htmlFor='psw' className='col-2 col-form-label'>{PASSWORD}</label>
          <div className='col-9'>
            <input onChange={setPassword} className='form-control' type='password' placeholder='Password' required value={userData.password} />
          </div>
        </div>
        <div className='row mb-6 loginField'>
          <label htmlFor='role' className='col-2 col-form-label'>{ROLE}</label>
          <div className='col-9'>
            <select
              onChange={setRole}
              className='form-select'
              name='role'
              value={userData.role}>
              {roleOptions.map(role => <option
                key={role.label}
                value={role.value}>{role.label}</option>)}
            </select>
          </div>
        </div>
        {error ? <span className='error_message'>{ERROR_DURING_LOGIN}</span> : null}
        <div className='row text-end mb-6'>
          <div className='col-11'>
            <button type='submit' className='btn btn-prime'>{LOGIN}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
