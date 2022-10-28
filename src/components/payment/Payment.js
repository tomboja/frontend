import { useRef, useState } from "react"
import { CARD_NUMBER, CARD_NAME, CARD_PIN, MAKE_PAYMENT, PAYMENT_BUTTON, CARD_EXPIRE_DATE } from "../../texts"
import { courseLevels } from "../../mapping/dataMapping"
import '../../resources/styles/styles.css'
import { makePayment } from "../../api/paymentAPIs"
import { useLocation } from 'react-router-dom'


const Payment = () => {
    const initialState = {
        cardNumber: '',
        title: '',
        creditHours: 0,
        level: courseLevels[0].value
    }
    const [cardData, setCardData] = useState(initialState)
    const [errors, setError] = useState([])
    const cardNumberRef = useRef()

    const location = useLocation()
    const { from } = location.state

    const setCardNumber = (e) => {
        const val = e.target.value
        setCardData({ ...cardData, cardNumber: val })
    }

    const setName = (e) => {
        const name = e.target.value
        setCardData({ ...cardData, name })
    }

    const setPin = (e) => {
        const pin = e.target.value
        setCardData({ ...cardData, pin })
    }

    const setExpiry = (e) => {
        const expiry = e.target.value
        setCardData({ ...cardData, expiry })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const reqBody = {
            cardNumber: cardData.cardNumber,
            name: cardData.name,
            pin: cardData.pin,
            expiry: cardData.expiry,
            enrolmentId: from
        }
        const result = await makePayment(reqBody)
    }

   
    return (
        <div className="container">
            <h4>{MAKE_PAYMENT}</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label
                        htmlFor='cid'
                        className='form-label'><b>{CARD_NUMBER}</b>
                    </label>
                    {/* <p>{from}</p> */}
                    <input type='hidden' name='enrolmentId' value={from}/>
                    <input
                        onChange={setCardNumber}
                        className='form-control'
                        type='number'
                        min="-999999999999999" 
                        max="999999999999"
                        placeholder={CARD_NUMBER}
                        name='cid'
                        required
                        ref={cardNumberRef}
                        value={cardData.cardNumber} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='name'
                        className='form-label'><b>{CARD_NAME}</b>
                    </label>
                    <input
                        onChange={setName}
                        className='form-control'
                        type='text'
                        placeholder={CARD_NAME}
                        name='title'
                        required
                        value={cardData.Name} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='credhours'
                        className='form-label'><b>{CARD_PIN}</b>
                    </label>
                    <input
                        onChange={setPin}
                        className='form-control'
                        type='number'
                        maxLength={3}
                        placeholder={CARD_PIN}
                        name='pin'
                        required
                        value={cardData.pin} />
                </div>
                <div className='mb-3'>
                    <label
                        htmlFor='expiry'
                        className='form-label'><b>{CARD_EXPIRE_DATE}</b>
                    </label>
                    <input
                        onChange={setExpiry}
                        className='form-control'
                        type='number'
                        min="-999" 
                        max="9999"
                        placeholder={CARD_EXPIRE_DATE}
                        name='expiry'
                        required
                        value={cardData.expiry} />
                
                </div>
                { }
                <button type='submit' className='btn btn-prime'>{PAYMENT_BUTTON}</button>
            </form>
        </div>
    )
}

export default Payment