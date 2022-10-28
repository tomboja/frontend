import { useState } from "react"
import Answer from "./Answer";

const Question = ({data}) => {
    // const initialState = {
    //     questNumber: '',
    //     label: '',
    //     totalScore: 0,
    //     studentScore: 0,
    //     correctAnswers: [],
    //     incorrectAnswers: [],
    //     studentAnswers: []
    // }
    const [questionData, setQuestionData] = useState(data);
    const [answers, setAnswers] = useState([])

    const setQuestNumber = (e) => {
        const questNumber = e.target.value
        setQuestionData({...questionData, questNumber})
    }

    const setLabel = (e) => {
        const label = e.target.value
        setQuestionData({...questionData, label})
    }

    const setTotalScore = (e) => {
        const totalScore = e.target.value
        setQuestionData({...questionData, totalScore})
    }

    const addAnswer = (e) => {
        e.preventDefault()

        setAnswers([...answers, "answer"])
    }
    
    return (
    <div className="card mt-2">
        <div className="card-body">
            <div className="mb-3">
                <label
                htmlFor='questnum'
                className='form-label'><b>Question Number</b></label>
                <input onChange={setQuestNumber} id="questnum" className="form-control" type="text" placeholder="Number" value={questionData.questNumber} />
            </div>
            <div className="mb-3">
                <label
                htmlFor='label'
                className='form-label'><b>Question</b></label>
                <input onChange={setLabel} id="label" className="form-control" type="text" placeholder="Question?" value={questionData.label} />
            </div>
            <div className="mb-3">
                <label
                htmlFor='totalscore'
                className='form-label'><b>Total Score</b></label>
                <input onChange={setTotalScore} id="totalscore" className="form-control" type="number" placeholder="Total Score" value={questionData.totalScore} />
            </div>
            <button onClick={addAnswer} className="btn btn-prime">Add Answer</button>
        </div>
        <div class="card-footer text-muted">
            <ul class="list-group list-group-flush">
                {answers.map((answer, index) => <Answer key={index} />)}
            </ul>
            

        </div>
    </div>)
}

export default Question