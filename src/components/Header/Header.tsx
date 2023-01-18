import React from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.svg";
import Link from "next/link";

export interface IHeader {
  id: number;
  title: string;
  link: string;
}

const HeaderLinks: IHeader[] = [
  {
    id: 1,
    title: "Tours",
    link: "tours",
  },
  {
    id: 2,
    title: "Sights",
    link: "sights",
  },
  {
    id: 3,
    title: "Travel stories",
    link: "travelstories",
  },
  {
    id: 4,
    title: "About Us",
    link: "aboutus",
  },
  {
    id: 5,
    title: "Blog & news",
    link: "blognews",
  },
];
const MainLinks: IHeader[] = [
  {
    id: 1,
    title: "Create your tour",
    link: "createtour",
  },
  {
    id: 2,
    title: "Watch video",
    link: "watchvideo",
  },
  {
    id: 3,
    title: "Find Tours",
    link: "findtours",
  },
];
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
        <Image src={Logo} alt="LOgo"></Image>
        <nav>{renderLinks}</nav>
        <div></div>
      </header>
      <div className={scss.buttons}>{renderBtns}</div>
    </main>
  );
};

export default Header;
