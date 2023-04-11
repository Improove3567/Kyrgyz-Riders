import React from "react";
import scss from "./groupsize.module.scss";
import Image from "next/image";

interface IGroup {
    state: any;
    dispatch: any;
}

const GroupSize: React.FC<IGroup> = ({ state, dispatch }) => {
    return (
        <div className={scss.content}>
            <div className={scss.textWrapper}>
                <h1>Numbers of travelers</h1>
            </div>
            <div className={scss.number_index_wrapper}>
                <div className={scss.number_index_left_content}>
                    <div className={scss.number_index_left_top_content}>
                        <Image src={"/images/createTour/adult.svg"} width={60} height={53} alt="peolple" />
                        <p className={scss.image_title}>Numbers of adults</p>
                    </div>
                    <div className={scss.number_index_left_bottom_content}>
                        <div className={scss.number_index_bottom_left_content}>
                            <button
                                onClick={() => dispatch({ type: "decrementAdult", payload: 1 })}
                            >
                                <div className={scss.minus}></div>
                            </button>
                            <div>
                                <p>{state.adults}</p>
                            </div>
                            <button
                                onClick={() => dispatch({ type: "incrementAdult", payload: 1 })}
                            >
                                <div className={scss.plus}></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={scss.number_index_right_content}>
                    <div className={scss.number_index_right_bottom_content}>
                        <Image src={"/images/createTour/childs.svg"} width={60} height={53} alt="peolple" />
                        <p>Numbers of children</p>
                    </div>
                    <div className={scss.number_index_bottom_right_content}>
                        <button
                            onClick={() => dispatch({ type: "decrementChild", payload: 1 })}
                        >
                            <div className={scss.minus}></div>
                        </button>
                        <div>
                            <p>{state.childs}</p>
                        </div>
                        <button
                            onClick={() => dispatch({ type: "incrementChild", payload: 1 })}
                        >
                            <div className={scss.plus}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupSize;