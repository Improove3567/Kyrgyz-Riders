import React from "react";
import { confirmAlert } from "react-confirm-alert";
import scss from './Modal.module.scss'
import "react-confirm-alert/src/react-confirm-alert.css";


interface ModalProps {
    click : () => void
}

const Modal: React.FC<ModalProps> = ({ click }) => {

    return <button className={scss.title} onClick={click}>Read all</button>

}

export default Modal;