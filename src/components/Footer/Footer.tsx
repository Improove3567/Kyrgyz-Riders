import React from "react";
import scss from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { footerConsts } from "../../constants/Footer";

export interface IFooter {
  id: number;
  title: string;
  desc?: string;
  email?: string;
  hotline?: string;
  contact?: string;
  img?: IImage[];
}

interface IImage {
  id: number;
  logo: string;
  link: string;
}

const Footer: React.FC = () => {
  const [isActive, setActive] = React.useState(false);
  const render = React.useMemo(
    () =>
      footerConsts.map((item) => (
        <div key={item.id} className={scss.card}>
          <h1>{item.title}</h1>
          {item.desc && (
            <>
              <p className={isActive ? scss.descAc : scss.desc}>
                {item.desc && item.desc + " " && item.desc.length > 129
                  ? `${item.desc.substring(0, 129)}...`
                  : item.desc}
                {item.desc && (
                  <Link
                    href="/aboutus"
                    className={scss.read}
                    id={scss.hidenBefor}
                  >
                    Read More
                  </Link>
                )}
              </p>
              {item.desc && (
                <Link href="/aboutus" className={scss.read} id={scss.hiden}>
                  Read More
                </Link>
              )}
            </>
          )}

          {item.email && (
            <div className={scss.second}>
              <div>
                <p> Email: </p>
                {item.email && item.email}
              </div>
              <div>
                <p> Hotline: </p>
                {item.hotline && item.hotline}
              </div>
              <div>
                <p>Contact form:</p>
                {item.contact && item.contact}
              </div>
            </div>
          )}
          <div className={scss.thirth}>
            {item.img
              ? item.img.map((el) => (
                <Link target="_blank" key={el.id} href={el.link}>
                  <Image src={el.logo} width={20} height={20} alt="logo" />
                </Link>
              ))
              : ""}
          </div>
        </div>
      )),
    [isActive]
  );
  return (
    <>
      <footer className={scss.footer}>{render}</footer>
      <div className={scss.underFooter}>
        <p className={scss.rights}>@ 2023 Kyrgyz Riders. All rights reserved</p>
        <p>Created by @SolidDevs</p>
      </div>
    </>
  );
};

export default Footer;
