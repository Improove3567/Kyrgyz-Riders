import React, { SetStateAction, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { HeaderLinks } from "../../constatnts/Main/HeaderConsts";
import { useRouter } from "next/router";
import Image from "next/image";
import menu from '../../../public/assets/images/menu.png'
import close from '../../../public/assets/images/close.png'
import { footerConsts } from "../../constants/Footer";

interface IHeader {
  isMain?: boolean;
}

const Header: React.FC<IHeader> = ({ isMain = false }) => {
  const [isActive, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [isActive]);

  useEffect(() => {
   if (openModal){
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
   }else{
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
   }
  }, [openModal]);

  const click = () => setOpen(!open)
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
    <header id={scss.header} className={HeaderStyles}>
      <Link href="/">
        <h1>LOGO</h1>
      </Link>
      <nav>{renderLinks}</nav>
      <div></div>
      <div className={scss.dynamic_burger}>
        <div className={scss.title_main}>
          <p>Kyrgyz Riders</p>
        </div>
        <div className={scss.menu_burger}>
          <div onClick={click}>
            <Image src={menu} alt={"burger_menu"} className={scss.menuBurger} onClick={() => setOpenModal(true)} />
          </div>
        </div>
        <div className={!openModal ? scss.backNon : scss.back} onClick={() => setOpenModal(false)}>
          <div className={`${openModal == true ? scss.modal : ""} ${openModal == false ? scss.modalNon : ""}`}
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <div className={scss.burger_menu}>
              <div className={scss.menuX}>
                <Image src={close} alt={'close'} className={scss.menuBurger} onClick={() => setOpenModal(false)} />
              </div>
              <div className={scss.titleLink}>
                <div className={scss.pagesMain}>
                  <a href="/tours">Tours</a>
                  <hr className={scss.border} />
                  <a href="/sights">Sights</a>
                  <hr className={scss.border} />
                  <a href="/travel stories">Travel stories</a>
                  <hr className={scss.border} />
                  <a href="about us">About us</a>
                  <hr className={scss.border} />
                  <a href="blogNews">Blog & news</a>
                  <hr className={scss.border} />
                </div>
              </div>

              <div className={scss.btnCreate}>
                <p>Create your tour</p>
              </div>
              <div className={scss.dark_menu}>
                <p className={scss.pagess}>Follow us</p>
                <hr className={scss.followUS} />
                {
                  footerConsts.map((item) => (
                    <div className={scss.icons_footer}>
                      {item.img
                        ? item.img.map((el) => (
                          <Link key={el.id} href={el.link}>
                            <Image src={el.logo} width={21} height={12} alt="logo" />
                          </Link>
                        ))
                        : ""}
                    </div>
                  ))
                }
                <hr className={scss.followUs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
