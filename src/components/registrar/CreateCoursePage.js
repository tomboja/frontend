import { useState } from "react"
import { CREATE_COURSE_CREDHOURS, CREATE_COURSE_TITLE, CREATE_COURSE_HEADING, CREATE_COURSE_ID, CREATE_COURSE_DEPT, CREATE_COURSE_BUTTON, CREATE_COURSE_NUMBER, CREATE_COURSE_CODE } from "../../texts"

const CreateCoursePage = () => {
    const initialState = {
        num: '',
        title: '',
        creditHours: 0,
        department: ''
    }
    const [courseData, setCourseData] = useState(initialState)

    const setNum = (e) => {
        const num = e.target.value
        setCourseData({...courseData, num})
    }
    
    const setTitle = (e) => {
        const title = e.target.value
        setCourseData({...courseData, title})
    }

    const setCreditHours = (e) => {
        const creditHours = e.target.value
        setCourseData({...courseData, creditHours})
    }

    const setDepartment = (e) => {
        const department = e.target.value
        setCourseData({...courseData, department})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <h4>{CREATE_COURSE_HEADING}</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label
                        htmlFor='cnum'
                        className='form-label'><b>{CREATE_COURSE_CODE}</b>
                    </label>
                    <input
                    onChange={setNum}
                    className='form-control'
                    type='text'
                    placeholder={CREATE_COURSE_CODE}
                    name='cnum'
                    required
                    value={courseData.num} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='title'
                        className='form-label'><b>{CREATE_COURSE_TITLE}</b>
                    </label>
                    <input
                    onChange={setTitle}
                    className='form-control'
                    type='text'
                    placeholder={CREATE_COURSE_TITLE}
                    name='title'
                    required
                    value={courseData.title} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='credhours'
                        className='form-label'><b>{CREATE_COURSE_CREDHOURS}</b>
                    </label>
                    <input
                    onChange={setCreditHours}
                    className='form-control'
                    type='number'
                    placeholder={CREATE_COURSE_CREDHOURS}
                    name='credhours'
                    required
                    value={courseData.creditHours} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='dept'
                        className='form-label'><b>{CREATE_COURSE_DEPT}</b>
                    </label>
                    <input
                    onChange={setDepartment}
                    className='form-control'
                    type='text'
                    placeholder={CREATE_COURSE_DEPT}
                    name='dept'
                    required
                    value={courseData.department} />
                </div>
                {}
                <button type='submit' className='btn btn-prime'>{CREATE_COURSE_BUTTON}</button>
            </form>
        </div>
    )
}

export default CreateCoursePage