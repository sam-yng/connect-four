import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { BoardState, placePiece, clearBoard } from "../redux/boardSlice";
import { Logo } from "../components/Svg";
import { Player } from "../components/Player";
import { GameNavigation } from "../components/GameNavigation";
import { MenuModal } from "../components/MenuModal";
import { PlayerState, resetTurn, turnChange } from "../redux/playerSlice";
import { useNavigate } from "react-router-dom";

export const Game: React.FC = () => {
  const boardData = useSelector((state: BoardState) => state.board);
  const playerData = useSelector((state: PlayerState) => state.player);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModal = () => {
    setOpen(!open);
  };

  const handleRestart = () => {
    dispatch(clearBoard());
    dispatch(resetTurn());
    open === true && setOpen(!open);
  };

  const handleQuit = () => {
    dispatch(clearBoard());
    dispatch(resetTurn());
    navigate("/");
  };

  const handleWin = () => {
    alert(`Player ${playerData} wins`);
    dispatch(clearBoard());
    dispatch(resetTurn());
  };

  const checkWinCondition = () => {
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 7; k++) {
        if (
          boardData[i][k] === playerData &&
          boardData[i + 1][k] === playerData &&
          boardData[i + 2][k] === playerData &&
          boardData[i + 3][k] === playerData
        ) {
          handleWin();
        }
      }
    }
    for (let i = 0; i < 6; i++) {
      for (let k = 0; k < 4; k++) {
        if (
          boardData[i][k] === playerData &&
          boardData[i][k + 1] === playerData &&
          boardData[i][k + 2] === playerData &&
          boardData[i][k + 3] === playerData
        ) {
          handleWin();
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 4; k++) {
        if (
          boardData[i][k] === playerData &&
          boardData[i + 1][k + 1] === playerData &&
          boardData[i + 2][k + 2] === playerData &&
          boardData[i + 3][k + 3] === playerData
        ) {
          handleWin();
        }
      }
    }
    for (let i = 3; i < 6; i++) {
      for (let k = 0; k < 4; k++) {
        if (
          boardData[i][k] === playerData &&
          boardData[i - 1][k + 1] === playerData &&
          boardData[i - 2][k + 2] === playerData &&
          boardData[i - 3][k + 3] === playerData
        ) {
          handleWin();
        }
      }
    }
    console.log("checked");
    return null;
  };

  const handlePiecePlacement = (subIndex: number) => {
    let index = 5;
    boardData[5][subIndex].length === 0
      ? (index = 5)
      : boardData[5][subIndex].length !== 0 &&
        boardData[4][subIndex].length === 0
      ? (index = 4)
      : boardData[4][subIndex].length !== 0 &&
        boardData[3][subIndex].length === 0
      ? (index = 3)
      : boardData[3][subIndex].length !== 0 &&
        boardData[2][subIndex].length === 0
      ? (index = 2)
      : boardData[2][subIndex].length !== 0 &&
        boardData[1][subIndex].length === 0
      ? (index = 1)
      : boardData[1][subIndex].length !== 0 &&
        boardData[0][subIndex].length === 0
      ? (index = 0)
      : null;
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
        <MenuModal
          open={open}
          onQuit={handleQuit}
          onClose={handleModal}
          onReset={handleRestart}
        />
        <Logo />
        <GameNavigation onClick={handleRestart} text="Restart" />
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
                        onClick={() => handlePiecePlacement(subIndex)}
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
