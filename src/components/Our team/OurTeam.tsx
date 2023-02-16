import React, { useEffect, useMemo } from "react";
import Divider from "../Divider/Divider";
import scss from "./OurTeam.module.scss"
import TeamCard from "./Team card/TeamCard";
import useTeam from "../../hooks/useTeam";

const OurTeam: React.FC = () => {

  const { team, getTeam } = useTeam();

  useEffect(() => {
    getTeam()
  }, [])

  const render = useMemo(() => (
    team.map((el: any) => (
      <TeamCard {...el} key={el.title} />
    ))
  ), [team])

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
