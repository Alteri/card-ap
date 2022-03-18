import React, { ReactNode } from "react";
import { ButtonStyled } from "./styled";

export type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
