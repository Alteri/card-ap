import React, { ReactNode } from "react";
import { PageStyled } from "./styled";

export type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <PageStyled>{children}</PageStyled>;
};
