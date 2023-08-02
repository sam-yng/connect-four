import React from "react";
import classNames from "classnames";
import { PlayerOne, PlayerTwo } from "./Svg";

type PlayerProps = {
  number: string;
  score?: number;
};

export const Player: React.FC<PlayerProps> = ({
  number,
  score = 0,
}: PlayerProps) => {
  return (
    <div
      className={classNames(
        "bg-white",
        "border-4",
        "border-black",
        "shadow-lg",
        "shadow-black",
        "text-center",
        "rounded-xl",
        "h-[20vh]",
        "font-bold",
        "px-4",
        "relative",
      )}
    >
      <div
        className={classNames(
          "absolute",
          "-top-8",
          "right-[50%]",
          "translate-x-[50%]",
        )}
      >
        {number === "1" ? <PlayerOne /> : <PlayerTwo />}
      </div>
      <h1 className={classNames("text-xl", "mb-2", "mt-12")}>
        PLAYER {number}
      </h1>
      <h1 className={classNames("text-4xl")}>{score}</h1>
    </div>
  );
};
