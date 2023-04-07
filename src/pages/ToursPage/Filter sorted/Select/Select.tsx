import React, { useState } from "react";
import scss from './Select.module.scss';
import Option from "../Option/Option";
import Image from "next/image";


interface Tours {
    name: string
    option: Array<object>
    valueIndex: number
    status: boolean
    id: number;
    select: boolean;
    setTour: (value: string) => void;
    setDuration: (value: string) => void;
}

const Select: React.FC<Tours> = ({ name, option, valueIndex, select, setTour, setDuration }) => {
    const [arrow, setArrow] = useState(false)
    const result = React.useMemo(() => {
        return arrow ? <Image src={'assets/images/arrow.svg'} width={10} height={5} alt={"arrow"} /> : <Image src={'assets/images/arrowUp.svg'} width={10} height={5} alt={"arrow"} />
    }, [arrow]);

    const click = (): void => {
        setArrow(!arrow)
    }

    return (
        <div>
            <div onClick={click} className={scss.select}>
                <span className={scss.span}>{name}</span>
                {result}
            </div>
            {
                arrow && (
                    <Option valueIndex={valueIndex} select={select} value={option} name={name} setTour={setTour} setDuration={setDuration} />

                )}
        </div>
    )
}

export default Select