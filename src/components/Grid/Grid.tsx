import React, { ReactNode } from "react";
import { GridStyled } from "./styled";
import { JustifyContent, AlignItems, AlignContent } from "./types";

export type GridProps = {
  children?: ReactNode;
  gap?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  templateColumns?: string;
  alignContent?: AlignContent;
};

export const Grid = ({
  children,
  gap,
  alignItems,
  justifyContent,
  templateColumns,
  alignContent,
  ...props
}: GridProps) => {
  return (
    <GridStyled
      gap={gap}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyContent={justifyContent}
      templateColumns={templateColumns}
      {...props}
    >
      {children}
    </GridStyled>
  );
};
