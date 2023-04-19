import React, { useMemo } from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./SightTourBlock.module.scss";
import SightTourCard from "./SightTourCard/SightTourCard";
import Link from "next/link";


interface TourProps {
  tours: Array<object>;
  sight: string;
}

const SightTourBlock: React.FC<TourProps> = ({ tours, sight }) => {
  const renderCards = useMemo(
    () => tours?.map((el, index) => <SightTourCard {...el} key={index} />),
    [tours]
  );
  return (
    <div className={scss.wrapper}>
      <div className="container">
          <Divider title={`Tours in ${sight}`} variant="dark">
            <Link href="/sights">
              <MoreBlock title="More tours" />
            </Link>
          </Divider>
          <div className={scss.cards}>{renderCards}</div>
      </div>
    </div>
  );
};

export default SightTourBlock;
