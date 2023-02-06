import React from "react";
import scss from "./MoreBlock.module.scss"
import Image from "next/image";

interface MoreBlockProps {
  title: string;
}

const MoreBlock: React.FC<MoreBlockProps> = ({ title }) => {
  return (
    <div className={scss.moreBlock}>
      <p className={scss.subtitle}>{title}</p>
      {/* <Image src="/images/Divider/Arrow.svg" alt="arrow" width={25} height={25} /> */}
      <div className={scss.arrow}></div>
    </div>

  )
};

export default MoreBlock;
