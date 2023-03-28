import React, { FC, useMemo } from "react";
import Divider from "../Divider/Divider";
import scss from './TeamDetailBlock.module.scss'

interface TeamDetailTypes {
    image?: string;
    name?: string;
    lastName?: string;
    speciality?: string;
    description?: string;
}

interface TeamDetailProps {
    teamDetail?: TeamDetailTypes;
}

const TeamDetailBlock: FC<TeamDetailProps> = ({ teamDetail }) => {
    const renderData = useMemo(() => {
        const fullName = teamDetail?.name + " " + teamDetail?.lastName
        return (
            <div className={scss.paragraph}>
                <div className={scss.DImage}>
                    <img src={teamDetail?.image} alt='detail image' width={384} height={384} />
                    <div className={scss.blocDPage}>
                        <div className={scss.divider}><Divider title={fullName} variant='dark' /></div>
                        <p className={scss.description}>{teamDetail?.description}</p>
                    </div>
                </div>
            </div>
        )

    }, [teamDetail])
    return (
        <div className={scss.title_block}>
            <div className={scss.text}>
                {renderData}
            </div>
        </div>
    )
}
export default TeamDetailBlock;