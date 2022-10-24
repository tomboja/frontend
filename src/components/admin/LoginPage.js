import { useState } from "react"
import { useDispatch } from "react-redux"
import { validatePassword, validateDateOfBirth, validatePhone } from '../../utils/formUtils'
import { setUserToken } from "../../reducers/loginReducer"
import { STUDENT_LOGIN_TXT, STUDENT_LOGIN_FORM_HEADING } from "../../texts"
import '../../resources/styles/Login.css'

export default function LoginPage() {
  const dispatch = useDispatch()
  const initialState = {
    email: "",
    password: "",
  }
  const [userData, setUserData] = useState(initialState)
  const roleOptions = ['ADMIN', 'STUDENT', 'REGISTRAR', 'FACULTY'];

  const setEmail = (e) => {
    const email = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, email }
    })
  }

  const setPassword = (e) => {
    const password = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, password }
    })
  }

  const setRole = (e) => {
    const role = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, role }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input data: ', userData)
    dispatch(setUserToken(userData))
    setUserData(initialState)
  }

  return (
    <div className="container">
        <h4>{STUDENT_LOGIN_TXT}</h4>
        <form className="row align-items-center w-50 border" action="" onSubmit={handleSubmit} method="post">
            <h4>{STUDENT_LOGIN_FORM_HEADING}</h4>
            <div className="row mb-3">
                <label htmlFor="email" className="col-2 col-form-label"><b>Email</b></label>
                <div className="col-6">
                    <input onChange={setEmail} className="form-control" type="email" placeholder="Email" name="email" required value={userData.email} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="psw" className="col-2 col-form-label"><b>Password</b></label>
                <div className="col-6">
                    <input onChange={setPassword} className="form-control" type="password" placeholder="Password" name="psw" required value={userData.password} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="role" className="col-2 col-form-label"><b>Role</b></label>
                <div className="col-6">
                    <select onChange={setRole} className="form-select" name="role" required>
                        {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
                    </select>
                </div>
            </div>
            <div className="row text-end mb-3">
                <div className="col-8">
                    <button type="submit" className="btn btn-prime">Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}
