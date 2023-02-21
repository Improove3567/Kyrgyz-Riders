import React, { FC, ReactNode, useMemo } from "react";
import scss from "./TourAboutCard.module.scss";
import Image from "next/image";
interface TourAboutCardProps {
  title?: string;
  text?: textProps[];
  id: number
}

interface textProps {
  description?: string;
  arrayText?: Tour[];
}
interface Tour {
  description?: string;
}
const TourAboutCard: FC<TourAboutCardProps> = ({
  title,
  text,
  id
}) => {
//   let heightClassName = scss.card;
//   if (title == 'Time of year') {
//     heightClassName = scss.card_height;
//   }
  return (
    <div className={scss.card} key={id}>
      <div className={scss.img} key={id}>
        <Image
          src="/images/calendar.svg"
          width={23}
          height={23}
          alt={"calendar"}
        />
        <p>{title}</p>
      </div>
      <div className={scss.card_bottom} key={id}>
        {text?.map((el) => (
          <div key={id}>
            <p>{el.description}</p>
            {title === "Itinerary" ? (
              <ol>
                {el.arrayText?.map((elem) => (
                  <li key={id}>{elem.description}</li>
                ))}
              </ol>
            ) : (
              <ul>
                {el.arrayText?.map((elem) => (
                  <li key={id}>{elem.description}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourAboutCard;
