import React, { useState } from "react";
import scss from "./SendARequest.module.scss";
import Divider from "../../Divider/Divider";
import { TourAboutTextArr } from "../../../constants/TourAboutText";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const SendARequest: React.FC = () => {
  const { addRequest } = useRequest();

  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const showText = React.useMemo(
    () =>
      TourAboutTextArr.map((item) => (
        <div className={scss.paragraph} key={item.id}>
          {item.title}
        </div>
      )),
    [TourAboutTextArr]
  );

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addRequest({
      name,
      lastName,
      email,
      number
    })
      .then(() => {
        router.push('/')
        toast.success("Тур был успешно создан!");
      });
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.header}>
        <Divider title="Send a request" variant="dark" />
      </div>
      <div className={scss.description}>{showText}</div>
      <form onSubmit={submit}>
        <div className={scss.inputs}>
          <input
            className={scss.input}
            type='text'
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={scss.input}
            type='text'
            placeholder="Last name"
            required
            onChange={(e) => setLastName(e.target.value)} />
          <input
            className={scss.input}
            type='text'
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)} />
          <input
            className={scss.input}
            type='number'
            placeholder="What`s up number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className={scss.button} type="submit">
          <p className={scss.text}>Send now</p>
        </button>
      </form>
    </div>
  );
};

export default SendARequest;
