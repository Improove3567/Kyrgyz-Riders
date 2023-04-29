import React, { ReactElement } from "react";
import scss from "./layout.module.scss";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import useCustom from "../../../hooks/useCustomTour";

interface IComponent {
    children?: React.ReactNode | ReactElement;
    next: (e: any) => void;
    back: (e: any) => void;
    secondCLicker: any;
    goTo: any;
    state: any;
}

const Layout: React.FC<IComponent> = ({ children, next, back, secondCLicker, state }) => {

    const { addCustomTour } = useCustom()

    const onSendEmail = async (e: any) => {
        e.preventDefault();
        next(e);
        await emailjs.send(
            "service_lzpnztn",
            "template_mvivcg2",
            {
                ...state,
                activities: state.activities.map((el: any) => Object.values(el).toString()).toString(),
                sights: state.sights?.map((el: any) => Object.values(el).toString()).toString(),
                watchShows: state.watchShows?.map((el: any) => Object.values(el).toString()).toString()
            },
            "OejkDER052Yd01Tyj"
        ).then(() => {
        }, (error) => {
            alert("something went wrong!" + error);
        })
        await addCustomTour({
            ...state
        }).catch((er) => console.log(er))
    }

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <div className={scss.content}>
                    {children}
                </div>
                <div className={scss.btns}>
                    {
                        secondCLicker == 9 ? <Link href={"/"} className={scss.goBack} >
                            Go Home
                        </Link> : <><button onClick={(e) => back(e)}>
                            <p>Go Back</p>
                        </button>
                            {
                                secondCLicker == 8 ? <button onClick={(e) => onSendEmail(e)}>
                                    <p>Submit</p>
                                </button> : <button onClick={(e) => next(e)}>
                                    <p>Next Step</p>
                                </button>
                            }</>
                    }
                </div>
            </div>
        </div>
    );
};

export default Layout;
