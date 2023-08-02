import React from "react";
import classNames from "classnames";
import { Logo, CpuIcon, PlayIcon } from "../components/Svg";
import { GameLink } from "../components/GameLink";
import { Container } from "../components/Container";

export const MainMenu: React.FC = () => {
  return (
    <Container height="h-[60vh]">
      <div
        className={classNames(
          "flex",
          "flex-col",
          "justify-between",
          "space-y-14",
          "py-16",
          "font-bold",
          "text-2xl",
        )}
      >
        <div className={classNames("mx-auto")}>
          <Logo />
        </div>
        <div className={classNames("space-y-6")}>
          <GameLink
            link="/game"
            text="player vs cpu"
            color="bg-red"
            icon={<CpuIcon />}
            textColor="text-white"
          />
          <GameLink
            link="/game"
            text="play vs player"
            color="bg-yellow"
            icon={<PlayIcon />}
          />
          <GameLink link="/rules" text="game rules" color="bg-white" />
        </div>
      </div>
    </Container>
  );
};
