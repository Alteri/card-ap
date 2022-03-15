import React, { ReactNode } from "react";
import { ButtonStyled } from "./styled";

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
