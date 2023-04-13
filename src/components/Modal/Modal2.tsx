import React, { useState } from "react";
import scss from "./Mod.module.scss"

interface Modal2I{
    index : boolean
    click: () => void
}

const Modal2:React.FC<Modal2I> = ({index,click}) => {
    return(
        <div className={index ? scss.modal : 'hideSelect'}>
            <div className={scss.main}>
                <p>We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...We had a great time on 12 days best of Turkey.</p>
                <button onClick={click}>Close</button>
            </div>
        </div>
    )
}

export default Modal2