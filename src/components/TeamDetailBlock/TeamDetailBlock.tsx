import React, { FC, useMemo, useEffect } from "react"; 
import Divider from "../Divider/Divider"; 
import scss from './TeamDetailBlock.module.scss' 
import useTeam from "../../hooks/useTeam"; 
import { useRouter } from "next/router"; 
import Preloader from "../Preloader/Preloader"; 
 
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
 
const TeamDetailBlock: FC<TeamDetailProps> = () => { 
 
    const { getTeamDetail, teamDetail, isLoading }: any = useTeam(); 
 
    const router = useRouter(); 
    const { id }: any = router.query; 
 
    useEffect(() => { 
        if (id != undefined) { 
            getTeamDetail(id); 
        } 
    }, [id]) 
 
    const renderData = useMemo(() => { 
 
        const fullName = teamDetail?.name + " " + teamDetail?.lastName; 
 
    if (isLoading) return <Preloader full /> 
        return ( 
            <div className={scss.paragraph}> 
                <div className={scss.DImage}> 
                    <img src={teamDetail?.image} alt='detail image' /> 
                    <div className={scss.blocDPage}> 
                        <div className={scss.containerDivider}> 
                            <div className={scss.divider}><Divider title={fullName} variant='dark' /></div> 
                        </div>
                        <div className={scss.containerForAdap}>
                            <img src={teamDetail?.image} alt='detail image' /> 
                            <p className={scss.description}>{teamDetail?.description}</p> 
                        </div>
                    </div> 
                </div> 
            </div> 
        ) 
    }, [teamDetail]) 
 
    if (isLoading) return <Preloader full /> 
    return ( 
        <div className={scss.title_block}> 
            <div className={scss.text}> 
                {renderData} 
            </div> 
        </div> 
    ) 
} 
export default TeamDetailBlock;