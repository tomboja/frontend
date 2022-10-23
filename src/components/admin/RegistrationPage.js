import { useState } from "react"
import { useDispatch } from "react-redux"
import { validatePassword, validateDateOfBirth, validatePhone } from '../../utils/formUtils'
import { saveUser } from "../../reducers/userReducer"
import { STUDENT_REGISTRATION_TXT } from "../../texts"

export default function RegistrationPage() {
  const dispatch = useDispatch()
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    admissionDate: "",
    password: "",
    confirmPassword: ""
  }
  const [userData, setUserData] = useState(initialState)

  const setFirstName = (e) => {
    const firstName = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, firstName }
    })
  }

  const setLastName = (e) => {
    const lastName = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, lastName }
    })
  }

  const setEmail = (e) => {
    const email = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, email }
    })
  }

  const setPhone = (e) => {
    const phone = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, phone }
    })
  }

  const setDateOfBirth = (e) => {
    const dateOfBirth = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, dateOfBirth }
    })
  }

  const setAdmitDate = (e) => {
    const admissionDate = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, admissionDate }
    })
  }

  const setPassword = (e) => {
    const password = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, password }
    })
  }

  const setConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setUserData((oldData) => {
      return { ...oldData, confirmPassword }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Input data: ', userData)
    dispatch(saveUser(userData))
    setUserData(initialState)
  }

  return (
    <div className="container">
      <h4>{STUDENT_REGISTRATION_TXT}</h4>
      <form action="" onSubmit={handleSubmit} method="post">
        <div className="mb-3">
          <label htmlFor="fname" className="form-label"><b>First Name</b></label>
          <input onChange={setFirstName} className="form-control" type="text" placeholder="First Name" name="fname" required value={userData.firstName} />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label"><b>Last Name</b></label>
          <input onChange={setLastName} className="form-control" type="text" placeholder="Last Name" name="lname" required value={userData.lastName} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>Email</b></label>
          <input onChange={setEmail} className="form-control" type="email" placeholder="Email" name="email" required value={userData.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label"><b>Phone Number</b></label>
          <input onChange={setPhone} className="form-control" type="text" placeholder="Phone Number" name="phone" value={userData.phone} />
        </div>
        <div className="mb-3">
          <label htmlFor="birthdate" className="form-label"><b>Date of Birth</b></label>
          <input onChange={setDateOfBirth} className="form-control" type="date" placeholder="Date of Birth" name="birthdate" required value={userData.dateOfBirth} />
        </div>
        <div className="mb-3">
          <label htmlFor="admitdate" className="form-label"><b>Admission Date</b></label>
          <input onChange={setAdmitDate} className="form-control" type="date" placeholder="Admission Date" name="admitdate" required value={userData.admissionDate} />
        </div>
        <div className="mb-3">
          <label htmlFor="psw" className="form-label"><b>Password</b></label>
          <input onChange={setPassword} className="form-control" type="password" placeholder="Password" name="psw" required value={userData.password} />
        </div>

        <div className="mb-3">
          <label htmlFor="confirm-psw" className="form-label"><b>Confirm Password</b></label>
          <input onChange={setConfirmPassword} className="form-control" type="password" placeholder="Confirm Password" name="confirm-psw" required value={userData.confirmPassword} />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}
