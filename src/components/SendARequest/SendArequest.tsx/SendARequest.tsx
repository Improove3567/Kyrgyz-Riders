import React, { useState } from "react";
import scss from "./SendARequest.module.scss";
import Divider from "../../Divider/Divider";
import { TourAboutTextArr } from "../../../constants/TourAboutText";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

const SendARequest: React.FC = () => {
  const { addRequest } = useRequest();

  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");


  const onSendEmail = async (e: { preventDefault: () => void; }) => {

    e.preventDefault()
    const data = {
      name: name,
      lastName: lastName,
      email: email,
      number: number
    }

    await addRequest({
      name,
      lastName,
      email,
      number
    }).then(() => {
      router.push("/")
      toast.success("Тур был успешно создан!")
    })

    await emailjs.send(
      "service_lcl44ys",
      "template_ea4180q",
      { ...data },
      "l0rnMR3YRtcGPvMux"
    ).then(() => {
      setEmail("")
      setLastName("")
      setName("")
      setNumber("")
    }, (error) => {
      console.log(error);
    })
  }


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
      <div className="container">
        <div className={scss.header}>
          <Divider title="Send a request" variant="dark" />
        </div>
        <div className={scss.description}>
          <div className={scss.text_container}>{showText}</div>
        </div>
        <form onSubmit={(e) => onSendEmail(e)} className={scss.form}>
          <div className={scss.inputs}>
            <input
              className={scss.input}
              type='text'
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />
            <input
              className={scss.input}
              type='text'
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
            <input
              className={scss.input}
              type='text'
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input
              className={scss.input}
              type='number'
              placeholder="What`s up number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button className={scss.button} type="submit">
            <p className={scss.text}>Send now</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendARequest;
