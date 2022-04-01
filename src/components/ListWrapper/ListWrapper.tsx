import React, { ReactNode } from "react";
import { ListWrapperStyled } from "./styled";

export type ListWrapperProps = {
  children: ReactNode;
  gap?: string;
};

export const ListWrapper = ({ children, gap, ...props }: ListWrapperProps) => {
  return (
    <ListWrapperStyled gap={gap} as="ul" {...props}>
      {children}
    </ListWrapperStyled>
  );
};
