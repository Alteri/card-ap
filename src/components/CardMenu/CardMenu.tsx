import React, { useState } from "react";
import {
  CardMenuStyled,
  MenuWrapper,
  MoreVerticalStyled,
  TrashStyled,
  EditStyled,
  ListStyled,
} from "./styled";

export type CardMenuProps = {
  removeCard?: () => void;
  editPage?: () => void;
  setActiveCard?: () => void;
  color?: string;
};

export const CardMenu = ({
  removeCard,
  editPage,
  setActiveCard,
  color,
}: CardMenuProps) => {
  const [open, setOpen] = useState(false);

  const currentCard = () => {
    setActiveCard?.();
    setOpen(!open);
  };
  return (
    <CardMenuStyled>
      <MoreVerticalStyled onClick={() => currentCard()} open={open} />
      <MenuWrapper color={color} open={open}>
        <ListStyled as="ul" gap="16px">
          {removeCard && (
            <li onClick={removeCard}>
              <TrashStyled />
            </li>
          )}
          {editPage && (
            <li onClick={editPage}>
              <EditStyled />
            </li>
          )}
        </ListStyled>
      </MenuWrapper>
    </CardMenuStyled>
  );
};
