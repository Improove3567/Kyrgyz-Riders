import React from "react";
import scss from "./Divider.module.scss"
import Image from "next/image";

interface DividerProps {
  children?: string;
}

const Divider: React.FC<DividerProps> = ({ children }) => {
  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.content}>
          <p className={scss.title}>Sights</p>
          {
            children && (
              <div className={scss.moreBlock}>
                <p className={scss.subtitle}>{children}</p>
                <Image src="/images/Divider/Arrow.svg" alt="arrow" width={25} height={25} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
};

export default Divider;
