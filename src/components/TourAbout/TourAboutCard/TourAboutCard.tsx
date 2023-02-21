import React, { FC, ReactNode, useMemo } from "react";
import scss from "./TourAboutCard.module.scss";
import Image from "next/image";
interface TourAboutCardProps {
  title?: string;
  text?: textProps[];
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
}) => {
//   let heightClassName = scss.card;
//   if (title == 'Time of year') {
//     heightClassName = scss.card_height;
//   }
  return (
    <div className={scss.card}>
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
        {text?.map((el) => (
          <div>
            <p>{el.description}</p>
            {title === "Itinerary" ? (
              <ol>
                {el.arrayText?.map((elem) => (
                  <li>{elem.description}</li>
                ))}
              </ol>
            ) : (
              <ul>
                {el.arrayText?.map((elem) => (
                  <li>{elem.description}</li>
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
