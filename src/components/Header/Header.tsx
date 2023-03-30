import React, { useEffect, useState, useCallback } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { HeaderLinks } from "../../constatnts/Main/HeaderConsts";
import { useRouter } from "next/router";

interface IHeader {
  isMain?: boolean;
}

const Header: React.FC<IHeader> = ({ isMain = false }) => {
  const [isActive, setActive] = useState(false);
  let activeLink = isActive ? scss.activeLink : "";
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const renderLinks = React.useMemo(
    () =>
      HeaderLinks.map((item) => (
        <Link
          className={currentRoute == `/${item.link}` ? scss.activeLink : ""}
          href={'/' + item.link}
          key={item.id}
        >
          {item.title}
        </Link>
      )),
    []
  );

  let HeaderStyles = isActive ? scss.active : scss.nonActive;

  if (!isMain) {
    HeaderStyles = isActive ? scss.renderActive : scss.renderNonActive;
  }

  return (
    <header className={HeaderStyles}>
      <Link href="/">
        <h1>LOGO</h1>
      </Link>
      <nav>{renderLinks}</nav>
      <div></div>
    </header>
  );
};

export default React.memo(Header);