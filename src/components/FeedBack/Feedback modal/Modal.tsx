import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import scss from './Modal.module.scss'

interface ModalProps {
    desc: string;
}

const Modal: React.FC<ModalProps> = ({ desc }) => {
    const submit = () => {
        confirmAlert({
            message: desc,
            buttons: [
                {
                    label: "Close",
                },
            ]
        });
    };

    return <button className={scss.title} onClick={submit}>Read all</button>

}

export default Modal;