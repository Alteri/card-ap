import React, { ReactNode } from "react";
import { ListWrapperStyled } from "./styled";

export type ListWrapperProps = {
  children: ReactNode;
};

export const ListWrapper = ({ children }: ListWrapperProps) => {
  return <ListWrapperStyled>{children}</ListWrapperStyled>;
};
