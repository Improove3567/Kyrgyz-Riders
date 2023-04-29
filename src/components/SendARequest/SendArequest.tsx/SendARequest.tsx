import React, { useEffect, useState } from "react";
import scss from "./SendARequest.module.scss";
import Divider from "../../Divider/Divider";
import { TourAboutTextArr } from "../../../constants/TourAboutText";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import useTours from "../../../hooks/useTours";

interface ITourData {
  createdAt: object,
  image: string,
  subtitle: string,
  title: string,
  tourInfo: Array<object>
  requests: number
}

interface ITour {
  tour?: ITourData
}

const SendARequest: React.FC<ITour> = ({ tour }) => {
  const { addRequest } = useRequest();
  const router = useRouter();

  const { id }: any = router.query;

  useEffect(() => {
    setRequests(tour?.requests)
  }, [tour])

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [countOfRequests, setRequests] = useState<any>(tour?.requests);

  const data = {
    tourName: tour?.title,
    name: name,
    lastName: lastName,
    email: email,
    number: number
  }

  const onSendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await emailjs.send(
      "service_lzpnztn",
      "template_cqvcp2q",
      { ...data },
      "OejkDER052Yd01Tyj"
    ).then(() => {
      setEmail("")
      setLastName("")
      setName("")
      setNumber("")
    }, (error) => {
      alert("something went wrong!" + error);
    })

    await addRequest({
      name,
      lastName,
      email,
      number
    }).then(() => {
      router.push("/")
      toast.success("Запрос успешно отправлен!")
    })
  }

  const showText = React.useMemo(
    () =>
      TourAboutTextArr.map((item, i) => (
        <div className={scss.paragraph} key={`${item.id}_${i}`}>
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
