import React from "react";
import classNames from "classnames";

type GameNavigationProps = {
  text: string;
  onClick?: () => void;
};

export const GameNavigation: React.FC<GameNavigationProps> = ({
  text,
  onClick,
}: GameNavigationProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "bg-darkpurple",
        "text-white",
        "py-2",
        "px-5",
        "rounded-2xl",
        "w-28",
        "font-bold",
        "hover:bg-red",
      )}
    >
      {text.toUpperCase()}
    </button>
  );
};
