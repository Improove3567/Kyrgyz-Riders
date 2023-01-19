import React from "react";
import scss from "./Divider.module.scss"

interface DividerProps {
  children: React.ReactNode;
  title: string;
  variant: "light" | "dark";
}

const Divider: React.FC<DividerProps> = ({ children, title, variant }) => {
  let className = scss.title
  if (variant === 'dark') {
    className = scss.dark_title
  }
  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.content}>
          <p className={className}>{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
};

export default Divider;
