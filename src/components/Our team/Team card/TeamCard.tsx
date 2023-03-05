import React from "react";
import scss from "./TeamCard.module.scss"
import Image from "next/image";

interface TeamCardProps {
  title: string,
  subtitle: string,
  image: string,
}

const TeamCard: React.FC<TeamCardProps> = ({ title, subtitle, image }) => {
  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <div className={scss.avatarContainer}>
          <hr />
          {/* eslint-disable-next-line no-use-before-define */}
          <img src={image} width={70} height={70} alt="avatar" />
          <hr />
        </div>
        <div className={scss.textContainer}>
          <p className={scss.title}>{title}</p>
          <p className={scss.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div className={scss.back}></div>

    </div>
  );
};

export default TeamCard;
