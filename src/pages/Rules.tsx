import React from "react";
import classNames from "classnames";
import { Container } from "../components/Container";
import { Confirm } from "../components/Svg";
import { Link } from "react-router-dom";

type RuleProps = {
  number: string;
  rule: string;
};

const Rule: React.FC<RuleProps> = ({ number, rule }: RuleProps) => {
  return (
    <div className={classNames("flex", "flex-row", "space-x-4")}>
      <h1 className={classNames("text-black", "font-bold")}>{number}</h1>
      <h1>{rule}</h1>
    </div>
  );
};

export const Rules: React.FC = () => {
  return (
    <Container background="bg-white" height="h-[65vh]">
      <div className={classNames("text-gray-600", "mt-8", "mx-12", "static")}>
        <h1
          className={classNames(
            "text-5xl",
            "text-center",
            "font-bold",
            "text-black",
          )}
        >
          RULES
        </h1>
        <h1
          className={classNames(
            "font-bold",
            "text-purple",
            "text-xl",
            "mt-8",
            "mb-3",
          )}
        >
          OBJECTIVE
        </h1>
        <p className="mb-6">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h1 className={classNames("font-bold", "text-purple", "text-xl")}>
          HOW TO PLAY
        </h1>
        <div className={classNames("mt-3", "space-y-2")}>
          <Rule number="1" rule="Red goes first in the first game." />
          <Rule
            number="2"
            rule="Players must alternate turns, and only one disc can be dropped in
            each turn."
          />
          <Rule
            number="3"
            rule="The game ends when there is a 4-in-a-row or a stalemate."
          />
          <Rule
            number="4"
            rule="The starter of the previous game goes second on the next game."
          />
        </div>
        <Link
          to="/"
          className={classNames(
            "absolute",
            "bottom-32",
            "right-[50%]",
            "translate-x-[50%]",
          )}
        >
          <Confirm />
        </Link>
      </div>
    </Container>
  );
};
