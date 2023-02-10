import React from "react";
import SelectTours from "../SelectTours/SelectTours";
import SelectActive from "../SelectActive/SelectActive";
import SelectStaicForm from "../SelectStaticForm/SelectStaticForm";
import SelectDuration from "../SelectDuration/SelectDuration";
import scss from "./DetailFilter.module.scss";


const DetailFilter : React.FC = () => {
    return(
        <div className={scss.filter}>
            <SelectTours/>
            <SelectActive/>
            <SelectDuration/>
            <SelectStaicForm/>
        </div>
    )
}

export default DetailFilter 