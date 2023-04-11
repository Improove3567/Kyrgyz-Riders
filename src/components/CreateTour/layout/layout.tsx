import React, { ReactElement } from "react";
import scss from "./layout.module.scss";

interface IComponent {
    children?: React.ReactNode | ReactElement;
    next: (e: any) => void;
    back: (e: any) => void;
}

const Layout: React.FC<IComponent> = ({ children, next, back }) => {

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <div className={scss.content}>
                    {children}
                </div>
                <div className={scss.btns}>
                    <button onClick={(e) => back(e)}>
                        <p>Go Back</p>
                    </button>
                    <button onClick={(e) => next(e)}>
                        <p>Next Step</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
