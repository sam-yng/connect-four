import React from "react";
import classNames from "classnames";

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  handleClick,
}: ButtonProps) => {
  return (
    <div className={classNames("mx-8")}>
      <button
        onClick={handleClick}
        className={classNames(
          "flex",
          "border-4",
          "border-black",
          "rounded-2xl",
          "px-6",
          "py-3",
          "shadow-lg",
          "shadow-black",
          "w-full",
          "justify-center",
          text === "quit game" ? "bg-red text-white" : "bg-white",
        )}
      >
        <h1>{text.toUpperCase()}</h1>
      </button>
    </div>
  );
};
