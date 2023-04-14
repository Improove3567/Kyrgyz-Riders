import React from "react";
import scss from './Modal.module.scss'
interface ModalProps {
  change: (desc: string | undefined) => void
  desc: string | undefined
}

const Modal: React.FC<ModalProps> = ({ change, desc }) => {
  const onclick = () => {
    change(desc)
  }

  return <button className={scss.title} onClick={onclick}>Read all</button>
}
export default Modal;