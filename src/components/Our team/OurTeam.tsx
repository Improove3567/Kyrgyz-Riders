import React, { useMemo } from "react";
import Divider from "../Divider/Divider";
import scss from "./OurTeam.module.scss"
import TeamCard from "./Team card/TeamCard";
import { TeamData } from './../../constants/TeamData';

const OurTeam: React.FC = () => {

  const render = useMemo(() => (
    TeamData.map((el) => (
      <TeamCard {...el} key={el.title} />
    ))
  ), [])

  return (
    <div className={scss.wrapper}>
      <Divider title="Our Team" variant={"dark"} />
      <div className={scss.content}>
        {render}
      </div>
    </div>
  );
};

export default OurTeam;
