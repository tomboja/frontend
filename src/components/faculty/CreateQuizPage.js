import { useState } from "react"
import Question from "../question/Question"

const CreateQuizPage = () => {
    const questionInitialState = {
        questNumber: '',
        label: '',
        totalScore: 0,
        studentScore: 0
    }
    const quizInitialState = {
        title: '',
        questions: [] 
    }
    const [questionCount, setQuestionCount] = useState(0)
    const [quizData, setQuizData] = useState(quizInitialState)
    const [questions, setQuestions] = useState([])

    const setTitle = (e) => {
        const title = e.target.value
        setQuizData({...quizData, title})
    }

    const addQuestion = (e) => {
        e.preventDefault()

        const newQuestion  = questionInitialState;
        newQuestion.questNumber = 'Q' + quizData.questions.length;
        setQuestions([...questions, newQuestion])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    
    return <div className="container">
        <form className='mt-3 border p-3' onSubmit={handleSubmit}>
            <h4>Create a New Quiz <button className="btn btn-prime">Save Quiz</button></h4>
            <div className='mb-3'>
                <label htmlFor='quiztitle' className='form-label'>
                    <b>Quiz Title</b>
                </label>
                <input
                onChange={setTitle}
                className='form-control'
                type='text'
                placeholder='Title'
                name='quiztitle'
                required
                value={quizData.title} />
            </div>
            <button className="btn btn-prime" onClick={addQuestion}>Add Question</button>
            <div className="mb-3">
                {questions.length > 0 ? questions.map(question => <Question key={question.questNumber} data={question} />) : ''}
            </div>
            
        </form>
    </div>
  }
  
  export default CreateQuizPage
  