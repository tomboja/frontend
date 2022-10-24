import { useState } from "react"
import { useDispatch } from "react-redux"
import { validatePassword, validateDateOfBirth, validatePhone } from '../../utils/formUtils'
import { setUserToken } from "../../reducers/loginReducer"
import { STUDENT_LOGIN_TXT } from "../../texts"
import '../../resources/styles/Login.css'

export default function LoginPage() {
  const dispatch = useDispatch()
  const initialState = {
    email: "",
    password: "",
  }
  const [userData, setUserData] = useState(initialState)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input data: ', userData)
    dispatch(setUserToken(userData.email))
    setUserData(initialState)
  }

  return (
    <div className="container">
      <div className='welcome_message'>{STUDENT_LOGIN_TXT}</div>
      <form action="" onSubmit={handleSubmit} method="post">
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>Email</b></label>
          <input onChange={setEmail} className="form-control" type="email" placeholder="Email" name="email" required value={userData.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="psw" className="form-label"><b>Password</b></label>
          <input onChange={setPassword} className="form-control" type="password" placeholder="Password" name="psw" required value={userData.password} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
