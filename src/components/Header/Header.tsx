import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { HeaderLinks } from "../../constatnts/Main/HeaderConsts";

export interface IHeader {
  id: number;
  title: string;
  link: string;
}

const Header: React.FC = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [isActive]);

  const renderLinks = React.useMemo(
    () =>
      HeaderLinks.map((item) => (
        <Link href={item.link} key={item.id}>
          {item.title}
        </Link>
      )),
    []
  );
  return (
    <header className={isActive ? scss.active : scss.nonActive}>
        <h1>Logo</h1>
        <nav>{renderLinks}</nav>
        <div></div>
      
    </header>
  );
};

export default Header;
