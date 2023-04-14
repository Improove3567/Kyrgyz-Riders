import React from "react";
import scss from "./DescWindow.module.scss"

interface DescI{
    index : boolean
    click : () => void
    title : undefined | string
}

const DescWindow:React.FC<DescI> = ({index,click,title}) => {
    return(
        <div className={index ? scss.modal : 'hideSelect'} onClick={click}>
            <div className={scss.main} onClick={event => event.stopPropagation() }>
                <p>{title}</p>
                <button onClick={click}>Close</button>
            </div>
        </div>
    )
}

export default DescWindow