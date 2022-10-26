import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validatePassword, validateConfirmPassword, validateDateOfBirth, validatePhone, validateUserId, validateEmail } from '../../utils/formUtils'
import { saveUser } from '../../reducers/userReducer'
import { ADDMISSION_DATE, CONFIRM_PASSWORD, DATE_OF_BIRTH, EMAIL, ERR_CONFIRM_PASS, ERR_DOB, ERR_PASSWORD, ERR_PASS_FORMAT, ERR_PHONE, ERR_USER_ID, FIRST_NAME, LAST_NAME, PASSWORD, PHONE_NUMBER, REGISTER, STUDENT_REGISTRATION_TXT, USER_ID } from '../../texts'
import { createUser } from '../../api/loginAPIs'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const initialState = {
    firstName: '',
    lastName: '',
    userId: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    admissionDate: '',
    password: '',
    confirmPassword: ''
  }
  
  const [userData, setUserData] = useState(initialState)
  const [errors, setErrors] = useState([])

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

  const setUserId = (e) => {
    const userId = e.target.value
    setUserData((oldData) => {
      return { ...oldData, userId }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = []

    if (!validateEmail(userData.email)) {
      errs.push(ERR_USER_ID)
      //setErrors([...errors, "User ID should must be 6 digits"])
    }
    
    if (!validateUserId(userData.userId)) {
      errs.push(ERR_USER_ID)
      //setErrors([...errors, "User ID should must be 6 digits"])
    }
    
    if (!validateDateOfBirth(userData.dateOfBirth)) {
      errs.push(ERR_DOB)
      //setErrors([...errors, "DOB Error: User should be at least 15"])
    }

    if (!validatePhone(userData.phone)) {
      errs.push(ERR_PHONE)
      //setErrors([...errors, "Invalid Phone number: Non-numeric characters detected"])
    }

    if (!validatePassword(userData.password)) {
      errs.push(ERR_PASS_FORMAT)
      //setErrors([...errors, "Password rules: 6-16 chars including 1 number & 1 special char!"])
    }
    
    if (!validateConfirmPassword(userData.password, userData.confirmPassword)) {
      errs.push(ERR_CONFIRM_PASS)
      //setErrors([...errors, "Passwords do not match!"])
    }

    setErrors([...errors, ...errs])
    const result = await createUser(userData)
    dispatch(saveUser(userData))
    setUserData(initialState)
  }

  return (
    <div className='container'>
      <h4>{STUDENT_REGISTRATION_TXT}</h4>
      <form action='' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label
            htmlFor='fname'
            className='form-label'><b>{FIRST_NAME}</b></label>
          <input
            onChange={setFirstName}
            className='form-control'
            type='text'
            placeholder={FIRST_NAME}
            name='fname'
            required
            value={userData.firstName} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='lname'
            className='form-label'><b>{LAST_NAME}</b></label>
          <input
            onChange={setLastName}
            className='form-control'
            type='text'
            placeholder={LAST_NAME}
            name='lname'
            required
            value={userData.lastName} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='userId'
            className='form-label'><b>{USER_ID}</b></label>
          <input
            onChange={setUserId}
            className='form-control'
            type='text'
            placeholder={USER_ID}
            name='userId'
            required
            value={userData.userId} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='form-label'><b>{EMAIL}</b></label>
          <input
            onChange={setEmail}
            className='form-control'
            type='email'
            placeholder={EMAIL}
            name='email'
            required
            value={userData.email} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='phone'
            className='form-label'><b>{PHONE_NUMBER}</b></label>
          <input
            onChange={setPhone}
            className='form-control'
            type='text'
            placeholder={PHONE_NUMBER}
            name='phone'
            value={userData.phone} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='birthdate'
            className='form-label'><b>{DATE_OF_BIRTH}</b></label>
          <input
            onChange={setDateOfBirth}
            className='form-control'
            type='date'
            placeholder={DATE_OF_BIRTH}
            name='birthdate'
            required
            value={userData.dateOfBirth} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='admitdate'
            className='form-label'><b>{ADDMISSION_DATE}</b></label>
          <input
            onChange={setAdmitDate}
            className='form-control'
            type='date'
            placeholder={ADDMISSION_DATE}
            name='admitdate'
            required
            value={userData.admissionDate} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='psw'
            className='form-label'><b>{PASSWORD}</b></label>
          <input
            onChange={setPassword}
            className='form-control'
            type='password'
            placeholder={PASSWORD}
            name='psw'
            required
            value={userData.password} />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='confirm-psw'
            className='form-label'><b>{CONFIRM_PASSWORD}</b></label>
          <input
            onChange={setConfirmPassword}
            className='form-control'
            type='password'
            placeholder={CONFIRM_PASSWORD}
            name='confirm-psw'
            required
            value={userData.confirmPassword} />
        </div>
        {errors.length > 0 ? <ul>{errors.map(err => <li key={err} className='error_message'>{err}</li>)}</ul> : ''}
        <button
          type='submit'
          className='btn btn-prime'>{REGISTER}</button>
      </form>
    </div>
  )
}

export default RegistrationPage
