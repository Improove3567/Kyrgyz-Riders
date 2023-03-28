import React, { useEffect, useMemo } from "react";
import Divider from "../Divider/Divider";
import scss from "./OurTeam.module.scss";
import TeamCard from "./Team card/TeamCard";
import useTeam from "../../hooks/useTeam";
import MoreBlock from "../Divider/More block/MoreBlock";

const OurTeam: React.FC = () => {
  const { team, getTeam } = useTeam();

  useEffect(() => {
    getTeam();
  }, []);

  const render = useMemo(
    () => team.map((el, index) => <TeamCard {...el} key={index} />),
    [team]
  );

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <Divider title="Our Team" variant={"dark"}>
          <div className={scss.ourTeamArrow}>
            <MoreBlock />
          </div>
        </Divider>
        <div className={scss.content}>{render}</div>
      </div>
    </div>
  );
};

export default OurTeam;
