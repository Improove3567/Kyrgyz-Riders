import React from "react";
import scss from "./TeamCard.module.scss"
import Link from "next/link";

interface TeamCardProps {
  name?: string,
  lastName?: string,
  image?: string,
  speciality?: string,
  tid?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, lastName, speciality, image, tid }) => {
  return (
    <Link href={`/our-team/${tid}`}>
      <div className={scss.container}>
        <div className={scss.wrapper}>
          <div className={scss.avatarContainer}>
            <hr />
            {/* eslint-disable-next-line no-use-before-define */}
            <img src={image} width={70} height={70} alt="avatar" />
            <hr />
          </div>
          <div className={scss.textContainer}>
            <p className={scss.title}>{name + " " + lastName}</p>
            <p className={scss.subtitle}>{speciality}</p>
          </div>
        </div>
        <div className={scss.back}></div>
      </div>
    </Link>
  );
};

export default TeamCard;
