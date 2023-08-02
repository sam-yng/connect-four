import React from "react";
import classNames from "classnames";
import { Modal } from "@mui/material";
import { Container } from "./Container";
import { GameLink } from "./GameLink";
import { Button } from "./Button";

type MenuModalProps = {
  open: boolean;
  onClose: () => void;
};

export const MenuModal: React.FC<MenuModalProps> = ({
  open,
  onClose,
}: MenuModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className={classNames(
          "absolute",
          "bottom-[50%]",
          "right-[50%]",
          "translate-x-[50%]",
          "translate-y-[50%]",
        )}
      >
        <Container background="bg-purple">
          <div
            className={classNames(
              "mt-8",
              "text-2xl",
              "font-bold",
              "mb-12",
              "space-y-6",
            )}
          >
            <h1
              className={classNames(
                "text-5xl",
                "text-center",
                "text-white",
                "mb-6",
              )}
            >
              PAUSE
            </h1>
            <Button text="continue" handleClick={onClose} />
            <Button text="restart" handleClick={onClose} />
            <GameLink
              centerText
              link="/"
              text="quit game"
              color="bg-red"
              textColor="text-white"
            />
          </div>
        </Container>
      </div>
    </Modal>
  );
};
