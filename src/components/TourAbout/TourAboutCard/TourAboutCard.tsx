import React, { FC, ReactNode, useMemo } from "react";
import scss from "./TourAboutCard.module.scss";
import Image from "next/image";
interface TourAboutCardProps {
  title?: string;
  text?: string | Array<string>;
  isSmall?: boolean;
}

const TourAboutCard: FC<TourAboutCardProps> = ({
  title,
  text,
  isSmall,
}) => {
  const id = 0

  const renderCards = useMemo(() => {
    if (!Array.isArray(text)) {
      return (
        <p>{text}</p>
      )
    } else {
      return (
        text.map((el, index) => (
          <li key={`${index}_${el}`}>{el}</li>
        ))
      )
    }
  }, [text])



  let cardClassName = scss.card
  if (isSmall) {
    cardClassName = scss.card_height
  }


  return (
    <div className={cardClassName}>
      <div className={scss.img}>
        <Image
          src="/images/calendar.svg"
          width={23}
          height={23}
          alt={"calendar"}
        />
        <p>{title}</p>
      </div>
      <div className={scss.card_bottom}>
        <div>
          <ul>
            {renderCards}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourAboutCard;
