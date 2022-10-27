import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validateDateOfBirth, validatePhone, validateZip, validateEmail } from '../../utils/formUtils'
import { saveUser } from '../../reducers/userReducer'
import { ADDMISSION_DATE, CITY, DATE_OF_BIRTH, DEPARTMENT, EMAIL, ERR_DOB, ERR_PHONE, ERR_USER_ID, ERR_ZIP, FIRST_NAME, HIRE_DATE, LAST_NAME, PHONE_NUMBER, REGISTER, ROLE, SALARY, STATE, STREET, STUDENT_REGISTRATION_TXT, ZIP } from '../../texts'
import { createUser } from '../../api/userApi'
import { roleWithoutAdmin } from '../../mapping/dataMapping'
import { STUDENT_USER } from '../../consts'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const initialState = {
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    street: '',
    zip: '',
    salary: 0,
    hireDate: '',
    department: '',
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

  const setRole = (e) => {
    const role = e.target.value
    setUserData((oldData) => {
      return { ...oldData, role }
    })
  }

  const setSalary = (e) => {
    const salary = e.target.value
    setUserData((oldData) => {
      return { ...oldData, salary }
    })
  }

  const setHireDate = (e) => {
    const hireDate = e.target.value
    setUserData((oldData) => {
      return { ...oldData, hireDate }
    })
  }

  const setDepartment = (e) => {
    const department = e.target.value
    setUserData((oldData) => {
      return { ...oldData, department }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = []

    if (!validateEmail(userData.email)) {
      errs.push(ERR_USER_ID)
    }
    
    if (!validateZip(userData.zip)) {
      errs.push(ERR_ZIP)
    }

    if (!validateDateOfBirth(userData.dateOfBirth)) {
      errs.push(ERR_DOB)
    }

    if (!validatePhone(userData.phone)) {
      errs.push(ERR_PHONE)
    }

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
    if (userData.role !== STUDENT_USER) {
      body.salary = userData.salary
      body.hireDate = userData.hireDate
      body.department = userData.department
    }
    setErrors([...errors, ...errs])
    const result = await createUser(body)
    dispatch(saveUser(userData))
    setUserData(initialState)
  }

  const extraFields = (
  <>
    <div className='mb-3'>
      <label
        htmlFor='salary'
        className='form-label'><b>{SALARY}</b></label>
      <input
        onChange={setSalary}
        className='form-control'
        type='number'
        placeholder={SALARY}
        name='salary'
        value={userData.salary} />
    </div>
    <div className='mb-3'>
      <label
        htmlFor='hireDate'
        className='form-label'><b>{HIRE_DATE}</b></label>
      <input
        onChange={setHireDate}
        className='form-control'
        type='date'
        placeholder={HIRE_DATE}
        name='hireDate'
        value={userData.hireDate} />
    </div>
    <div className='mb-3'>
      <label
        htmlFor='department'
        className='form-label'><b>{DEPARTMENT}</b></label>
      <input
        onChange={setDepartment}
        className='form-control'
        type='text'
        placeholder={DEPARTMENT}
        name='department'
        value={userData.department} />
    </div>
  </>)

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
        {userData.role === STUDENT_USER ? '' : extraFields}
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
