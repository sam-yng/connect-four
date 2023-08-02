import React, { ReactElement } from "react";
import classNames from "classnames";

type ContainerProps = {
  children: ReactElement;
  background?: string;
  height?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  background,
  height,
}: ContainerProps) => {
  return (
    <article
      className={classNames(
        "border-4",
        "border-black",
        "rounded-2xl",
        "w-[37vw]",
        "text-black",
        "shadow-lg",
        "shadow-black",
        background,
        height,
      )}
    >
      {children}
    </article>
  );
};
