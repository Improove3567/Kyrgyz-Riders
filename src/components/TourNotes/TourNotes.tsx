import React, { FC } from "react";
import Divider from "../Divider/Divider";
import scss from './TourNotes.module.scss'
import Image from "next/image";
import cross from "../../../public/images/PriceDoesntInclude/cross.svg";

interface NotesProps {
  notes: string;
}
const TourNotes: FC<NotesProps> = ({ notes }) => {
  const showText = React.useMemo(
    () =>
      <div className={scss.paragraph} key={notes}>
        <div className={scss.title_mark}>
          <li></li>
          <p>{notes}</p>
        </div>
      </div>
    , [notes]
  );
  return (
    <div className={scss.title_block}>
      <div className="container">
        <Divider title="Notes" variant="dark" />
        <div className={scss.text}>{showText}</div>
      </div>
    </div>
  );
};

export default TourNotes;
