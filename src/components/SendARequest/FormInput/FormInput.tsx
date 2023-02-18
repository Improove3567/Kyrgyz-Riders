import React, { ChangeEventHandler, useState } from "react";
import { Value } from "sass";
import { text } from "stream/consumers";
import scss from './FormInput.module.scss'

interface Form {
  placeholder: string;
  text: string
  id: number
}

const FormInput: React.FC<Form> = ({ placeholder,text,id }) => {

    const [value,setValue] = useState(text)

    const change = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setValue(event.target.value)
    }
    const click = ():void => {
      if (id == 4){
        setValue('+996')
      }

    }

  return (
    <div className={scss.inputsSmall}>
      <input className={scss.input} onClick={click} key={id} placeholder={placeholder} value={value} type='text' onChange={change} />
    </div>
  );
};

export default FormInput;
