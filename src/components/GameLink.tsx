import React, { ReactElement } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

type GameLinkProps = {
  link?: string;
  text: string;
  textColor?: string;
  icon?: ReactElement;
  color: string;
  centerText?: boolean;
};

export const GameLink: React.FC<GameLinkProps> = ({
  link,
  text,
  textColor,
  icon,
  color,
  centerText,
}: GameLinkProps) => {
  return (
    <Link
      to={link as string}
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "border-4",
        "border-black",
        color,
        "rounded-2xl",
        "px-6",
        "py-3",
        "mx-8",
        "shadow-lg",
        "shadow-black",
        centerText ? "justify-center" : "justify-between",
      )}
    >
      <h1 className={classNames(textColor)}>{text.toUpperCase()}</h1>
      {icon && <div>{icon}</div>}
    </Link>
  );
};
