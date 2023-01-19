import React from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { HeaderLinks, MainLinks } from "../../constatnts/Main";
import Image from "next/image";
import Logo from "../../assets/LOGO.svg";

export interface IHeader {
  id: number;
  title: string;
  link: string;
}

const Header: React.FC = () => {
  const renderLinks = React.useMemo(
    () =>
      HeaderLinks.map((item) => (
        <Link href={item.link} key={item.id}>
          {item.title}
        </Link>
      )),
    []
  );
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
      <header>
        <Image src={Logo} alt="Logo"></Image>
        <nav>{renderLinks}</nav>
        <div></div>
      </header>
      <div className={scss.buttons}>{renderBtns}</div>
    </main>
  );
};

export default Header;
