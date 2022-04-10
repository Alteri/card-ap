import React, { ReactNode } from "react";
import { GridStyled } from "./styled";

export type GridProps = {
  children?: ReactNode;
  gap?: string;
  templateColumns?: string;
};

export const Grid = ({
  children,
  gap,

  templateColumns,

  ...props
}: GridProps) => {
  return (
    <GridStyled gap={gap} templateColumns={templateColumns} {...props}>
      {children}
    </GridStyled>
  );
};
