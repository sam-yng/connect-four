import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { BoardState, placePiece, clearBoard } from "../redux/boardSlice";
import { Logo } from "../components/Svg";
import { Player } from "../components/Player";
import { GameNavigation } from "../components/GameNavigation";
import { MenuModal } from "../components/MenuModal";
import { PlayerState, resetTurn, turnChange } from "../redux/playerSlice";

export const Game: React.FC = () => {
  const boardData = useSelector((state: BoardState) => state.board);
  const playerData = useSelector((state: PlayerState) => state.player);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setOpen(!open);
  };

  const handleRestart = () => {
    dispatch(clearBoard());
    dispatch(resetTurn());
    setOpen(!open);
  };

  const handlePiecePlacement = (index: number, subIndex: number) => {
    dispatch(
      placePiece({ index: index, subIndex: subIndex, player: playerData }),
    );
    dispatch(turnChange({ player: playerData === "1" ? "2" : "1" }));
  };

  return (
    <div>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "items-center",
          "justify-between",
          "mb-12",
          "mx-44",
          "h-full",
        )}
      >
        <GameNavigation onClick={handleModal} text="Menu" />
        <MenuModal open={open} onClose={handleModal} onReset={handleRestart} />
        <Logo />
        <GameNavigation text="Restart" onClick={handleRestart} />
      </div>
      <section
        className={classNames("flex-row", "flex", "items-center", "space-x-12")}
      >
        <Player number="1" />
        <div className={classNames("flex", "flex-col")}>
          <div
            className={classNames(
              "bg-white",
              "p-2",
              "rounded-2xl",
              "border-4",
              "border-black",
              "shadow-lg",
              "shadow-black",
            )}
          >
            {boardData?.map((items, index) => {
              return (
                <div
                  className={classNames(
                    "flex",
                    "flex-row",
                    "rounded-2xl",
                    "bg-white",
                  )}
                  key={index}
                >
                  {items?.map((subItems, subIndex) => {
                    return (
                      <div
                        id="circle"
                        className={classNames(
                          "border",
                          "border-3",
                          "p-6",
                          "flex",
                          "flex-col",
                          "rounded-full",
                          "m-2",
                          "border-4",
                          "border-black",
                          boardData[index][subIndex] === ""
                            ? "bg-purple"
                            : boardData[index][subIndex] === "1"
                            ? "bg-red text-red text-[0.5px]"
                            : "bg-yellow text-yellow text-[0.5px]",
                        )}
                        key={subIndex}
                        onClick={() =>
                          boardData[index][subIndex] === ""
                            ? handlePiecePlacement(index, subIndex)
                            : null
                        }
                      >
                        {subItems}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Player number="2" />
      </section>
      <div
        className={classNames(
          "flex",
          "justify-center",
          "border-black",
          "border-2",
          "w-48",
          "mx-auto",
          "drop-shadow-lg",
          "mt-4",
          "h-24",
          "rounded-2xl",
          "pt-8",
          "font-bold",
          playerData === "1" ? "bg-red text-white" : "bg-yellow text-black",
        )}
      >
        {playerData === "1" ? (
          <h1>PLAYER 1&apos;S TURN</h1>
        ) : (
          <h1>PLAYER 2&apos;S TURN</h1>
        )}
      </div>
    </div>
  );
};
