import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {React, useState} from "react";


const AddCourse = () =>{
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        courseId: "",
        courseTitle:" ",
        department:" "
        
    })
    const [courseId, courseTitle, department] = course;
    const onInputChange = e =>{
        setCourse({...course, [e.target.courseId]:e.target.value, [e.target.courseTitle]:e.target.value, [e.target.department]:e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/", course);
        navigate('/CourseOfferings');
    }
    return (
        <div className="containger">
            <div className="w-75 mx-auto shadow p-5"></div>
            <h2 className="text-center mb-4">Add course</h2>
            <form onSubmit={e=>onSubmit(e)}></form>
            <div className="form-group">
                <input type ="text"
                className="form-control form-control-lg"
                placeholder="Enger Course Name"
                courseTitle="coufseTitle"
                value={courseTitle}
                onChange= {e =>onInputChange(e)}
                />

            </div>
            <div className="form-group">
                <input type ="text"
                className="form-control form-control-lg"
                placeholder="Enger Course Name"
                department="department"
                value={department}
                onChange= {e =>onInputChange(e)}
                />

            </div>
        </div>
    )
}
export default AddCourse;