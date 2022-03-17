import React, { ReactNode } from "react";
import { IconButtonStyled } from "./styled";

export type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <IconButtonStyled {...props}>{children}</IconButtonStyled>;
};
