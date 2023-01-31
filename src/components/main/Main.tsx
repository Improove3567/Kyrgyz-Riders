import React from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";

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
      <div className="container">
        <div className={scss.buttons}>{renderBtns}</div>
      </div>
    </main>
  );
};

export default Main;
