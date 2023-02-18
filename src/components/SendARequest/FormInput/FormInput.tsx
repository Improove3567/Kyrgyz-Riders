import React, { ChangeEventHandler, useState } from "react";
import { Value } from "sass";
import { text } from "stream/consumers";
import scss from './FormInput.module.scss'

interface Form {
  placeholder: string;
  text: string
}

const FormInput: React.FC<Form> = ({ placeholder,text }) => {

    const [value,setValue] = useState(text)

    const change = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setValue(event.target.value)
    }

  return (
    <div className={scss.inputsSmall}>
      <input className={scss.input}  placeholder={placeholder} value={value} type='text' onChange={change} />
    </div>
  );
};

export default FormInput;
