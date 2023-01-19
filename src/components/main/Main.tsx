import React from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Header from "../Header/Header";

const Main: React.FC = () => {
  const renderBtns = React.useMemo(
    () =>
      MainLinks.map((item) => (
        <Link href={item.link} key={item.id}>
          {item.title}
        </Link>
      )),
    []
  );
  return (
    <main className={scss.main}>
      <Header />
      <div className={scss.buttons}>{renderBtns}</div>
    </main>
  );
};

export default Main;
