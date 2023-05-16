import { useState } from 'react'
import '../styles/footer.css'

export const Footer = (props) => {
    const [isClicked, setIsClicked] = useState(true)

    return (
        <div className='footer'>
           {isClicked && <div className='footerDes' onClick={() => setIsClicked(!isClicked)}>{props.footnote}</div>}
        </div>
    )
}