import React, { ReactNode } from "react";
import { ButtonStyled } from "./styled";

export type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
