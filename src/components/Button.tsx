import React, { ReactElement } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

type ButtonProps = {
  link: string;
  text: string;
  textColor?: string;
  icon?: ReactElement;
  color: string;
};

export const Button: React.FC<ButtonProps> = ({
  link,
  text,
  textColor,
  icon,
  color,
}: ButtonProps) => {
  return (
    <Link
      to={link}
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "border-4",
        "border-black",
        color,
        "justify-between",
        "rounded-2xl",
        "px-6",
        "py-3",
        "mx-8",
        "shadow-lg",
        "shadow-black",
      )}
    >
      <h1 className={classNames(textColor)}>{text.toUpperCase()}</h1>
      <div>{icon}</div>
    </Link>
  );
};
