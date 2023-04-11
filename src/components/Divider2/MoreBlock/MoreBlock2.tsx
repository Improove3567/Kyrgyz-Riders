import React from "react";
import scss from "./MoreBlock2.module.scss"
import Image from "next/image";

interface MoreBlockProps {
  title?: string;
}

const MoreBlock2: React.FC<MoreBlockProps> = ({ title }) => {
  return (
    <div className={scss.moreBlock}>
      <p className={scss.subtitle}>{title}</p>
      <Image src="/images/Divider/Arrow.svg" alt="arrow" width={30} height={30} />
    </div>

  )
};

export default MoreBlock2;
