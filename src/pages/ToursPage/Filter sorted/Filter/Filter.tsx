import React from "react";
import Select from "../Select/Selec";
import css from "./Filter.module.scss";
import DownSelect from "../DownSelect/DownSelect";

const Filter : React.FC = () => {
    return(
        <div className={css.filter}>
            <Select />
            <DownSelect />
        </div>
    )
}

export default Filter 