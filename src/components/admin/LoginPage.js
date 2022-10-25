import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveUserData } from '../../reducers/loginReducer'
import { STUDENT_LOGIN_TXT, STUDENT_LOGIN_FORM_HEADING, EMAIL, PASSWORD, ROLE, LOGIN } from '../../texts'
import '../../resources/styles/Login.css'
import { roleOptions } from '../../dataMapping'

export default function LoginPage() {
  const dispatch = useDispatch()
  const initialState = {
    email: '',
    password: '',
    role: roleOptions[0].value
  }
  const [userData, setUserData] = useState(initialState)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setActiveUserData(userData))
    setUserData(initialState)
  }

  return (
    <div className='container'>
      <h4>{STUDENT_LOGIN_TXT}</h4>
      <form className='row border loginForm' onSubmit={handleSubmit}>
        <h4>{STUDENT_LOGIN_FORM_HEADING}</h4>
        <div className='row mb-6 loginField'>
          <label htmlFor='email' className='col-2 col-form-label'>{EMAIL}</label>
          <div className='col-6'>
            <input onChange={setEmail} className='form-control' type='email' placeholder='Email' required value={userData.email} />
          </div>
        </div>
        <div className='row mb-6 loginField'>
          <label htmlFor='psw' className='col-2 col-form-label'>{PASSWORD}</label>
          <div className='col-6'>
            <input onChange={setPassword} className='form-control' type='password' placeholder='Password' required value={userData.password} />
          </div>
        </div>
        <div className='row mb-6 loginField'>
          <label htmlFor='role' className='col-2 col-form-label'>{ROLE}</label>
          <div className='col-6'>
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
        <div className='row text-end mb-3'>
          <div className='col-8'>
            <button type='button' className='btn btn-prime'>{LOGIN}</button>
          </div>
        </div>
      </form>
    </div>
  )
}
