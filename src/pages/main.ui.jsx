import { useState } from 'react'
import '../styles/main.css'



export const Main = () => {
    const [label, setLabel] = useState(0)

    const add = () => {
        label > 99999 ? alert('You have too much. Bəlkə biraz yavaşıyax?') : setLabel(label + 1)
    }

    const subtract = () => {
        label < 1 ? alert("It cannot be negative.") : setLabel(label - 1)
    }

    const multiplyBy = (number) => {
        label > 50000 ? alert('You have too much. Bəlkə biraz yavaşıyax?') : setLabel(label * number)
    }



    return (
        <div className='container'>
            <h2>{label}</h2>
            <div className='btns'>
                <button className='btn1' onClick={() => subtract()}>-</button>
                <button className='btn2' onClick={() => add()}>+</button>
                <button className='btn3' onClick={() => multiplyBy(2)}>2x</button>
                <button className='btn3' onClick={() => multiplyBy(3)}>3x</button>
            </div>
        </div>
    )
}















// const [isClicked, setIsClicked] = useState(false)

// return (
//     <div className='container'>
//         <button onClick={() => setIsClicked(!isClicked)}>Toggle</button>
//         {isClicked && <div>Surprise 🙈</div>}
//     </div>
// )