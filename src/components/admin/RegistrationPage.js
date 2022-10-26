import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validatePassword, validateConfirmPassword, validateDateOfBirth, validatePhone, validateZip, validateEmail } from '../../utils/formUtils'
import { saveUser } from '../../reducers/userReducer'
import { ADDMISSION_DATE, CITY, CONFIRM_PASSWORD, DATE_OF_BIRTH, EMAIL, ERR_CONFIRM_PASS, ERR_DOB, ERR_PASS_FORMAT, ERR_PHONE, ERR_USER_ID, ERR_ZIP, FIRST_NAME, LAST_NAME, PASSWORD, PHONE_NUMBER, REGISTER, ROLE, STATE, STREET, STUDENT_REGISTRATION_TXT, ZIP } from '../../texts'
import { createUser } from '../../api/userApi'
import { roleWithoutAdmin } from '../../mapping/dataMapping'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const initialState = {
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    street: '',
    zip: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    admissionDate: '',
    // password: '',
    // confirmPassword: '',
    role: roleWithoutAdmin[0].value
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

  // const setUserId = (e) => {
  //   const userId = e.target.value
  //   setUserData((oldData) => {
  //     return { ...oldData, userId }
  //   })
  // }

  const setCity = (e) => {
    const city = e.target.value
    setUserData({...userData, city})
  }

  const setState = (e) => {
    const state = e.target.value
    setUserData({...userData, state})
  }

  const setStreet = (e) => {
    const street = e.target.value
    setUserData({...userData, street})
  }

  const setZip = (e) => {
    const zip = e.target.value
    setUserData({...userData, zip})
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

  // const setPassword = (e) => {
  //   const password = e.target.value;
  //   setUserData((oldData) => {
  //     return { ...oldData, password }
  //   })
  // }

  // const setConfirmPassword = (e) => {
  //   const confirmPassword = e.target.value;
  //   setUserData((oldData) => {
  //     return { ...oldData, confirmPassword }
  //   })
  // }

  const setRole = (e) => {
    const role = e.target.value
    setUserData((oldData) => {
      return { ...oldData, role }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = []

    if (!validateEmail(userData.email)) {
      errs.push(ERR_USER_ID)
    }
    
    // if (!validateUserId(userData.userId)) {
    //   errs.push(ERR_USER_ID)
    // }
    
    if (!validateZip(userData.zip)) {
      errs.push(ERR_ZIP)
    }

    if (!validateDateOfBirth(userData.dateOfBirth)) {
      errs.push(ERR_DOB)
    }

    if (!validatePhone(userData.phone)) {
      errs.push(ERR_PHONE)
    }

    // if (!validatePassword(userData.password)) {
    //   errs.push(ERR_PASS_FORMAT)
    // }
    
    // if (!validateConfirmPassword(userData.password, userData.confirmPassword)) {
    //   errs.push(ERR_CONFIRM_PASS)
    // }

    const body = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      admissionDate: userData.admissionDate,
      dob: userData.dateOfBirth,
      role: userData.role,
      phone_number: userData.phone,
      address: {
        street: userData.street,
        city: userData.city,
        zip: userData.zip,
        state: userData.state
      }
    }
    setErrors([...errors, ...errs])
    const result = await createUser(body)
    dispatch(saveUser(userData))
    setUserData(initialState)
  }

  return (
    <div className='container'>
      <h4>{STUDENT_REGISTRATION_TXT}</h4>
      <form onSubmit={handleSubmit}>
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
            htmlFor='city'
            className='form-label'><b>{CITY}</b></label>
          <input
            onChange={setCity}
            className='form-control'
            type='text'
            placeholder={CITY}
            name='city'
            required
            value={userData.city} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='state'
            className='form-label'><b>{STATE}</b></label>
          <input
            onChange={setState}
            className='form-control'
            type='text'
            placeholder={STATE}
            name='state'
            required
            value={userData.state} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='street'
            className='form-label'><b>{STREET}</b></label>
          <input
            onChange={setStreet}
            className='form-control'
            type='text'
            placeholder={STREET}
            name='street'
            required
            value={userData.street} />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='zip'
            className='form-label'><b>{ZIP}</b></label>
          <input
            onChange={setZip}
            className='form-control'
            type='text'
            placeholder={ZIP}
            name='zip'
            required
            value={userData.zip} />
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
            htmlFor='email'
            className='form-label'><b>{ROLE}</b></label>
          <select
            onChange={setRole}
            className='form-select'
            name='role'
            value={userData.role}>
            {roleWithoutAdmin.map(role => <option
              key={role.label}
              value={role.value}>{role.label}</option>)}
          </select>
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
        {/* <div className='mb-3'>
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
        </div> */}

        {/* <div className='mb-3'>
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
        </div> */}
        {errors.length > 0 ? <ul>{errors.map(err => <li key={err} className='error_message'>{err}</li>)}</ul> : ''}
        <button
          type='submit'
          className='btn btn-prime'>{REGISTER}</button>
      </form>
    </div>
  )
}

export default RegistrationPage
