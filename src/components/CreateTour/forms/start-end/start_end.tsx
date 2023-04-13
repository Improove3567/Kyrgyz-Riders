import React, { useMemo, useState } from "react";
import scss from "./startend.module.scss";
import Image from "next/image";
import TownEnd from "./town/townEnd";
import TownStart from "./town/townStart";

interface IStartEnd {
    state?: any;
    dispatch: any;
}

const StartEnd: React.FC<IStartEnd> = ({ dispatch }) => {
    const [start, setStart] = useState([
        {
            id: 1,
            title: "Bishkek",
            active: false
        },
        {
            id: 2,
            title: "Karakol",
            active: false

        },
        {
            id: 3,
            title: "Kochkor",
            active: false

        },
        {
            id: 4,
            title: "Kyzart",
            active: false

        },
        {
            id: 5,
            title: "Naryn",
            active: false

        },
        {
            id: 6,
            title: "Bokonbaevo",
            active: false

        },
        {
            id: 7,
            title: "Osh",
            active: false

        }
    ])
    const [end, setEnd] = useState([
        {
            id: 1,
            title: "Bishkek",
            active: false
        },
        {
            id: 2,
            title: "Karakol",
            active: false

        },
        {
            id: 3,
            title: "Kochkor",
            active: false

        },
        {
            id: 4,
            title: "Kyzart",
            active: false

        },
        {
            id: 5,
            title: "Naryn",
            active: false

        },
        {
            id: 6,
            title: "Bokonbaevo",
            active: false

        },
        {
            id: 7,
            title: "Osh",
            active: false

        }
    ])

    const handleClickStart = (id: any, state: any) => {
        const filtered: any = [...start].find((comment) => comment.id === id);
        if (state === "toActive") {
            const arr = start.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: true };
                }
                return { ...el, active: false };
            });
            setStart(arr);
        } else {
            const arr = start.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: false };
                }
                return { ...el, active: false };
            });
            setStart(arr);
        }
    };
    const handleClickEnd = (id: any, state: any) => {
        const filtered: any = [...end].find((comment) => comment.id === id);
        if (state === "toActive") {
            const arr = end.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: true };
                }
                return { ...el, active: false };
            });
            setEnd(arr);
        } else {
            const arr = end.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: false };
                }
                return { ...el, active: false };
            });
            setEnd(arr);
        }
    };

    const renderTownsStart = useMemo(() => start.map((el) => <TownStart dispatch={dispatch} key={el.id} title={el.title} handleClick={handleClickStart} id={el.id} active={el.active} />), [start])
    const renderTownsEnd = useMemo(() => end.map((el) => <TownEnd dispatch={dispatch} key={el.id} title={el.title} handleClickEnd={handleClickEnd} id={el.id} active={el.active} />), [end])

    return (
        <div className={scss.content}>
            <div className={scss.textWrapper}>
                <h1>Where do you want start & end your trip?</h1>
            </div>
            <div className={scss.wrapper}>
                <div className={scss.left}>
                    <header>
                        <Image src={"/images/createTour/located.svg"} width={43} height={50} alt="start" />
                        <h3>Start location of tour</h3>
                    </header>
                    <main>
                        {renderTownsStart}
                    </main>
                </div>
                <div className={scss.right}>
                    <header>
                        <Image src={"/images/createTour/not.svg"} width={43} height={50} alt="end" />
                        <h3>End location of tour</h3>
                    </header>
                    <main>
                        {renderTownsEnd}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default StartEnd;