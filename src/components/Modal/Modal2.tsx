import React from "react";
import scss from "./Mod.module.scss"

interface Modal2I{
    index : boolean
    click : () => void
    title : undefined | string
}

const Modal2:React.FC<Modal2I> = ({index,click,title}) => {

    return(
        <div className={index ? scss.modal : 'hideSelect'}>
            <div className={scss.main}>
                <p>{title}</p>
                <button onClick={click}>Close</button>
            </div>
        </div>
    )
}

export default Modal2