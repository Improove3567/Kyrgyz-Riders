import React from "react";
import FormInput from "../FormInput/FormInput";
import scss from "./SendARequest.module.scss";
import Divider from "../../Divider/Divider";
import { TourAboutTextArr } from "../../../constants/TourAboutText";

interface Inputs {
  placeholder: string;
  text:string;
  id: number;
}

const FormInputs: Inputs[] = [
  {
    placeholder: "First name",
    text: '',
    id: 1
  },
  {
    placeholder: "Last name",
    text:'',
    id:2
  },
  {
    placeholder: "E-mail",
    text: '',
    id:3
  },
  {
    placeholder: "What`s up number",
    text: '',
    id:4
  },
];

const SendARequest: React.FC = () => {
    
 

  const showText = React.useMemo(
    () =>
      TourAboutTextArr.map((item) => (
        <div className={scss.paragraph} key={item.id}>
          {item.title}
        </div>
      )),
    [TourAboutTextArr]
  );

  return (
    <div className={scss.wrapper}>
     <div className={scss.container}>
     <div className={scss.header}>
        <Divider title="Send a request" variant="dark" />
      </div>
      <div className={scss.description}>{showText}</div>
      <div className={scss.footer}>
        <div className={scss.inputs}>
          {FormInputs.map((el) => (
            <FormInput key={el.id} {...el}  />
          ))}
        </div>
        <div className={scss.button}>
          <p className={scss.text}>Send now</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default SendARequest;
