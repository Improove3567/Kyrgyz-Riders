import Link from "next/link";
import React from "react";
import scss from "./Divider.module.scss";

interface DividerProps {
  children?: React.ReactNode;
  title: string;
  variant: "light" | "dark";
}

const Divider: React.FC<DividerProps> = ({ children, title, variant }) => {
  let className = scss.title;
  if (variant === "dark") {
    className = scss.dark_title;
  }

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <p className={className}>{title}</p>
        <Link href={`/${title}`}>{children}</Link>
      </div>
    </div>
  );
};

export default Divider;
