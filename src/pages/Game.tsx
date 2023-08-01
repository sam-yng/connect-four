import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { GameState } from "../redux/gameSlice";

export const Game: React.FC = () => {
  const gameData = useSelector((state: GameState) => state);

  return (
    <div>
      {gameData.map((items, index) => {
        return (
          <div className={classNames("flex", "flex-row")} key={index}>
            {items.map((subItems, subIndex) => {
              return (
                <div
                  className={classNames(
                    "border",
                    "border-3",
                    "p-4",
                    "flex",
                    "flex-col",
                  )}
                  key={subIndex}
                >
                  {subItems}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
