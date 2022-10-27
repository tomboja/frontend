import React from "react"
import { useRef, useState } from "react"
//import { COURSE_NUMBER, COURSE_TITLE, COURSE_CREDHOURS, COURSE_LEVEL, COURSE_HEADING, COURSE_EDIT_BUTTON, COURSE_BUTTON } from "../../texts"
import { courseLevels } from "../../mapping/dataMapping"
import '../../resources/styles/styles.css'
import { updateCourse } from "../../api/courseAPIs"
import { COURSE_CREDHOURS, COURSE_NUMBER, COURSE_TITLE, COURSE_LEVEL ,COURSE_EDIT_BUTTON, COURSE_HEADING} from "../../texts"

// const CourseUpdate = (props) => {

//   return <div className="container">
//     <p><span className="coursedetails">{COURSE_ID}</span>: {props.updateCourse.courseNumber}</p>
//     <p><span className="coursedetails">{COURSE_TITLE}</span>: {props.updateCourse.courseTitle}</p>
//     <p><span className="coursedetails">{COURSE_LEVEL}</span>: {props.updateCourse.level}</p>
//     <p><span className="coursedetails">{COURSE_DEPARTMENT}</span>: {props.updateCourse.credit}</p>
//   </div>
// }

const CourseUpdate = (props) => {
    const initialState = {
        courseNumber: props.updateCourse.courseNumber,
        title: props.updateCourse.title,
        creditHours: props.updateCourse.credit,
        level: props.updateCourse.level
    }
    const [courseData, setCourseData] = useState(initialState)
    const [errors, setError] = useState([])
    const courseNumberRef = useRef()

    const setCourseNumber = (e) => {
        const val = e.target.value
        setCourseData({ ...courseData, courseNumber: val })
    }

    const setTitle = (e) => {
        const title = e.target.value
        setCourseData({ ...courseData, title })
    }

    const setCreditHours = (e) => {
        const creditHours = e.target.value
        setCourseData({ ...courseData, creditHours })
    }

    const setCourseLevel = (e) => {
        const level = e.target.value
        setCourseData({ ...courseData, level })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const reqBody = {
            courseNumber: courseData.courseNumber,
            title: courseData.title,
            level: courseData.level,
            credit: courseData.creditHours
        }
        const result = await updateCourse(reqBody)
    }

    return (
        <div className="container">
            <h4>{COURSE_HEADING}</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label
                        htmlFor='cid'
                        className='form-label'><b>{COURSE_NUMBER}</b>
                    </label>
                    <input
                        onChange={setCourseNumber}
                        className='form-control'
                        type='text'
                        placeholder={COURSE_NUMBER}
                        name='cid'
                        required
                        ref={courseNumberRef}
                        value={courseData.courseNumber} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='title'
                        className='form-label'><b>{COURSE_TITLE}</b>
                    </label>
                    <input
                        onChange={setTitle}
                        className='form-control'
                        type='text'
                        placeholder={COURSE_TITLE}
                        name='title'
                        required
                        value={courseData.title} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='credhours'
                        className='form-label'><b>{COURSE_CREDHOURS}</b>
                    </label>
                    <input
                        onChange={setCreditHours}
                        className='form-control'
                        type='text'
                        placeholder={COURSE_CREDHOURS}
                        name='credhours'
                        required
                        value={courseData.creditHours} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='dept'
                        className='form-label'><b>{COURSE_LEVEL}</b>
                    </label>
                    <select
                        onChange={setCourseLevel}
                        className='form-select'
                        name='course_level'
                        value={courseData.level}>
                        {courseLevels.map(level => <option
                            key={level.label}
                            value={level.value}>{level.label}</option>)}
                    </select>
                </div>
                { }
                <button type='submit' className='btn btn-prime'>{COURSE_EDIT_BUTTON}</button>
            </form>
        </div>
    )
}
export default CourseUpdate
