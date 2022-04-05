import React, { useState } from "react";
import {
  CardMenuStyled,
  MenuWrapper,
  MoreVerticalStyled,
  TrashStyled,
} from "./styled";

export type CardMenuProps = {
  removeCard?: () => void;
  color?: string;
};

export const CardMenu = ({ removeCard, color }: CardMenuProps) => {
  const [open, setOpen] = useState(false);
  return (
    <CardMenuStyled>
      <MoreVerticalStyled onClick={() => setOpen(!open)} open={open} />
      <MenuWrapper color={color} open={open}>
        <ul>
          <li onClick={removeCard}>
            <TrashStyled />
          </li>
        </ul>
      </MenuWrapper>
    </CardMenuStyled>
  );
};
