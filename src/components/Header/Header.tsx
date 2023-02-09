import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { HeaderLinks } from "../../constatnts/Main/HeaderConsts";

interface IHeader {
  isMain?: boolean;
}

const Header: React.FC<IHeader> = ({ isMain }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 50) {
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
    [HeaderLinks]
  );

  let HeaderStyles = isActive ? scss.active : scss.nonActive;

  if (isMain === false) {
    HeaderStyles = isActive ? scss.renderActive : scss.renderNonActive;
  }

  return (
    <header className={HeaderStyles}>
      <h1>Logo</h1>
      <nav>{renderLinks}</nav>
      <div></div>
    </header>
  );
};

export default Header;
